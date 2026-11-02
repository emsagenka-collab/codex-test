import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  db,
  importBook,
  saveSettings,
  state,
  rate,
  exportData,
} from "../lib/db";

test("old unread allocations refill the goal, missing dictionary entries recover and level completion offers a genuine progression", () => {
  const dir = mkdtempSync(path.join(tmpdir(), "kelime-level-"));
  process.env.KELIME_DATA_DIR = dir;
  const text =
    "Emaneti iyi korudu.\n\nMetanet gösterdi.\n\nTefekkür ederken düşündü.\n\nSükûnetini korudu.\n\nHidayet için dua etti.";
  try {
    saveSettings({ dailyWordCount: 4 });
    importBook("Seviyeler", text);
    let initial = state();
    assert.equal(initial.daily.length, 4);
    assert.ok(initial.daily.every((word) => word.difficulty === 2));
    assert.equal(initial.levelProgress.total, 4);
    assert.equal(initial.levelProgress.completed, false);
    const suk = initial.daily.find((word) => word.word === "sükûnet")!;
    db()
      .prepare(
        "UPDATE LearningProgress SET firstSeen='2026-10-01' WHERE reviewCount=0",
      )
      .run();
    db()
      .prepare(
        "UPDATE DailyWords SET word1=?,word2=NULL,wordIds=? WHERE date=?",
      )
      .run(suk.id, JSON.stringify([suk.id]), initial.today);
    assert.equal(state().daily.length, 4);
    saveSettings({ dailyWordCount: 3 });
    assert.equal(state().daily.length, 3);
    assert.equal(state().levelProgress.completed, false);
    saveSettings({ dailyWordCount: 4 });
    assert.equal(state().daily.length, 4);

    // Reproduce a sparse old installation whose importer only indexed one word.
    db().exec("DELETE FROM DailyWords");
    db().prepare("DELETE FROM WordOccurrence WHERE wordId<>?").run(suk.id);
    db().prepare("DELETE FROM LearningProgress WHERE wordId<>?").run(suk.id);
    db().prepare("DELETE FROM VocabularyWord WHERE id<>?").run(suk.id);
    initial = state();
    assert.equal(initial.daily.length, 4);
    assert.ok(
      initial.daily.every((word) => word.examples.length > 0 && !word.demoBook),
    );
    assert.equal(initial.levelProgress.remaining, 4);
    saveSettings({ level: "B1" });
    assert.equal(state().daily.length, 0);
    assert.equal(state().levelProgress.completed, false);
    assert.equal(state().levelProgress.total, 0);
    saveSettings({ level: "B2" });
    const b2 = state();
    for (const word of b2.daily) rate(word.id, "understood");
    const done = state();
    assert.equal(done.levelProgress.completed, true);
    assert.equal(done.levelProgress.remaining, 0);
    assert.equal(done.levelProgress.processed, 4);
    assert.equal(done.levelProgress.nextLevel, "C1");
    const progress = exportData().progress.filter((row) =>
      b2.daily.some((word) => word.id === row.wordId),
    );

    saveSettings({ level: "C1" });
    const c1 = state();
    assert.equal(c1.daily.length, 1);
    assert.equal(c1.daily[0].word, "hidayet");
    assert.ok(c1.daily.every((word) => word.difficulty === 3));
    assert.equal(c1.levelProgress.completed, false);
    assert.equal(c1.levelProgress.nextLevel, null);
    assert.deepEqual(
      exportData().progress.filter((row) =>
        b2.daily.some((word) => word.id === row.wordId),
      ),
      progress,
    );
    rate(c1.daily[0].id, "hard");
    assert.equal(state().levelProgress.completed, true);

    saveSettings({ level: "B2" });
    importBook(
      "Neues Buch",
      "Arkadaşlarına sadakat gösterdi.\n\nŞefkatle yaklaştı.",
    );
    const next = state();
    assert.equal(next.settings.level, "B2");
    assert.equal(next.levelProgress.completed, false);
    assert.ok(next.daily.length > 0);
    assert.ok(
      next.daily.every(
        (word) => word.source === "Neues Buch" && word.difficulty === 2,
      ),
    );
  } finally {
    db().close();
    rmSync(dir, { recursive: true, force: true });
  }
});
