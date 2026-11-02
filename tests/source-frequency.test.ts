import { indexBookSource } from "../lib/book-source";
import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  db,
  loadDemo,
  state,
  importBook,
  rate,
  saveSettings,
  exportData,
} from "../lib/db";

test("35 book mentions stay 35 despite a sparse old sentence index; examples recover from raw source without demo substitution", () => {
  const dir = mkdtempSync(path.join(tmpdir(), "kelime-frequency-"));
  process.env.KELIME_DATA_DIR = dir;
  try {
    loadDemo();
    saveSettings({ dailyWordCount: 24 });
    const tefekkur = state().daily.find((word) => word.word === "tefekkür")!;
    rate(tefekkur.id, "hard");
    saveSettings({ dailyWordCount: 2 });
    state();
    const sentences = Array.from(
      { length: 32 },
      (_, index) =>
        `O, tefekkür ederken ${index + 1} ayrı konuyu dikkatle düşündü.`,
    );
    sentences[0] = sentences[0].replace("O, ", "O,  ");
    sentences[1] = sentences[1].replace("O, ", "O,\t");
    sentences[2] = sentences[2].replace("tefekkür", "tefek-\nkür");
    sentences[3] = sentences[3].replace("düşündü", "düﬂündü");
    const pages = [
      {
        pageNumber: 1,
        text: "I- TEFEKKÜR .\n\na) Tefekkür edenler.\n\nKonu\tYıl\nTefekkür\t622\n\nKomﬂularla konuştuktan sonra sessizce düşündü.\n\n",
      },
      ...sentences.map((text, index) => ({
        pageNumber: index + 2,
        text: text + "\n\n",
      })),
    ];
    const book = importBook(
      "Mein vollständiges Buch",
      pages.map((page) => page.text).join("\n"),
      false,
      [],
      pages,
    );
    // Reproduce an installation whose old index retained just one eligible quote.
    db()
      .prepare(
        `DELETE FROM WordOccurrence WHERE wordId=? AND sectionId IN
      (SELECT id FROM TextSection WHERE bookId=?) AND id NOT IN
      (SELECT MIN(id) FROM WordOccurrence WHERE wordId=? AND sectionId IN
      (SELECT id FROM TextSection WHERE bookId=?))`,
      )
      .run(tefekkur.id, book.bookId, tefekkur.id, book.bookId);
    const before = exportData();
    assert.equal(
      before.occurrences.filter(
        (occurrence) =>
          occurrence.wordId === tefekkur.id &&
          before.sections.some(
            (section) =>
              section.id === occurrence.sectionId &&
              section.bookId === book.bookId,
          ),
      ).length,
      1,
    );
    const progress = JSON.stringify(before.progress);

    const current = state();
    const word = current.vocabulary.find((word) => word.id === tefekkur.id)!;
    assert.equal(word.frequency, 35);
    assert.equal(word.examples.length, 30);
    assert.equal(word.demoBook, false);
    assert.equal(word.source, "Mein vollständiges Buch");
    assert.ok(
      word.examples.every(
        (example) => !example.demoBook && example.source === word.source,
      ),
    );
    assert.equal(word.examples[0].sentence, sentences[0]);
    assert.equal(word.examples[0].pageNumber, 2);
    assert.equal(word.examples[1].pageNumber, null); // Never guess missing old metadata.
    assert.ok(
      word.examples.some(
        (example) =>
          example.sentence.includes("3 ayrı konuyu") &&
          example.sentence.includes("tefekkür"),
      ),
    );
    assert.ok(
      word.examples.some(
        (example) =>
          example.sentence.includes("4 ayrı konuyu") &&
          example.sentence.endsWith("düşündü."),
      ),
    );
    assert.equal(
      new Set(word.examples.map((example) => example.sentence)).size,
      30,
    );
    assert.equal(word.rating, "hard");
    assert.equal(JSON.stringify(exportData().progress), progress);
    assert.ok(current.daily.every((word) => !word.demoBook));
    const daily = JSON.stringify(exportData().daily);
    assert.deepEqual(
      state().vocabulary.find((word) => word.id === tefekkur.id)!.examples,
      word.examples,
    );
    assert.equal(JSON.stringify(exportData().daily), daily);
    const emanet = current.vocabulary.find((word) => word.word === "emanet")!;
    assert.equal(emanet.frequency, 0);
    assert.deepEqual(emanet.examples, []);
    assert.equal(emanet.sentence, "");
    assert.equal(emanet.demoBook, false);
    assert.equal(emanet.source, word.source);
  } finally {
    db().close();
    rmSync(dir, { recursive: true, force: true });
  }
});

test("word frequency counts repeated mentions within a sentence separately from suitable examples", () => {
  const index = indexBookSource(
    [
      { id: 1, sectionNumber: 1, text: "EMANET" },
      {
        id: 2,
        sectionNumber: 2,
        text: "Emaneti korudu ve emaneti sahibine teslim etti.",
      },
      { id: 3, sectionNumber: 3, text: "Emanet\t622" },
    ],
    false,
  );
  assert.equal(index.forWord("emanet").frequency, 4);
  assert.equal(index.forWord("emanet").examples.length, 1);
});
