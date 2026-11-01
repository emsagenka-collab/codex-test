import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { lexicon, demoText } from "./lexicon";
import {
  addDays,
  containsWord,
  dayKey,
  normalize,
  schedule,
  sentences,
  splitSections,
  tokens,
  matches,
} from "./learning";
import { checkTurkishOrthography } from "./orthography";
import { hasLegacyTurkishGlyphs, repairTurkishText } from "./text-repair";
import type { Entry, Settings, State, Word } from "./types";
let connection: DatabaseSync;
const legacyBooks = new Map<number, boolean>();
function legacyBook(bookId: number) {
  if (!legacyBooks.has(bookId))
    legacyBooks.set(
      bookId,
      hasLegacyTurkishGlyphs(
        all(
          "SELECT originalText FROM TextSection WHERE bookId=? ORDER BY sectionNumber",
          bookId,
        )
          .map((s) => String(s.originalText))
          .join("\n\n"),
      ),
    );
  return legacyBooks.get(bookId)!;
}
export function db() {
  if (connection) return connection;
  const dir = process.env.KELIME_DATA_DIR || path.join(process.cwd(), "data");
  mkdirSync(dir, { recursive: true });
  connection = new DatabaseSync(path.join(dir, "kelime.sqlite"));
  connection.exec(`PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON;
 CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY, settings TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS Book (id INTEGER PRIMARY KEY, title TEXT NOT NULL, importedAt TEXT NOT NULL, isDemo INTEGER NOT NULL DEFAULT 0);
 CREATE TABLE IF NOT EXISTS TextSection (id INTEGER PRIMARY KEY, bookId INTEGER REFERENCES Book(id), sectionNumber INTEGER, originalText TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS VocabularyWord (id INTEGER PRIMARY KEY, word TEXT NOT NULL, normalizedWord TEXT NOT NULL UNIQUE, data TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS WordOccurrence (id INTEGER PRIMARY KEY, wordId INTEGER REFERENCES VocabularyWord(id), sectionId INTEGER REFERENCES TextSection(id), sentence TEXT NOT NULL, surroundingText TEXT NOT NULL, translation TEXT NOT NULL DEFAULT '', context TEXT NOT NULL DEFAULT '');
 CREATE TABLE IF NOT EXISTS LearningProgress (id INTEGER PRIMARY KEY, userId INTEGER REFERENCES User(id), wordId INTEGER REFERENCES VocabularyWord(id), status TEXT NOT NULL DEFAULT 'new', firstSeen TEXT, lastReviewed TEXT, nextReview TEXT, reviewCount INTEGER NOT NULL DEFAULT 0, difficultyRating TEXT, UNIQUE(userId,wordId));
 CREATE TABLE IF NOT EXISTS DailyWords (date TEXT PRIMARY KEY, word1 INTEGER REFERENCES VocabularyWord(id), word2 INTEGER REFERENCES VocabularyWord(id));
 CREATE TABLE IF NOT EXISTS Activity (day TEXT NOT NULL, wordId INTEGER REFERENCES VocabularyWord(id), UNIQUE(day,wordId));
 CREATE TABLE IF NOT EXISTS AppMeta (key TEXT PRIMARY KEY, value TEXT NOT NULL);`);
  connection.prepare("INSERT OR IGNORE INTO User VALUES (1,?)").run(
    JSON.stringify({
      level: "B2",
      theme: "light",
      textSize: "normal",
      reminder: "19:00",
      timezone: "Europe/Berlin",
    }),
  );
  return connection;
}
function all(sql: string, ...args: (string | number)[]) {
  return db()
    .prepare(sql)
    .all(...args) as Record<string, unknown>[];
}
function one(sql: string, ...args: (string | number)[]) {
  return all(sql, ...args)[0];
}
export function settings(): Settings {
  return JSON.parse(
    String(one("SELECT settings FROM User WHERE id=1").settings),
  );
}
export function saveSettings(input: Partial<Settings>) {
  const previous = settings();
  const merged = { ...previous, ...input };
  if (
    !["B1", "B2", "C1"].includes(merged.level) ||
    !["light", "dark", "system"].includes(merged.theme) ||
    !["normal", "large"].includes(merged.textSize) ||
    !/^([01]\d|2[0-3]):[0-5]\d$/.test(merged.reminder)
  )
    throw new Error("Ungültige Einstellungen.");
  dayKey(new Date(), merged.timezone);
  db()
    .prepare("UPDATE User SET settings=? WHERE id=1")
    .run(JSON.stringify(merged));
}
export function importBook(
  title: string,
  text: string,
  isDemo = false,
  extra: Entry[] = [],
) {
  const legacy = !isDemo && hasLegacyTurkishGlyphs(text);
  const sections = splitSections(text);
  if (!sections.length)
    throw new Error(
      "Kein lesbarer Text gefunden. Bei gescannten PDFs bitte zuerst OCR verwenden.",
    );
  const dictionary = [
    ...extra,
    ...lexicon.filter(
      (e) => !extra.some((x) => normalize(x.word) === normalize(e.word)),
    ),
  ];
  const found = dictionary
    .map((entry) => ({
      entry,
      occurrences: sections.flatMap((section, i) =>
        sentences(section)
          .filter((s) => containsWord(repairTurkishText(s, legacy), entry.word))
          .map((sentence) => ({ section, i, sentence })),
      ),
    }))
    .filter((x) => x.occurrences.length);
  if (found.length < 2)
    throw new Error(
      `Nur ${found.length} passende Wörter erkannt. Für eine Tageslektion werden mindestens zwei benötigt. Nutze einen längeren Text oder die optionale KI-Anbindung (siehe README).`,
    );
  db().exec("BEGIN IMMEDIATE");
  try {
    const bookId = Number(
      db()
        .prepare("INSERT INTO Book(title,importedAt,isDemo) VALUES (?,?,?)")
        .run(title, new Date().toISOString(), Number(isDemo)).lastInsertRowid,
    );
    const sectionIds = sections.map((s, i) =>
      Number(
        db()
          .prepare(
            "INSERT INTO TextSection(bookId,sectionNumber,originalText) VALUES (?,?,?)",
          )
          .run(bookId, i + 1, s).lastInsertRowid,
      ),
    );
    for (const { entry, occurrences } of found) {
      db()
        .prepare(
          "INSERT OR IGNORE INTO VocabularyWord(word,normalizedWord,data) VALUES (?,?,?)",
        )
        .run(entry.word, normalize(entry.word), JSON.stringify(entry));
      const wordId = Number(
        one(
          "SELECT id FROM VocabularyWord WHERE normalizedWord=?",
          normalize(entry.word),
        ).id,
      );
      for (const occ of occurrences) {
        if (!text.includes(occ.sentence))
          throw new Error("Quellenprüfung fehlgeschlagen.");
        db()
          .prepare(
            "INSERT INTO WordOccurrence(wordId,sectionId,sentence,surroundingText,translation,context) VALUES (?,?,?,?,?,?)",
          )
          .run(
            wordId,
            sectionIds[occ.i],
            occ.sentence,
            occ.section,
            isDemo
              ? lexicon.find((e) => e.demo === occ.sentence)?.translation || ""
              : extra.includes(entry) &&
                  entry.demo === repairTurkishText(occ.sentence, legacy)
                ? entry.translation
                : "",
            isDemo
              ? lexicon.find((e) => e.demo === occ.sentence)?.context || ""
              : extra.includes(entry) &&
                  entry.demo === repairTurkishText(occ.sentence, legacy)
                ? entry.context
                : "",
          );
      }
      db()
        .prepare(
          "INSERT OR IGNORE INTO LearningProgress(userId,wordId) VALUES (1,?)",
        )
        .run(wordId);
    }
    db()
      .prepare("INSERT OR REPLACE INTO AppMeta VALUES ('activeBook',?)")
      .run(String(bookId));
    db().exec("COMMIT");
    return { bookId, sections: sections.length, words: found.length };
  } catch (e) {
    db().exec("ROLLBACK");
    throw e;
  }
}
export function loadDemo() {
  const previous = one("SELECT id FROM Book WHERE isDemo=1");
  if (previous) {
    db()
      .prepare("INSERT OR REPLACE INTO AppMeta VALUES ('activeBook',?)")
      .run(String(previous.id));
    return;
  }
  return importBook("Ein Lesebuch · Demo", demoText, true);
}
function vocabulary(): Word[] {
  const active = Number(
    one("SELECT value FROM AppMeta WHERE key='activeBook'")?.value || 0,
  );
  return all(
    `SELECT v.id,v.data,p.*,v.id AS vocabularyId FROM VocabularyWord v JOIN LearningProgress p ON p.wordId=v.id WHERE EXISTS (SELECT 1 FROM WordOccurrence WHERE wordId=v.id)`,
  ).map((row) => {
    const o = one(
      `SELECT o.*,s.sectionNumber,b.title,b.isDemo,b.id AS bookId FROM WordOccurrence o JOIN TextSection s ON s.id=o.sectionId JOIN Book b ON b.id=s.bookId WHERE o.wordId=? ORDER BY (b.id=?) DESC,(o.sentence=?) DESC,b.isDemo ASC,o.id ASC LIMIT 1`,
      Number(row.vocabularyId),
      active,
      JSON.parse(String(row.data)).demo,
    );
    const legacy = !o.isDemo && legacyBook(Number(o.bookId));
    const sentence = repairTurkishText(String(o.sentence), legacy);
    const section = repairTurkishText(String(o.surroundingText), legacy);
    return {
      ...JSON.parse(String(row.data)),
      id: Number(row.vocabularyId),
      sentence,
      section,
      orthography: checkTurkishOrthography(sentence),
      wordOrthography: checkTurkishOrthography(
        JSON.parse(String(row.data)).word,
      ),
      originalSentence:
        sentence !== String(o.sentence) ? String(o.sentence) : null,
      originalSection:
        section !== String(o.surroundingText)
          ? String(o.surroundingText)
          : null,
      sectionNumber: Number(o.sectionNumber),
      source: String(o.title),
      demoBook: !!o.isDemo,
      sentenceTranslation: String(o.translation),
      contextExplanation: String(o.context),
      frequency: Number(
        one(
          "SELECT COUNT(*) AS n FROM WordOccurrence o JOIN TextSection s ON s.id=o.sectionId WHERE o.wordId=? AND s.bookId=?",
          Number(row.vocabularyId),
          active,
        ).n,
      ),
      status: String(row.status),
      firstSeen: row.firstSeen as string | null,
      lastReviewed: row.lastReviewed as string | null,
      nextReview: row.nextReview as string | null,
      reviewCount: Number(row.reviewCount),
      rating: row.difficultyRating as string | null,
    };
  });
}
export function state(): State {
  const config = settings(),
    today = dayKey(new Date(), config.timezone);
  let vocab = vocabulary();
  let daily = one("SELECT * FROM DailyWords WHERE date=?", today);
  if (!daily) {
    const level = config.level === "B1" ? 1 : config.level === "C1" ? 3 : 2;
    const candidates = vocab
      .filter((w) => !w.firstSeen && w.status === "new" && w.frequency > 0)
      .sort(
        (a, b) =>
          b.frequency * 2 -
            Math.abs(b.difficulty - level) * 3 -
            (a.frequency * 2 - Math.abs(a.difficulty - level) * 3) ||
          a.id - b.id,
      );
    if (candidates.length >= 2) {
      db().exec("BEGIN IMMEDIATE");
      try {
        db()
          .prepare("INSERT OR IGNORE INTO DailyWords VALUES (?,?,?)")
          .run(today, candidates[0].id, candidates[1].id);
        daily = one("SELECT * FROM DailyWords WHERE date=?", today);
        for (const id of [daily.word1, daily.word2])
          db()
            .prepare(
              "UPDATE LearningProgress SET firstSeen=COALESCE(firstSeen,?) WHERE wordId=? AND userId=1",
            )
            .run(today, Number(id));
        db().exec("COMMIT");
      } catch (e) {
        db().exec("ROLLBACK");
        throw e;
      }
      vocab = vocabulary();
    }
  }
  const days = all("SELECT DISTINCT day FROM Activity ORDER BY day DESC").map(
    (r) => String(r.day),
  );
  let streak = 0;
  let cursor = days.includes(today) ? today : addDays(today, -1);
  while (days.includes(cursor)) {
    streak++;
    cursor = addDays(cursor, -1);
  }
  const dow = (new Date(today + "T12:00:00Z").getUTCDay() + 6) % 7;
  const monday = addDays(today, -dow);
  const bookRow = one(
    "SELECT b.* FROM Book b JOIN AppMeta m ON m.value=CAST(b.id AS TEXT) WHERE m.key='activeBook'",
  );
  return {
    today,
    daily: daily
      ? [daily.word1, daily.word2]
          .map((id) => vocab.find((w) => w.id === id)!)
          .filter(Boolean)
      : [],
    vocabulary: vocab.filter((w) => !!w.firstSeen || w.status !== "new"),
    due: vocab.filter((w) => !!w.nextReview && w.nextReview <= today),
    book: bookRow
      ? {
          id: Number(bookRow.id),
          title: String(bookRow.title),
          importedAt: String(bookRow.importedAt),
          isDemo: Number(bookRow.isDemo),
          sectionCount: Number(
            one(
              "SELECT COUNT(*) AS n FROM TextSection WHERE bookId=?",
              Number(bookRow.id),
            ).n,
          ),
          matchedCount: vocab.filter((w) => w.frequency > 0).length,
        }
      : null,
    stats: {
      total: vocab.filter((w) => w.status === "learned").length,
      week: Number(
        one(
          "SELECT COUNT(DISTINCT wordId) AS n FROM Activity WHERE day>=? AND day<=?",
          monday,
          today,
        ).n,
      ),
      streak,
      studiedToday: Number(
        one("SELECT COUNT(*) AS n FROM Activity WHERE day=?", today).n,
      ),
    },
    settings: config,
    onboarded: !!bookRow,
    aiAvailable: !!process.env.OPENAI_API_KEY,
  };
}
export function rate(id: number, rating: string) {
  const row = one(
    "SELECT * FROM LearningProgress WHERE userId=1 AND wordId=?",
    id,
  );
  if (!row) throw new Error("Wort nicht gefunden.");
  const today = dayKey(new Date(), settings().timezone);
  if (!row.firstSeen && rating !== "known")
    throw new Error("Dieses Wort wurde noch nicht freigeschaltet.");
  const alreadyReviewed = row.lastReviewed === today;
  const next = schedule(
    rating,
    Math.max(0, Number(row.reviewCount) - (alreadyReviewed ? 1 : 0)),
    today,
  );
  db().exec("BEGIN IMMEDIATE");
  try {
    db()
      .prepare(
        "UPDATE LearningProgress SET status=?,firstSeen=COALESCE(firstSeen,?),lastReviewed=?,nextReview=?,reviewCount=reviewCount+?,difficultyRating=? WHERE userId=1 AND wordId=?",
      )
      .run(
        next.status,
        today,
        today,
        next.nextReview,
        alreadyReviewed ? 0 : 1,
        rating,
        id,
      );
    db().prepare("INSERT OR IGNORE INTO Activity VALUES (?,?)").run(today, id);
    db().exec("COMMIT");
  } catch (e) {
    db().exec("ROLLBACK");
    throw e;
  }
}
export function reset() {
  legacyBooks.clear();
  db().exec("BEGIN IMMEDIATE");
  try {
    db().exec(
      "DELETE FROM Activity; DELETE FROM DailyWords; DELETE FROM LearningProgress; DELETE FROM WordOccurrence; DELETE FROM VocabularyWord; DELETE FROM TextSection; DELETE FROM Book; DELETE FROM AppMeta;",
    );
    db().exec("COMMIT");
  } catch (e) {
    db().exec("ROLLBACK");
    throw e;
  }
}
export function exportData() {
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    settings: settings(),
    books: all("SELECT * FROM Book"),
    sections: all("SELECT * FROM TextSection"),
    words: all("SELECT * FROM VocabularyWord"),
    occurrences: all("SELECT * FROM WordOccurrence"),
    progress: all("SELECT * FROM LearningProgress"),
    daily: all("SELECT * FROM DailyWords"),
    activity: all("SELECT * FROM Activity"),
  };
}
