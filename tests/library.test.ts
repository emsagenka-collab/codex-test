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
  selectBook,
  rate,
  exportData,
  reset,
} from "../lib/db";

test("five imported books remain selectable with stable book lessons, source examples and ratings", () => {
  const dir = mkdtempSync(path.join(tmpdir(), "kelime-library-"));
  process.env.KELIME_DATA_DIR = dir;
  try {
    saveSettings({ dailyWordCount: 2, level: "B2" });
    const first = importBook(
      "Erstes Buch",
      "Emaneti iyi korudu. Metanet ile bekledi.",
    );
    const a = state();
    assert.equal(a.daily.length, 2);
    const firstIds = a.daily.map((w) => w.id);
    rate(firstIds[0], "understood");
    const second = importBook(
      "Zweites Buch",
      "Hicret hakkında konuştu. Harp hakkında düşündü.",
    );
    const b = state();
    assert.equal(b.daily.length, 2);
    const secondIds = b.daily.map((w) => w.id);
    rate(secondIds[0], "hard");
    importBook("Drittes Buch", "Şefkat gösterdi. Merhamet gösterdi.");
    importBook("Viertes Buch", "Sadakat gösterdi. Tevazu gösterdi.");
    importBook("Fünftes Buch", "Tefekkür ederken düşündü. Sükûnetini korudu.");
    const fifth = state();
    assert.equal(fifth.books.length, 5);
    assert.equal(fifth.books.filter((b) => b.active).length, 1);
    selectBook(first.bookId);
    const back = state();
    assert.deepEqual(
      back.daily.map((w) => w.id),
      firstIds,
    );
    assert.equal(back.daily[0].rating, "understood");
    assert.ok(
      back.daily.every(
        (w) =>
          w.source === "Erstes Buch" &&
          w.examples.every((e) => e.source === "Erstes Buch"),
      ),
    );
    assert.equal(back.books[0].id, first.bookId);
    assert.ok(back.books[0].active);
    assert.ok(back.books.every((book) => book.sectionCount > 0));
    selectBook(second.bookId);
    const backB = state();
    assert.deepEqual(
      backB.daily.map((w) => w.id),
      secondIds,
    );
    assert.equal(backB.daily[0].rating, "hard");
    assert.ok(backB.daily.every((w) => w.source === "Zweites Buch"));
    const backup = exportData();
    assert.equal(backup.activeBookId, second.bookId);
    assert.ok(
      backup.selections.some((row) => row.scope === `${first.bookId}:B2`),
    );
    assert.ok(
      backup.selections.some((row) => row.scope === `${second.bookId}:B2`),
    );
    assert.throws(() => selectBook(999999));
    assert.throws(() => selectBook(NaN));
    assert.equal(state().book?.id, second.bookId);
    db().exec("DELETE FROM DailySelections");
    assert.deepEqual(
      state().daily.map((w) => w.id),
      secondIds,
    );
    assert.equal(state().daily[0].rating, "hard");
    reset();
    assert.equal(state().books.length, 0);
    assert.equal(state().book, null);
  } finally {
    db().close();
    rmSync(dir, { recursive: true, force: true });
  }
});
