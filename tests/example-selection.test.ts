import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  db,
  importBook,
  state,
  exportData,
  rate,
  saveSettings,
} from "../lib/db";
import { lexicon } from "../lib/lexicon";

test("new and existing imports prefer verbatim prose with correct pages and preserve ratings", () => {
  const dir = mkdtempSync(path.join(tmpdir(), "kelime-examples-"));
  process.env.KELIME_DATA_DIR = dir;
  const heading = "49 VII- HABEŞİSTAN’A HİCRET .";
  const sentence = "Daha sonra Habeşistan’a hicret etti.";
  const pages = [
    { pageNumber: 1, text: heading },
    { pageNumber: 2, text: sentence + " Metanet ile bekledi." },
  ];
  try {
    const imported = importBook(
      "Buch mit Inhaltsverzeichnis",
      pages.map((page) => page.text).join("\n"),
      false,
      [],
      pages,
    );
    const first = state();
    const hicret = first.daily.find((w) => w.word === "hicret")!;
    assert.equal(hicret.sentence, sentence);
    assert.equal(hicret.pageNumber, 2);
    assert.ok(
      exportData().sections.some((section) =>
        String(section.originalText).includes(heading),
      ),
    );
    assert.ok(
      exportData().occurrences.every(
        (occurrence) => occurrence.sentence !== heading,
      ),
    );
    rate(hicret.id, "hard");

    // An older importer saved the heading first, before the real sentence.
    const section = exportData().sections.find(
      (section) => section.bookId === imported.bookId,
    )!;
    db()
      .prepare(
        "INSERT INTO WordOccurrence(id,wordId,sectionId,sentence,surroundingText,pageNumber,pageEnd) VALUES (0,?,?,?,?,1,1)",
      )
      .run(hicret.id, Number(section.id), heading, heading);
    const progressBefore = JSON.stringify(exportData().progress);
    const dailyBefore = JSON.stringify(exportData().daily);
    const corrected = state().daily.find((w) => w.word === "hicret")!;
    assert.equal(corrected.sentence, sentence);
    assert.equal(corrected.pageNumber, 2);
    assert.equal(corrected.rating, "hard");
    assert.equal(JSON.stringify(exportData().progress), progressBefore);
    assert.equal(JSON.stringify(exportData().daily), dailyBefore);

    // A word found only in a heading is not offered as a new daily word.
    const entry = lexicon.find((entry) => entry.word === "müjde")!;
    const wordId = Number(
      db()
        .prepare(
          "INSERT INTO VocabularyWord(word,normalizedWord,data) VALUES (?,?,?)",
        )
        .run(entry.word, entry.word, JSON.stringify(entry)).lastInsertRowid,
    );
    db()
      .prepare("INSERT INTO LearningProgress(userId,wordId) VALUES (1,?)")
      .run(wordId);
    db()
      .prepare(
        "INSERT INTO WordOccurrence(wordId,sectionId,sentence,surroundingText) VALUES (?,?,?,?)",
      )
      .run(wordId, Number(section.id), "VIII- MÜJDE.", "VIII- MÜJDE.");
    saveSettings({ dailyWordCount: 5 });
    assert.equal(state().daily.length, 2);
    assert.ok(!state().daily.some((word) => word.word === "müjde"));

    // Keep reviewed words without displaying a heading if the old book has no prose match.
    const rated = state().daily.find((word) => word.word === "metanet")!;
    rate(rated.id, "understood");
    db()
      .prepare(
        "UPDATE WordOccurrence SET sentence='METANET VE SABIR.',translation='old heading translation' WHERE wordId=?",
      )
      .run(rated.id);
    const beforeMissing = JSON.stringify(exportData().progress);
    const missing = state().vocabulary.find((word) => word.id === rated.id)!;
    assert.equal(missing.sentence, "");
    assert.equal(missing.sentenceTranslation, "");
    assert.equal(missing.frequency, 0);
    assert.equal(missing.status, "learned");
    assert.equal(missing.pageNumber, null);
    assert.equal(JSON.stringify(exportData().progress), beforeMissing);
  } finally {
    db().close();
    rmSync(dir, { recursive: true, force: true });
  }
});
