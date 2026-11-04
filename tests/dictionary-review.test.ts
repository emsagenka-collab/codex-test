import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { learningLexicon } from "../lib/lexicon";
import { dictionaryReview } from "../lib/vocabulary/review-data";
import {
  reviewStoredDefinition,
  dictionaryReviewVersion,
} from "../lib/dictionary-review";
import { matches, normalize } from "../lib/learning";
import { indexBookSource } from "../lib/book-source";
import {
  db,
  importBook,
  state,
  rate,
  saveSettings,
  exportData,
} from "../lib/db";
import type { Entry } from "../lib/types";

const before = JSON.parse(
  readFileSync(
    new URL("./fixtures/dictionary-before-review.json", import.meta.url),
    "utf8",
  ),
) as Entry[];

test("review corrects documented meanings and levels without inventing source sentences or changing custom definitions", () => {
  assert.equal(learningLexicon.length, 6024);
  const find = (word: string) =>
    learningLexicon.find((e) => normalize(e.word) === normalize(word))!;
  assert.match(find("ben").meaning, /ich/);
  assert.match(find("baldız").meaning, /Schwester der Ehefrau/);
  assert.equal(find("ehliyet").difficulty, 1);
  assert.equal(find("varis").word, "vâris");
  assert.equal(find("deneycilik").meaning, "Empirismus");
  assert.doesNotMatch(find("sünnet").modern, /dinî kesim/);
  for (const original of before) {
    const revised = reviewStoredDefinition(original);
    assert.notEqual(revised, original, original.word);
    assert.equal(normalize(revised.word), normalize(original.word));
    for (const key of ["demo", "translation", "context"] as const)
      assert.equal(revised[key], original[key]);
    assert.equal(reviewStoredDefinition(revised), revised);
    const custom = {
      ...original,
      meaning: "Eigene Kontextbedeutung",
      translation: "Eigene Satzübersetzung",
    };
    assert.equal(reviewStoredDefinition(custom), custom);
  }
  assert.ok(dictionaryReview.length > 0);
  assert.ok(
    dictionaryReview.every(
      (r) =>
        r.reason &&
        !("demo" in r.changes) &&
        !("translation" in r.changes) &&
        !("context" in r.changes),
    ),
  );
});

test("contrastive circumflexes keep unrelated meanings and book examples separate", () => {
  for (const [token, word] of [
    ["Hâlâ", "hala"],
    ["âdetleri", "adet"],
    ["kar", "kâr"],
    ["varis", "vâris"],
    ["karlı", "kârlı"],
  ])
    assert.equal(matches(token, word), false, `${token}/${word}`);
  for (const [token, word] of [
    ["halası", "hala"],
    ["adetleri", "adet"],
    ["kârı", "kâr"],
    ["vârisleri", "vâris"],
    ["kârlı", "kârlı"],
    ["sükunetini", "sükûnet"],
  ])
    assert.equal(matches(token, word), true, `${token}/${word}`);
  const text =
    "Hala dün eve geldi. Hâlâ onu bekliyordu. Kâr elde etmek istiyordu. Kar bütün yolları kapladı. Vâris mirası kabul etti. Varis için doktora gitti.";
  const source = indexBookSource([{ id: 1, sectionNumber: 1, text }], false);
  for (const [word, sentence] of [
    ["hala", "Hala dün eve geldi."],
    ["kâr", "Kâr elde etmek istiyordu."],
    ["vâris", "Vâris mirası kabul etti."],
  ]) {
    const result = source.forWord(word);
    assert.equal(result.frequency, 1, word);
    assert.equal(result.examples.length, 1, word);
    assert.equal(result.examples[0].sentence, sentence);
    assert.ok(text.includes(result.examples[0].raw));
  }
});

