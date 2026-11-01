import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import {
  excludedPageNumbers,
  overlapsExcludedPages,
} from "../lib/excluded-pages";
import {
  db,
  importBook,
  state,
  saveSettings,
  rate,
  exportData,
} from "../lib/db";

test("excluded PDF pages accept bounded ranges and cover every overlap", () => {
  const pages = excludedPageNumbers("1-3, 7; 9–10");
  assert.deepEqual([...pages], [1, 2, 3, 7, 9, 10]);
  assert.equal(overlapsExcludedPages(pages, 4, 6), false);
  assert.equal(overlapsExcludedPages(pages, 6, 8), true);
  assert.equal(overlapsExcludedPages(pages, null, null), true);
  assert.equal(overlapsExcludedPages(new Set(), null, null), false);
  for (const value of [
    null,
    2,
    "0",
    "-1",
    "3-1",
    "1001",
    "1,,2",
    "5.5",
    "a",
    "1-9999",
    "1".repeat(2001),
  ])
    assert.throws(() => excludedPageNumbers(value));
});
test("per-book exclusions migrate, persist, hide blocked sources and preserve learning history", () => {
  const dir = mkdtempSync(path.join(tmpdir(), "kelime-excluded-"));
  process.env.KELIME_DATA_DIR = dir;
  const old = new DatabaseSync(path.join(dir, "kelime.sqlite"));
  old.exec(
    "CREATE TABLE Book (id INTEGER PRIMARY KEY,title TEXT NOT NULL,importedAt TEXT NOT NULL,isDemo INTEGER NOT NULL DEFAULT 0)",
  );
  old.close();
  const sentence = "Daha sonra Habeşistan’a hicret etti.";
  const pages = [
    { pageNumber: 1, text: "VORWORT UND INHALTSVERZEICHNIS" },
    { pageNumber: 2, text: sentence + " Metanet ile bekledi." },
  ];
  try {
    const imported = importBook(
      "Mein Buch",
      pages.map((page) => page.text).join("\n"),
      false,
      [],
      pages,
    );
    const first = state();
    assert.equal(first.book?.excludedPages, "");
    const hicret = first.daily.find((word) => word.word === "hicret")!;
    rate(hicret.id, "hard");
    const progress = JSON.stringify(exportData().progress);
    const daily = JSON.stringify(exportData().daily);
    saveSettings({}, "2");
    const excluded = state();
    assert.equal(excluded.book?.excludedPages, "2");
    assert.ok(
      excluded.daily.every(
        (word) => word.sentence === "" && word.pageNumber === null,
      ),
    );
    assert.equal(JSON.stringify(exportData().progress), progress);
    assert.equal(JSON.stringify(exportData().daily), daily);
    assert.equal(
      exportData().books.find((book) => book.id === imported.bookId)!
        .excludedPages,
      "2",
    );
    const configBefore = JSON.stringify(exportData().settings);
    assert.throws(() => saveSettings({ dailyWordCount: 7 }, "9-2"));
    assert.equal(JSON.stringify(exportData().settings), configBefore);
    assert.equal(state().book?.excludedPages, "2");

    importBook(
      "Anderes Buch",
      sentence + " Metanet ile bekledi.",
      false,
      [],
      [{ pageNumber: 1, text: sentence + " Metanet ile bekledi." }],
    );
    assert.equal(state().book?.excludedPages, "");
    assert.equal(
      state().daily.find((word) => word.word === "hicret")!.sentence,
      sentence,
    );
    db()
      .prepare("UPDATE AppMeta SET value=? WHERE key='activeBook'")
      .run(String(imported.bookId));
    // A valid alternative from another unblocked book may be used, never the blocked page.
    assert.ok(
      state().daily.every(
        (word) => word.source !== "Mein Buch" || !word.sentence,
      ),
    );
    saveSettings({}, "");
    assert.equal(
      state().daily.find((word) => word.word === "hicret")!.source,
      "Mein Buch",
    );
    assert.equal(
      state().daily.find((word) => word.word === "hicret")!.pageNumber,
      2,
    );
    assert.equal(JSON.stringify(exportData().progress), progress);
  } finally {
    db().close();
    rmSync(dir, { recursive: true, force: true });
  }
});
