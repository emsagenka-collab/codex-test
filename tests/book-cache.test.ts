import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { db, importBook, state, rate, reset, saveSettings } from "../lib/db";

test("reused source analysis keeps progress live and refreshes after source, metadata and definition edits", () => {
  const dir = mkdtempSync(path.join(tmpdir(), "kelime-book-cache-"));
  process.env.KELIME_DATA_DIR = dir;
  let editor: DatabaseSync | undefined;
  try {
    saveSettings({ dailyWordCount: 2, level: "B2" });
    const text = "Emaneti iyi korudu. Metanet ile bekledi.";
    const book = importBook(
      "Gespeichertes Buch",
      text,
      false,
      [],
      [{ pageNumber: 1, text }],
    );
    const initial = state();
    assert.deepEqual(state(), initial);
    const word = initial.daily.find((word) => word.word === "emanet")!;
    rate(word.id, "hard");
    const rated = state().daily.find((w) => w.id === word.id)!;
    assert.equal(rated.rating, "hard");
    assert.equal(rated.reviewCount, 1);
    assert.deepEqual(rated.examples, word.examples);

    // Cache invalidation also covers changes made by another DB connection.
    editor = new DatabaseSync(path.join(dir, "kelime.sqlite"));
    editor
      .prepare(
        "UPDATE WordOccurrence SET pageNumber=9,pageEnd=9,translation='Geprüfte Übersetzung' WHERE wordId=?",
      )
      .run(word.id);
    const located = state().daily.find((w) => w.id === word.id)!;
    assert.equal(located.pageNumber, 9);
    assert.equal(
      located.examples[0].sentenceTranslation,
      "Geprüfte Übersetzung",
    );
    assert.equal(located.rating, "hard");

    const definition = JSON.parse(
      String(
        editor
          .prepare("SELECT data FROM VocabularyWord WHERE id=?")
          .get(word.id)!.data,
      ),
    );
    definition.meaning = "Anvertrautes Gut (bearbeitet)";
    editor
      .prepare("UPDATE VocabularyWord SET data=? WHERE id=?")
      .run(JSON.stringify(definition), word.id);
    assert.equal(
      state().daily.find((w) => w.id === word.id)!.meaning,
      definition.meaning,
    );

    editor
      .prepare("UPDATE TextSection SET originalText=? WHERE bookId=?")
      .run(
        "Emaneti iyi korudu. Sonra emaneti geri verdi. Metanet ile bekledi.",
        book.bookId,
      );
    const expanded = state().daily.find((w) => w.id === word.id)!;
    assert.equal(expanded.frequency, 2);
    assert.equal(expanded.examples.length, 2);
    assert.equal(expanded.examples[1].pageNumber, null);
    assert.equal(expanded.rating, "hard");

    const metanet = state().daily.find((w) => w.word === "metanet")!;
    editor
      .prepare("DELETE FROM LearningProgress WHERE wordId=?")
      .run(metanet.id);
    assert.equal(state().daily.find((w) => w.id === metanet.id)!.status, "new");
    assert.equal(state().daily.find((w) => w.id === word.id)!.rating, "hard");

    reset();
    assert.equal(state().book, null);
    importBook("Neues Buch", "Emaneti geri verdi.");
    const fresh = state().daily[0];
    assert.equal(fresh.source, "Neues Buch");
    assert.equal(fresh.sentence, "Emaneti geri verdi.");
    assert.equal(fresh.frequency, 1);
    assert.equal(fresh.pageNumber, null);
    assert.equal(fresh.rating, null);
    assert.deepEqual(state().daily, [fresh]);
  } finally {
    editor?.close();
    db().close();
    rmSync(dir, { recursive: true, force: true });
  }
});