test("an installed dictionary is updated in place, including inactive books, while ratings, source and custom entries survive", () => {
  const dir = mkdtempSync(path.join(tmpdir(), "kelime-review-"));
  process.env.KELIME_DATA_DIR = dir;
  try {
    saveSettings({ level: "B1", dailyWordCount: 2 });
    const text =
      "Ben bugün eve erken döndüm. Baldızı onu evde bekliyordu. Ehliyetini güvenle sakladı. Vâris mirası kabul etti. Deneycilik üzerine uzun süre düşündü. Sünnet kelimesi üzerine konuştu. Bu tahvil ona güven verdi.";
    const first = importBook(
      "Altes Buch",
      text,
      false,
      [],
      [{ pageNumber: 7, text }],
    );
    state();
    const ben = db()
      .prepare("SELECT id FROM VocabularyWord WHERE normalizedWord='ben'")
      .get()!;
    db()
      .prepare("UPDATE LearningProgress SET firstSeen=? WHERE wordId=?")
      .run(state().today, ben.id);
    rate(Number(ben.id), "hard");
    const snapshot = exportData();
    importBook("Anderes Buch", "Emaneti iyi korudu. Metanet ile bekledi.");
    state();
    // Restore real old dictionary records into an otherwise current installation.
    const ids = new Map<string, number>();
    for (const original of before) {
      const row = db()
        .prepare("SELECT id FROM VocabularyWord WHERE normalizedWord=?")
        .get(normalize(original.word));
      if (!row) continue;
      ids.set(original.word, Number(row.id));
      const saved =
        original.word === "tahvil"
          ? { ...original, meaning: "Eigene Buchbedeutung" }
          : original;
      db()
        .prepare("UPDATE VocabularyWord SET word=?,data=? WHERE id=?")
        .run(saved.word, JSON.stringify(saved), row.id);
    }
    assert.ok(
      ids.has("ben") &&
        ids.has("varis") &&
        ids.has("ehliyet") &&
        ids.has("tahvil"),
    );
    const customBefore = String(
      db()
        .prepare("SELECT data FROM VocabularyWord WHERE id=?")
        .get(ids.get("tahvil")!)!.data,
    );
    db()
      .prepare(
        "INSERT OR REPLACE INTO AppMeta VALUES ('dictionaryReview','previous')",
      )
      .run();
    const progress = exportData().progress;
    const active = state();
    assert.notEqual(active.book?.id, first.bookId);
    assert.equal(
      db()
        .prepare("SELECT value FROM AppMeta WHERE key='dictionaryReview'")
        .get()!.value,
      dictionaryReviewVersion,
    );
    assert.match(
      JSON.parse(
        String(
          db()
            .prepare("SELECT data FROM VocabularyWord WHERE id=?")
            .get(ids.get("ben")!)!.data,
        ),
      ).meaning,
      /ich/,
    );
    assert.equal(
      db()
        .prepare("SELECT word FROM VocabularyWord WHERE id=?")
        .get(ids.get("varis")!)!.word,
      "vâris",
    );
    assert.equal(
      JSON.parse(
        String(
          db()
            .prepare("SELECT data FROM VocabularyWord WHERE id=?")
            .get(ids.get("ehliyet")!)!.data,
        ),
      ).difficulty,
      1,
    );
    assert.equal(
      String(
        db()
          .prepare("SELECT data FROM VocabularyWord WHERE id=?")
          .get(ids.get("tahvil")!)!.data,
      ),
      customBefore,
    );
    assert.deepEqual(exportData().progress, progress);
    assert.deepEqual(
      exportData().sections.filter((s) => s.bookId === first.bookId),
      snapshot.sections,
    );
    assert.deepEqual(
      exportData().occurrences.filter((o) =>
        snapshot.sections.some((s) => s.id === o.sectionId),
      ),
      snapshot.occurrences,
    );
    assert.deepEqual(exportData().activity, snapshot.activity);
    const stable = exportData();
    state();
    assert.deepEqual(exportData().words, stable.words);
    assert.deepEqual(exportData().progress, stable.progress);
    assert.equal(
      db()
        .prepare("SELECT difficultyRating FROM LearningProgress WHERE wordId=?")
        .get(ben.id)!.difficultyRating,
      "hard",
    );
    assert.deepEqual(db().prepare("PRAGMA foreign_key_check").all(), []);
  } finally {
    db().close();
    rmSync(dir, { recursive: true, force: true });
  }
});
