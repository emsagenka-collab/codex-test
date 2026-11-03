import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { learningLexicon, lexicon } from "../lib/lexicon";
import { matches, normalize } from "../lib/learning";
import {
  db,
  importBook,
  saveSettings,
  state,
  rate,
  exportData,
  loadDemo,
} from "../lib/db";

test("the extended offline dictionary has distinct teaching entries without fabricated book examples", () => {
  for (const level of [1, 2, 3]) {
    const entries = learningLexicon.filter(
      (entry) => entry.difficulty === level,
    );
    assert.ok(entries.length >= 1000, `Level ${level}: ${entries.length}`);
  }
  assert.equal(
    new Set(learningLexicon.map((e) => normalize(e.word))).size,
    learningLexicon.length,
  );
  for (const entry of learningLexicon) {
    assert.ok([1, 2, 3].includes(entry.difficulty), entry.word);
    assert.equal(
      entry.word,
      entry.word.normalize("NFC").toLocaleLowerCase("tr-TR"),
    );
    assert.match(entry.word, /^\p{L}+$/u);
    assert.ok(entry.explanation.length >= 20, entry.word);
    for (const field of [
      entry.meaning,
      entry.explanation,
      entry.modern,
      entry.related,
    ])
      assert.ok(field.trim().length > 2, entry.word);
  }
  for (const entry of learningLexicon.filter((e) => !lexicon.includes(e))) {
    assert.equal(entry.demo, "");
    assert.equal(entry.translation, "");
    assert.equal(entry.context, "");
  }
});

test("vowel-loss stems, possessive endings and historical spellings match bounded forms only", () => {
  for (const [token, word] of [
    ["hükmüne", "hüküm"],
    ["emrini", "emir"],
    ["ilmi", "ilim"],
    ["sabrıyla", "sabır"],
    ["fethinden", "fetih"],
    ["himayesinde", "himaye"],
    ["muamelesini", "muamele"],
    ["andlaşmanın", "antlaşma"],
    ["tevbe", "tövbe"],
    ["ashab", "ashap"],
    ["mürşidler", "mürşit"],
    ["akaid", "akait"],
    ["zühd", "züht"],
  ])
    assert.equal(matches(token, word), true, `${token} / ${word}`);
  for (const [token, word] of [
    ["hükümet", "hüküm"],
    ["ilmik", "ilim"],
    ["Fethiye", "fetih"],
    ["samimiyetsiz", "samimiyet"],
    ["merhametsiz", "merhamet"],
  ])
    assert.equal(matches(token, word), false, `${token} / ${word}`);
});

test("an old book gains new B2 and C1 words without reimport, replacing ratings or adding demo quotes", () => {
  const dir = mkdtempSync(path.join(tmpdir(), "kelime-dictionary-upgrade-"));
  process.env.KELIME_DATA_DIR = dir;
  try {
    loadDemo();
    assert.equal(state().book?.matchedCount, 24);
    const text = [
      "Emaneti iyi korudu.",
      "Onlara merhamet gösterdi.",
      "Fazileti herkese örnek oldu.",
      "Ona müsaade etti.",
      "Güzel muamelesini unutmadı.",
      "Adaleti herkes için savundu.",
      "Arkadaşına teselli verdi.",
      "Himayesinde kalanları korudu.",
      "Muhasara günlerce sürdü.",
      "Kurallara riayet etti.",
      "Hükmüne herkes uydu.",
      "Halkın itibarını kazandı.",
      "Gece dua etti.",
    ].join("\n\n");
    saveSettings({ dailyWordCount: 1, level: "B2" });
    const book = importBook("Vorhandenes Buch", text);
    const initial = state();
    const original = initial.daily[0];
    rate(original.id, "hard");
    // Simulate a database created with the earlier, small dictionary.
    db().prepare("DELETE FROM WordOccurrence WHERE wordId<>?").run(original.id);
    db()
      .prepare("DELETE FROM LearningProgress WHERE wordId<>?")
      .run(original.id);
    db().prepare("DELETE FROM VocabularyWord WHERE id<>?").run(original.id);
    const progress = exportData().progress.find(
      (row) => row.wordId === original.id,
    );
    const raw = JSON.stringify(exportData().sections);
    saveSettings({ dailyWordCount: 4 });
    const upgraded = state();
    assert.equal(upgraded.book?.id, book.bookId);
    assert.equal(JSON.stringify(exportData().sections), raw);
    assert.equal(upgraded.daily.length, 4);
    assert.equal(upgraded.daily[0].id, original.id);
    assert.equal(upgraded.daily[0].rating, "hard");
    assert.ok(
      upgraded.daily.every(
        (w) =>
          w.difficulty === 2 && w.source === "Vorhandenes Buch" && !w.demoBook,
      ),
    );
    assert.ok(upgraded.levelCounts.B2 >= 8);
    assert.equal(upgraded.levelCounts.C1, 4);
    assert.equal(upgraded.levelCounts.B1, 4);
    assert.equal(upgraded.levelProgress.total, upgraded.levelCounts.B2);
    const words = exportData().words.map((row) => JSON.parse(String(row.data)));
    assert.ok(words.some((word) => word.word === "fazilet"));
    assert.ok(words.some((word) => word.word === "muhasara"));
    const lesson = upgraded.daily.map((w) => w.id);
    assert.deepEqual(
      state().daily.map((w) => w.id),
      lesson,
    );
    assert.deepEqual(
      exportData().progress.find((row) => row.wordId === original.id),
      progress,
    );
    saveSettings({ level: "C1" });
    const advanced = state();
    assert.equal(advanced.daily.length, 4);
    assert.ok(
      advanced.daily.every((w) => w.difficulty === 3 && w.examples.length > 0),
    );
    assert.ok(
      advanced.daily.every((w) =>
        w.examples.every((e) => e.source === "Vorhandenes Buch" && !e.demoBook),
      ),
    );
    assert.ok(advanced.daily.some((w) => w.word === "hüküm"));
    assert.equal(advanced.levelProgress.completed, false);
    assert.deepEqual(
      exportData().progress.find((row) => row.wordId === original.id),
      progress,
    );
    assert.throws(() =>
      importBook(
        "Nur Namen",
        "Muhammed ging nach Medina. Hamza kam nach Mekka.",
      ),
    );
    assert.equal(state().book?.id, book.bookId);
  } finally {
    db().close();
    rmSync(dir, { recursive: true, force: true });
  }
});
