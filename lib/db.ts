import { detectRunningHeaders } from "./running-headers";
import { indexBookSource, type SourceExample } from "./book-source";
import { exampleSentences } from "./example-sentences";
import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { learningLexicon, lexicon, demoText } from "./lexicon";
import {
  addDays,
  dayKey,
  normalize,
  schedule,
  splitSections,
  tokens,
  wordMatcher,
} from "./learning";
import { checkTurkishOrthography } from "./orthography";
import {
  bookWordForms,
  hasLegacyTurkishGlyphs,
  repairTurkishText,
} from "./text-repair";
import type {
  Entry,
  Settings,
  SourcePage,
  State,
  Word,
  WordExample,
} from "./types";
let connection: DatabaseSync;
const legacyBooks = new Map<number, boolean>();
const sourceBooks = new Map<number, ReturnType<typeof indexBookSource>>();
function sourceBook(bookId: number) {
  if (!sourceBooks.has(bookId)) {
    const sections = all(
      "SELECT id,sectionNumber,originalText FROM TextSection WHERE bookId=? ORDER BY sectionNumber,id",
      bookId,
    ).map((row) => ({
      id: Number(row.id),
      sectionNumber: Number(row.sectionNumber),
      text: String(row.originalText),
    }));
    if (sourceBooks.size >= 3)
      sourceBooks.delete(sourceBooks.keys().next().value!);
    sourceBooks.set(bookId, indexBookSource(sections, legacyBook(bookId)));
  }
  return sourceBooks.get(bookId)!;
}
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
 CREATE TABLE IF NOT EXISTS WordOccurrence (id INTEGER PRIMARY KEY, wordId INTEGER REFERENCES VocabularyWord(id), sectionId INTEGER REFERENCES TextSection(id), sentence TEXT NOT NULL, surroundingText TEXT NOT NULL, translation TEXT NOT NULL DEFAULT '', context TEXT NOT NULL DEFAULT '', pageNumber INTEGER, pageEnd INTEGER);
 CREATE TABLE IF NOT EXISTS LearningProgress (id INTEGER PRIMARY KEY, userId INTEGER REFERENCES User(id), wordId INTEGER REFERENCES VocabularyWord(id), status TEXT NOT NULL DEFAULT 'new', firstSeen TEXT, lastReviewed TEXT, nextReview TEXT, reviewCount INTEGER NOT NULL DEFAULT 0, difficultyRating TEXT, UNIQUE(userId,wordId));
 CREATE TABLE IF NOT EXISTS DailyWords (date TEXT PRIMARY KEY, word1 INTEGER REFERENCES VocabularyWord(id), word2 INTEGER REFERENCES VocabularyWord(id), wordIds TEXT NOT NULL DEFAULT '[]', scope TEXT NOT NULL DEFAULT '');
 CREATE TABLE IF NOT EXISTS Activity (day TEXT NOT NULL, wordId INTEGER REFERENCES VocabularyWord(id), UNIQUE(day,wordId));
 CREATE TABLE IF NOT EXISTS AppMeta (key TEXT PRIMARY KEY, value TEXT NOT NULL);`);
  const occurrenceColumns = connection
    .prepare("PRAGMA table_info(WordOccurrence)")
    .all();
  for (const column of ["pageNumber", "pageEnd"])
    if (!occurrenceColumns.some((item) => item.name === column))
      connection.exec(
        `ALTER TABLE WordOccurrence ADD COLUMN ${column} INTEGER`,
      );
  // Upgrade existing two-word lessons without changing their words or progress.
  if (
    !connection
      .prepare("PRAGMA table_info(DailyWords)")
      .all()
      .some((column) => column.name === "wordIds")
  ) {
    connection.exec("BEGIN IMMEDIATE");
    try {
      connection.exec(
        "ALTER TABLE DailyWords ADD COLUMN wordIds TEXT NOT NULL DEFAULT '[]'",
      );
      const update = connection.prepare(
        "UPDATE DailyWords SET wordIds=? WHERE date=?",
      );
      for (const row of connection.prepare("SELECT * FROM DailyWords").all())
        update.run(
          JSON.stringify([row.word1, row.word2].filter((id) => id != null)),
          row.date,
        );
      connection.exec("COMMIT");
    } catch (e) {
      connection.exec("ROLLBACK");
      throw e;
    }
  }
  if (
    !connection
      .prepare("PRAGMA table_info(DailyWords)")
      .all()
      .some((column) => column.name === "scope")
  )
    connection.exec(
      "ALTER TABLE DailyWords ADD COLUMN scope TEXT NOT NULL DEFAULT ''",
    );
  connection.prepare("INSERT OR IGNORE INTO User VALUES (1,?)").run(
    JSON.stringify({
      dailyWordCount: 2,
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
  return {
    dailyWordCount: 2,
    ...JSON.parse(String(one("SELECT settings FROM User WHERE id=1").settings)),
  };
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
  if (
    !Number.isInteger(merged.dailyWordCount) ||
    merged.dailyWordCount < 1 ||
    merged.dailyWordCount > 100
  )
    throw new Error(
      "Bitte eine ganze Zahl zwischen 1 und 100 für die täglichen Wörter eingeben.",
    );
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
  pages: SourcePage[] = [],
) {
  const legacy = !isDemo && hasLegacyTurkishGlyphs(text);
  const documentForms = bookWordForms(text, legacy);
  const headers = detectRunningHeaders(text, legacy);
  const sections = splitSections(text);
  if (!sections.length)
    throw new Error(
      "Kein lesbarer Text gefunden. Bei gescannten PDFs bitte zuerst OCR verwenden.",
    );
  if (pages.length && pages.map((page) => page.text).join("\n") !== text)
    throw new Error(
      "Die PDF-Seitenzuordnung stimmt nicht mit dem Quelltext überein.",
    );
  const positionText = text.replace(/\r\n/g, "\n");
  let pageOffset = 0;
  const pageRanges = pages.map((page) => {
    const start = pageOffset;
    const length = page.text.replace(/\r\n/g, "\n").length;
    pageOffset += length + 1;
    return { ...page, start, end: start + length };
  });
  let sectionOffset = 0;
  const locatedSentences = sections.flatMap((section, i) => {
    const start = positionText.indexOf(section, sectionOffset);
    if (start < 0) throw new Error("Quellenprüfung fehlgeschlagen.");
    sectionOffset = start + section.length;
    let sentenceOffset = 0;
    return exampleSentences(section, legacy, headers, documentForms).map(
      (sentence) => {
        const sentenceStart = section.indexOf(sentence, sentenceOffset);
        sentenceOffset = sentenceStart + sentence.length;
        const startOffset = start + sentenceStart;
        const endOffset = startOffset + sentence.length - 1;
        const repairedSentence = repairTurkishText(
          sentence,
          legacy,
          documentForms,
        );
        return {
          section,
          i,
          sentence,
          repairedSentence,
          words: [...new Set(tokens(repairedSentence))],
          pageNumber:
            pageRanges.find(
              (page) => page.start <= startOffset && startOffset < page.end,
            )?.pageNumber ?? null,
          pageEnd:
            pageRanges.find(
              (page) => page.start <= endOffset && endOffset < page.end,
            )?.pageNumber ?? null,
        };
      },
    );
  });
  const dictionary = [
    ...extra,
    ...(isDemo ? lexicon : learningLexicon).filter(
      (e) => !extra.some((x) => normalize(x.word) === normalize(e.word)),
    ),
  ];
  const found = dictionary
    .map((entry) => {
      const matches = wordMatcher(entry.word);
      return {
        entry,
        occurrences: locatedSentences.filter((occ) => occ.words.some(matches)),
      };
    })
    .filter((x) => x.occurrences.length);
  if (!found.length)
    throw new Error(
      `Nur ${found.length} passende Wörter in vollständigen Beispielsätzen erkannt. Für eine Tageslektion wird mindestens eines benötigt. Nutze einen längeren Text oder die optionale KI-Anbindung (siehe README).`,
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
            "INSERT INTO WordOccurrence(wordId,sectionId,sentence,surroundingText,translation,context,pageNumber,pageEnd) VALUES (?,?,?,?,?,?,?,?)",
          )
          .run(
            wordId,
            sectionIds[occ.i],
            occ.sentence,
            occ.section,
            isDemo
              ? lexicon.find((e) => e.demo === occ.sentence)?.translation || ""
              : extra.includes(entry) && entry.demo === occ.repairedSentence
                ? entry.translation
                : "",
            isDemo
              ? lexicon.find((e) => e.demo === occ.sentence)?.context || ""
              : extra.includes(entry) && entry.demo === occ.repairedSentence
                ? entry.context
                : "",
            occ.pageNumber,
            occ.pageEnd,
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
  const book = one(
    "SELECT b.* FROM Book b JOIN AppMeta m ON m.value=CAST(b.id AS TEXT) WHERE m.key='activeBook'",
  );
  if (!book) return [];
  const active = Number(book.id);
  const source = sourceBook(active);
  const legacy = !book.isDemo && legacyBook(active);
  // Repair sparse older imports from the raw source and the bundled dictionary.
  // This creates only attested words with suitable examples, never guessed entries.
  for (const entry of book.isDemo ? lexicon : learningLexicon) {
    const found = source.forWord(entry.word);
    if (!found.frequency || !found.examples.length) continue;
    db()
      .prepare(
        "INSERT OR IGNORE INTO VocabularyWord(word,normalizedWord,data) VALUES (?,?,?)",
      )
      .run(entry.word, normalize(entry.word), JSON.stringify(entry));
    const row = one(
      "SELECT id FROM VocabularyWord WHERE normalizedWord=?",
      normalize(entry.word),
    );
    db()
      .prepare(
        "INSERT OR IGNORE INTO LearningProgress(userId,wordId) VALUES (1,?)",
      )
      .run(Number(row.id));
  }
  return all(
    `SELECT v.id,v.data,p.*,v.id AS vocabularyId FROM VocabularyWord v JOIN LearningProgress p ON p.wordId=v.id`,
  ).map((row) => {
    const entry = JSON.parse(String(row.data)) as Entry;
    const found = source.forWord(entry.word);
    const occurrences = all(
      "SELECT o.* FROM WordOccurrence o JOIN TextSection s ON s.id=o.sectionId WHERE o.wordId=? AND s.bookId=? ORDER BY o.id",
      Number(row.vocabularyId),
      active,
    );
    function metadata(candidate: SourceExample | undefined) {
      if (!candidate) return undefined;
      // Old indices can be incomplete. Never invent a page for a recovered quote.
      const exact = occurrences.filter(
        (o) =>
          o.sectionId === candidate.section.id && o.sentence === candidate.raw,
      );
      const duplicates = candidate.section.text.split(candidate.raw).length - 1;
      if (exact.length && (duplicates === 1 || exact.length === duplicates))
        return exact[0];
      const covering = occurrences.filter((o) => {
        if (o.sectionId !== candidate.section.id) return false;
        const stored = String(o.sentence);
        const start = candidate.section.text.indexOf(stored);
        return (
          start >= 0 &&
          start === candidate.section.text.lastIndexOf(stored) &&
          start <= candidate.start &&
          candidate.start + candidate.raw.length <= start + stored.length
        );
      });
      return covering.length === 1 ? covering[0] : undefined;
    }
    function pages(candidate: SourceExample | undefined) {
      const occurrence = metadata(candidate);
      const exactPages =
        candidate &&
        occurrence &&
        (occurrence.sentence === candidate.raw ||
          occurrence.pageNumber === occurrence.pageEnd);
      return {
        pageNumber:
          !exactPages || occurrence.pageNumber == null
            ? null
            : Number(occurrence.pageNumber),
        pageEnd:
          !exactPages || occurrence.pageEnd == null
            ? null
            : Number(occurrence.pageEnd),
      };
    }
    const seen = new Set<string>();
    const examples: WordExample[] = [];
    for (const candidate of found.examples) {
      const normalized = candidate.sentence
        .normalize("NFC")
        .replace(/\s+/gu, " ")
        .trim();
      if (seen.has(normalized)) continue;
      seen.add(normalized);
      const occurrence = metadata(candidate);
      examples.push({
        id: candidate.id,
        sentence: candidate.sentence,
        sectionNumber: candidate.section.sectionNumber,
        ...pages(candidate),
        source: String(book.title),
        demoBook: !!book.isDemo,
        sentenceTranslation:
          occurrence?.sentence === candidate.raw
            ? String(occurrence.translation)
            : "",
      });
    }
    const selected = found.examples[0];
    const occurrence = metadata(selected);
    const sentence = selected?.sentence || "";
    const section = selected
      ? repairTurkishText(selected.section.text, legacy)
      : "";
    return {
      ...entry,
      id: Number(row.vocabularyId),
      examples,
      sentence,
      section,
      orthography: checkTurkishOrthography(sentence),
      wordOrthography: checkTurkishOrthography(entry.word),
      originalSentence:
        selected && sentence !== selected.raw ? selected.raw : null,
      originalSection:
        selected && section !== selected.section.text
          ? selected.section.text
          : null,
      sectionNumber: selected?.section.sectionNumber || 0,
      ...pages(selected),
      source: String(book.title),
      demoBook: !!book.isDemo,
      sentenceTranslation: examples[0]?.sentenceTranslation || "",
      contextExplanation:
        selected && occurrence?.sentence === selected.raw
          ? String(occurrence.context)
          : "",
      // Every word occurrence in the active source counts, even in excluded layouts.
      frequency: found.frequency,
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
  let vocab: Word[];
  let dailyIds: number[];
  db().exec("BEGIN IMMEDIATE");
  try {
    vocab = vocabulary();
    const level = config.level === "B1" ? 1 : config.level === "C1" ? 3 : 2;
    const activeBook = Number(
      one("SELECT value FROM AppMeta WHERE key='activeBook'")?.value || 0,
    );
    const scope = `${activeBook}:${config.level}`;
    const daily = one("SELECT * FROM DailyWords WHERE date=?", today);
    const sameScope = !daily?.scope || daily.scope === scope;
    const previousIds: number[] =
      daily && sameScope ? JSON.parse(String(daily.wordIds)) : [];
    const previousWords = previousIds
      .map((id) => vocab.find((w) => w.id === id))
      .filter(
        (w): w is Word =>
          !!w &&
          w.difficulty === level &&
          w.frequency > 0 &&
          w.examples.length > 0,
      );
    // A smaller goal never removes a word already rated today.
    const reviewed = previousWords.filter((w) => w.lastReviewed === today);
    let remaining = Math.max(0, config.dailyWordCount - reviewed.length);
    const selected = previousWords.filter(
      (w) => w.lastReviewed === today || remaining-- > 0,
    );
    const candidates = vocab
      .filter(
        (w) =>
          // firstSeen means shown/allocated, not learned. Never strand unrated
          // words just because an earlier daily selection already exposed them.
          w.reviewCount === 0 &&
          !w.lastReviewed &&
          w.status === "new" &&
          w.difficulty === level &&
          w.frequency > 0 &&
          w.examples.length > 0 &&
          !previousIds.includes(w.id),
      )
      .sort(
        (a, b) =>
          b.frequency * 2 -
            Math.abs(b.difficulty - level) * 3 -
            (a.frequency * 2 - Math.abs(a.difficulty - level) * 3) ||
          a.id - b.id,
      );
    dailyIds = [
      ...selected.map((w) => w.id),
      ...candidates
        .slice(0, Math.max(0, config.dailyWordCount - selected.length))
        .map((w) => w.id),
    ];
    if (
      JSON.stringify(dailyIds) !== JSON.stringify(previousIds) ||
      daily?.scope !== scope
    ) {
      db()
        .prepare(
          "INSERT INTO DailyWords(date,word1,word2,wordIds,scope) VALUES (?,?,?,?,?) ON CONFLICT(date) DO UPDATE SET word1=excluded.word1,word2=excluded.word2,wordIds=excluded.wordIds,scope=excluded.scope",
        )
        .run(
          today,
          dailyIds[0] ?? null,
          dailyIds[1] ?? null,
          JSON.stringify(dailyIds),
          scope,
        );
      // Unrated words removed from today's lesson remain available on future days.
      for (const id of previousIds.filter((id) => !dailyIds.includes(id)))
        db()
          .prepare(
            "UPDATE LearningProgress SET firstSeen=NULL WHERE userId=1 AND wordId=? AND firstSeen=? AND status='new' AND reviewCount=0 AND lastReviewed IS NULL",
          )
          .run(id, today);
      for (const id of dailyIds)
        db()
          .prepare(
            "UPDATE LearningProgress SET firstSeen=COALESCE(firstSeen,?) WHERE wordId=? AND userId=1",
          )
          .run(today, id);
      vocab = vocabulary();
    }
    db().exec("COMMIT");
  } catch (e) {
    db().exec("ROLLBACK");
    throw e;
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
  const targetDifficulty =
    config.level === "B1" ? 1 : config.level === "C1" ? 3 : 2;
  const levelWords = vocab.filter(
    (word) =>
      word.difficulty === targetDifficulty &&
      word.frequency > 0 &&
      word.examples.length > 0,
  );
  const levelCounts = { B1: 0, B2: 0, C1: 0 };
  for (const word of vocab) {
    if (!word.frequency || !word.examples.length) continue;
    const level =
      word.difficulty === 1 ? "B1" : word.difficulty === 2 ? "B2" : "C1";
    levelCounts[level]++;
  }
  const remaining = levelWords.filter(
    (word) =>
      word.status === "new" && word.reviewCount === 0 && !word.lastReviewed,
  ).length;
  return {
    today,
    levelCounts,
    levelProgress: {
      level: config.level,
      total: levelWords.length,
      remaining,
      processed: levelWords.length - remaining,
      completed: levelWords.length > 0 && remaining === 0,
      nextLevel:
        config.level === "B1" ? "B2" : config.level === "B2" ? "C1" : null,
    },
    daily: dailyIds
      .map((id) => vocab.find((w) => w.id === id)!)
      .filter(Boolean),
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
  sourceBooks.clear();
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
