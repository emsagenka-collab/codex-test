import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  db,
  state,
  saveSettings,
  importBook,
  deleteBook,
  rate,
  exportData,
  loadDemo,
} from "../lib/db";

test("deleting books removes only their sources and lessons, preserves ratings, rolls back failures and handles the last book", () => {
  const dir = mkdtempSync(path.join(tmpdir(), "kelime-delete-book-"));
  process.env.KELIME_DATA_DIR = dir;
  try {
    const demo = loadDemo();
    assert.ok(demo);
    saveSettings({ dailyWordCount: 2, level: "B2" });
    const first = importBook(
      "Erstes Buch",
      "Emaneti iyi korudu. Metanet ile bekledi.",
    );
    const a = state();
    rate(a.daily.find((w) => w.word === "emanet")!.id, "understood");
    const second = importBook(
      "Zweites Buch",
      "Emaneti sahibine teslim etti. Hicret hakkında konuştu.",
    );
    const b = state();
    rate(b.daily.find((w) => w.word === "hicret")!.id, "hard");
    const before = exportData();
    const beforeIds = b.daily.map((w) => w.id);
    const deletedSections = new Set(
      before.sections.filter((s) => s.bookId === first.bookId).map((s) => s.id),
    );
    deleteBook(first.bookId);
    const after = state();
    assert.equal(after.book?.id, second.bookId);
    assert.equal(after.books.length, 2);
    assert.deepEqual(
      after.daily.map((w) => w.id),
      beforeIds,
    );
    assert.equal(
      after.vocabulary.find((w) => w.word === "emanet")!.rating,
      "understood",
    );
    assert.equal(after.daily.find((w) => w.word === "hicret")!.rating, "hard");
    assert.ok(
      after.daily.every((w) =>
        w.examples.every((e) => e.source === "Zweites Buch"),
      ),
    );
    const saved = exportData();
    assert.ok(!saved.sections.some((s) => s.bookId === first.bookId));
    assert.ok(!saved.occurrences.some((o) => deletedSections.has(o.sectionId)));
    assert.ok(
      !saved.selections.some((s) =>
        String(s.scope).startsWith(`${first.bookId}:`),
      ),
    );
    assert.ok(
      !saved.daily.some((s) => String(s.scope).startsWith(`${first.bookId}:`)),
    );
    assert.deepEqual(saved.progress, before.progress);
    assert.deepEqual(saved.activity, before.activity);
    assert.deepEqual(saved.settings, before.settings);
    assert.throws(() => deleteBook(first.bookId));
    assert.throws(() => deleteBook(NaN));
    assert.throws(() => deleteBook(0));
    assert.throws(() => deleteBook(1.5));
    // Force a failure after the dependent rows were deleted. All must roll back.
    db().exec(
      "CREATE TRIGGER reject_book_deletion BEFORE DELETE ON Book BEGIN SELECT RAISE(ABORT,'test failure'); END;",
    );
    assert.throws(() => deleteBook(second.bookId), /test failure/);
    const rolledBack = exportData();
    for (const key of [
      "books",
      "sections",
      "occurrences",
      "progress",
      "daily",
      "selections",
      "activeBookId",
    ] as const)
      assert.deepEqual(rolledBack[key], saved[key]);
    db().exec("DROP TRIGGER reject_book_deletion");
    deleteBook(second.bookId);
    assert.equal(state().book?.id, demo.bookId);
    const beforeLast = exportData();
    deleteBook(demo.bookId);
    const empty = state();
    assert.equal(empty.book, null);
    assert.deepEqual(empty.books, []);
    assert.deepEqual(empty.daily, []);
    assert.deepEqual(empty.due, []);
    const noSources = exportData();
    assert.deepEqual(noSources.sections, []);
    assert.deepEqual(noSources.occurrences, []);
    assert.deepEqual(noSources.progress, beforeLast.progress);
    assert.deepEqual(noSources.activity, saved.activity);
    importBook("Wieder importiert", "Emaneti iyi korudu. Metanet ile bekledi.");
    const restored = state();
    assert.equal(restored.book?.title, "Wieder importiert");
    assert.equal(
      restored.vocabulary.find((w) => w.word === "emanet")!.rating,
      "understood",
    );
    assert.deepEqual(db().prepare("PRAGMA foreign_key_check").all(), []);
  } finally {
    db().close();
    rmSync(dir, { recursive: true, force: true });
  }
});
