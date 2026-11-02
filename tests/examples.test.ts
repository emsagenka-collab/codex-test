import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  db,
  importBook,
  state,
  rate,
  saveSettings,
  exportData,
} from "../lib/db";

test("word examples are distinct valid source sentences with matching locations and no hidden page exclusions", () => {
  const dir = mkdtempSync(path.join(tmpdir(), "kelime-carousel-"));
  process.env.KELIME_DATA_DIR = dir;
  const first = "Emaneti iyi korudu.";
  const second =
    "Emaneti sahibine teslim etmeden evvel bir kez daha kontrol etti.";
  const third = "Emaneti korudu ve sahibine teslim etti.";
  const pages = [
    { pageNumber: 1, text: first + "\n\n" },
    { pageNumber: 2, text: second + "\n\n" },
    { pageNumber: 3, text: third + "\n\n" },
    { pageNumber: 4, text: first + "\n\n" },
    { pageNumber: 5, text: "a) Emaneti iyi korudu.\nEmanet\t622\tMedine\n\n" },
  ];
  try {
    saveSettings({ dailyWordCount: 1 });
    importBook(
      "Mehrere Sätze",
      pages.map((page) => page.text).join("\n"),
      false,
      [],
      pages,
    );
    let word = state().daily[0];
    assert.equal(word.word, "emanet");
    assert.deepEqual(
      word.examples.map((example) => example.sentence),
      [first, second, third],
    );
    assert.deepEqual(
      word.examples.map((example) => example.pageNumber),
      [1, 2, 3],
    );
    assert.deepEqual(
      word.examples.map((example) => example.sectionNumber),
      [1, 2, 3],
    );
    assert.ok(
      word.examples.every(
        (example) => example.source === "Mehrere Sätze" && !example.demoBook,
      ),
    );
    assert.equal(new Set(word.examples.map((example) => example.id)).size, 3);
    assert.equal(word.sentence, word.examples[0].sentence);
    const examplesBefore = JSON.stringify(word.examples);
    rate(word.id, "hard");
    const progress = JSON.stringify(exportData().progress);
    assert.equal(JSON.stringify(state().daily[0].examples), examplesBefore);
    // Older databases can keep the retired column, but its values must have no effect.
    db().exec(
      "ALTER TABLE Book ADD COLUMN excludedPages TEXT NOT NULL DEFAULT ''",
    );
    db().prepare("UPDATE Book SET excludedPages='1-1000'").run();
    assert.equal(JSON.stringify(state().daily[0].examples), examplesBefore);
    assert.equal(JSON.stringify(exportData().progress), progress);
    assert.equal("excludedPages" in state().book!, false);

    importBook("Anderes Buch", "Emaneti korumak için metanet gösterdi.");
    word = state().vocabulary.find((current) => current.id === word.id)!;
    assert.equal(word.examples.length, 1);
    assert.ok(
      word.examples.every((example) => example.source === "Anderes Buch"),
    );
    assert.equal(word.examples[0].pageNumber, null);
    assert.equal(word.rating, "hard");
  } finally {
    db().close();
    rmSync(dir, { recursive: true, force: true });
  }
});
