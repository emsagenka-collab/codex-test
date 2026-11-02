import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { lexicon } from "../lib/lexicon";
import { db, state, loadDemo, rate, importBook, exportData } from "../lib/db";
const dir = mkdtempSync(path.join(tmpdir(), "kelime-test-"));
process.env.KELIME_DATA_DIR = dir;
test("source provenance, stable daily selection, real imports, and persisted ratings", (t) => {
  try {
    assert.equal(state().onboarded, false);
    loadDemo();
    const first = state();
    assert.equal(first.daily.length, 2);
    assert.equal(first.book?.matchedCount, 24);
    assert.equal(first.vocabulary.length, 2);
    assert.deepEqual(
      state().daily.map((w) => w.id),
      first.daily.map((w) => w.id),
    );
    const dump = exportData();
    for (const o of dump.occurrences) {
      const section = dump.sections.find((s) => s.id === o.sectionId)!;
      assert.ok(String(section.originalText).includes(String(o.sentence)));
      assert.equal(
        o.translation,
        lexicon.find((e) => e.demo === o.sentence)?.translation,
      );
    }
    rate(first.daily[0].id, "hard");
    const rated = state().daily[0];
    assert.equal(rated.status, "difficult");
    assert.ok(rated.nextReview! > first.today);
    assert.equal(rated.reviewCount, 1);
    assert.equal(state().stats.studiedToday, 1);
    const text =
      "Önemli bir karar vermeden önce arkadaşlarıyla istişare etti.\n\nBütün engellere rağmen yolunda sebat etti.";
    importBook("Mein eigener Text", text);
    assert.equal(state().book?.isDemo, 0);
    assert.deepEqual(
      state().daily.map((word) => word.word),
      ["sebat"],
    );
    assert.ok(
      state().daily.every(
        (word) => word.source === "Mein eigener Text" && word.difficulty === 2,
      ),
    );
    const records = exportData();
    const book = records.books.find((b) => b.title === "Mein eigener Text")!;
    const ids = records.sections
      .filter((s) => s.bookId === book.id)
      .map((s) => s.id);
    const imported = records.occurrences.filter((o) =>
      ids.includes(o.sectionId),
    );
    assert.equal(imported.length, 2);
    imported.forEach((o) => {
      assert.ok(text.includes(String(o.sentence)));
      assert.equal(o.translation, "");
    });
    assert.throws(() =>
      importBook("Einfach", "Ve bir gün geldi. Sonra da bir şey dedi."),
    );
    assert.equal(state().book?.title, "Mein eigener Text");
    assert.ok(records.progress.some((p) => p.status === "difficult"));
    rate(first.daily[0].id, "hard");
    assert.equal(
      state().vocabulary.find((word) => word.id === first.daily[0].id)!
        .reviewCount,
      1,
    );
    t.mock.timers.enable({
      apis: ["Date"],
      now: new Date(first.today + "T12:00:00Z").getTime() + 86400000,
    });
    const tomorrow = state();
    assert.equal(tomorrow.daily.length, 1);
    assert.ok(
      tomorrow.daily.every((w) => !first.daily.some((old) => old.id === w.id)),
    );
    assert.ok(tomorrow.due.some((w) => w.id === first.daily[0].id));
    t.mock.timers.reset();
    const raw =
      "Emaneti do€ru korumay›, komﬂularla paylaﬂmay› ö€rendi.\n\nTefekkür ederken haklar›n› düﬂündü.";
    const learningBefore = JSON.stringify(exportData().progress);

    const legacy = importBook("Ältere PDF-Schrift", raw);
    const displayed = state();
    const emanet = displayed.vocabulary.find((w) => w.word === "emanet")!;
    assert.match(
      emanet.sentence,
      /doğru korumayı, komşularla paylaşmayı öğrendi/,
    );
    assert.match(emanet.originalSentence!, /do€ru/);
    assert.equal(JSON.stringify(exportData().progress), learningBefore);
    assert.ok(
      state().daily.every((word) => word.source === "Ältere PDF-Schrift"),
    );
    const todayAfter = JSON.stringify(exportData().daily);
    state();
    assert.equal(JSON.stringify(exportData().daily), todayAfter);
    const importedRaw = exportData()
      .sections.filter((s) => s.bookId === legacy.bookId)
      .map((s) => s.originalText)
      .join("\n\n");
    assert.equal(importedRaw, raw);
    assert.match(
      state().vocabulary.find((w) => w.word === "emanet")!.sentence,
      /doğru/,
    );
    const progressSnapshot = JSON.stringify(exportData().progress);

    const splitRaw =
      "Peygambe rimiz’in emaneti koruduğunu dinliyordu.\n\nTefek-\nkür ederken herşey hazırdı.";
    const splitBook = importBook("Getrennte PDF-Wörter", splitRaw);
    const joined = state();
    const splitWord = joined.vocabulary.find((w) => w.word === "emanet")!;
    assert.match(splitWord.sentence, /Peygamberimiz’in/);
    assert.match(splitWord.originalSentence!, /Peygambe rimiz’in/);
    const reflection = joined.vocabulary.find((w) => w.word === "tefekkür")!;
    assert.match(reflection.sentence, /Tefekkür/);
    assert.equal(
      reflection.orthography.suggestion,
      "Tefekkür ederken her şey hazırdı.",
    );
    assert.equal(reflection.sentence, "Tefekkür ederken herşey hazırdı.");
    assert.equal(JSON.stringify(exportData().progress), progressSnapshot);
    assert.ok(
      state().daily.every((word) => word.source === "Getrennte PDF-Wörter"),
    );
    assert.equal(
      exportData()
        .sections.filter((s) => s.bookId === splitBook.bookId)
        .map((s) => s.originalText)
        .join("\n\n"),
      splitRaw,
    );
  } finally {
    db().close();
    rmSync(dir, { recursive: true, force: true });
  }
});
