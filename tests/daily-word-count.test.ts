import { test } from "node:test";
import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { dayKey } from "../lib/learning";
import {
  db,
  state,
  loadDemo,
  rate,
  saveSettings,
  settings,
  exportData,
  reset,
  importBook,
} from "../lib/db";

test("daily word goals migrate old data, resize safely, persist and handle limits", (t) => {
  const dir = mkdtempSync(path.join(tmpdir(), "kelime-goal-"));
  process.env.KELIME_DATA_DIR = dir;
  const today = dayKey(new Date(), "Europe/Berlin");
  // Simulate the actual schema and settings installed before this update.
  const legacy = new DatabaseSync(path.join(dir, "kelime.sqlite"));
  legacy.exec(`
    CREATE TABLE User (id INTEGER PRIMARY KEY, settings TEXT NOT NULL);
    CREATE TABLE DailyWords (date TEXT PRIMARY KEY, word1 INTEGER, word2 INTEGER);
  `);
  legacy.prepare("INSERT INTO User VALUES (1,?)").run(
    JSON.stringify({
      level: "B2",
      theme: "light",
      textSize: "normal",
      reminder: "19:00",
      timezone: "Europe/Berlin",
    }),
  );
  legacy.prepare("INSERT INTO DailyWords VALUES (?,?,?)").run(today, 1, 2);
  legacy.close();
  try {
    loadDemo();
    db()
      .prepare("UPDATE LearningProgress SET firstSeen=? WHERE wordId IN (1,2)")
      .run(today);
    const first = state();
    assert.equal(first.settings.dailyWordCount, 2);
    assert.deepEqual(
      first.daily.map((w) => w.id),
      [1, 2],
    );
    assert.equal(exportData().daily[0].wordIds, "[1,2]");
    rate(first.daily[0].id, "hard");
    const originalProgress = state().daily[0];

    for (const invalid of [0, -1, 101, 2.5, null, "5", NaN, Infinity]) {
      assert.throws(
        () => saveSettings({ dailyWordCount: invalid as number }),
        /ganze Zahl/,
      );
      assert.equal(settings().dailyWordCount, 2);
    }

    saveSettings({ dailyWordCount: 5 });
    const expanded = state();
    const expandedIds = expanded.daily.map((w) => w.id);
    assert.equal(expanded.daily.length, 5);
    assert.equal(new Set(expandedIds).size, 5);
    assert.deepEqual(expandedIds.slice(0, 2), [1, 2]);
    assert.deepEqual(
      state().daily.map((w) => w.id),
      expandedIds,
    );
    saveSettings({ theme: "dark" });
    assert.equal(settings().dailyWordCount, 5);
    assert.deepEqual(
      state().daily.map((w) => w.id),
      expandedIds,
    );
    rate(expanded.daily[3].id, "understood");

    saveSettings({ dailyWordCount: 1 });
    const reduced = state();
    assert.deepEqual(
      reduced.daily.map((w) => w.id),
      [1, expandedIds[3]],
    );
    assert.equal(reduced.daily[0].reviewCount, originalProgress.reviewCount);
    assert.equal(reduced.daily[0].nextReview, originalProgress.nextReview);
    assert.equal(reduced.stats.studiedToday, 2);
    const removedIds = expandedIds.filter(
      (id) => !reduced.daily.some((w) => w.id === id),
    );
    for (const id of removedIds) {
      const progress = exportData().progress.find((p) => p.wordId === id)!;
      assert.equal(progress.firstSeen, null);
      assert.equal(progress.reviewCount, 0);
    }

    saveSettings({ dailyWordCount: 100 });
    const available = state();
    assert.equal(available.daily.length, 13);
    assert.equal(new Set(available.daily.map((w) => w.id)).size, 13);
    assert.equal(exportData().settings.dailyWordCount, 100);

    saveSettings({ dailyWordCount: 1 });
    state();

    t.mock.timers.enable({
      apis: ["Date"],
      now: new Date(today + "T12:00:00Z").getTime() + 86400000,
    });
    const tomorrow = state();
    assert.equal(tomorrow.settings.dailyWordCount, 1);
    assert.equal(tomorrow.daily.length, 1);
    assert.ok(!reduced.daily.some((w) => w.id === tomorrow.daily[0].id));
    t.mock.timers.reset();

    reset();
    saveSettings({ dailyWordCount: 100 });
    importBook("Ein einziges Wort", "Emaneti korumayı öğrendi.");
    const partial = state();
    assert.equal(partial.daily.length, 1);
    assert.equal(partial.settings.dailyWordCount, 100);
    importBook("Weiteres Wort", "Tefekkür ederken bekledi.");
    const toppedUp = state();
    assert.equal(toppedUp.daily.length, 1);
    assert.equal(toppedUp.daily[0].word, "tefekkür");
    assert.ok(toppedUp.daily.every((word) => word.source === "Weiteres Wort"));
    assert.deepEqual(
      state().daily.map((w) => w.id),
      toppedUp.daily.map((w) => w.id),
    );
  } finally {
    t.mock.timers.reset();
    db().close();
    rmSync(dir, { recursive: true, force: true });
  }
});
