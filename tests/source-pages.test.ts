import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { extractDocument } from "../lib/importer";
import { db, importBook, state, exportData, rate } from "../lib/db";

test("PDF pages stay attached to the exact occurrence, including repeated and continued sentences", async () => {
  const dir = mkdtempSync(path.join(tmpdir(), "kelime-pages-"));
  process.env.KELIME_DATA_DIR = dir;
  // Old installations have no page metadata.
  const old = new DatabaseSync(path.join(dir, "kelime.sqlite"));
  old.exec(`CREATE TABLE WordOccurrence (
    id INTEGER PRIMARY KEY, wordId INTEGER, sectionId INTEGER,
    sentence TEXT NOT NULL, surroundingText TEXT NOT NULL,
    translation TEXT NOT NULL DEFAULT '', context TEXT NOT NULL DEFAULT ''
  )`);
  old.close();
  try {
    const bytes = readFileSync(
      new URL("./fixtures/two-pages.pdf", import.meta.url),
    );
    const document = await extractDocument(new File([bytes], "two-pages.pdf"));
    assert.equal(document.pages.length, 2);
    assert.deepEqual(
      document.pages.map((page) => page.pageNumber),
      [1, 2],
    );
    assert.match(document.pages[0].text, /Metanet ile bekledi/);
    assert.match(document.pages[1].text, /Emaneti korudu/);
    importBook("Zwei Seiten", document.text, false, [], document.pages);
    const first = state();
    const emanet = first.daily.find((w) => w.word === "emanet")!;
    const metanet = first.daily.find((w) => w.word === "metanet")!;
    assert.equal(emanet.pageNumber, 2);
    assert.equal(metanet.pageNumber, 1);
    rate(emanet.id, "understood");
    const progress = JSON.stringify(exportData().progress);

    const repeated = [
      { pageNumber: 1, text: "Emaneti iyi korudu." },
      { pageNumber: 2, text: "" },
      { pageNumber: 3, text: "Emaneti iyi korudu. Metanet ile bekledi." },
    ];
    const repeatedBook = importBook(
      "Wiederholungen",
      repeated.map((page) => page.text).join("\n"),
      false,
      [],
      repeated,
    );
    const dump = exportData();
    const sectionIds = dump.sections
      .filter((s) => s.bookId === repeatedBook.bookId)
      .map((s) => s.id);
    const occurrences = dump.occurrences.filter(
      (o) => sectionIds.includes(o.sectionId) && o.wordId === emanet.id,
    );
    assert.deepEqual(
      occurrences.map((o) => o.pageNumber),
      [1, 3],
    );
    assert.deepEqual(
      occurrences.map((o) => o.pageEnd),
      [1, 3],
    );

    const continued = [
      { pageNumber: 1, text: "Emaneti korumayı" },
      { pageNumber: 2, text: "öğrendi. Metanet ile bekledi." },
    ];
    importBook(
      "Seitenwechsel",
      continued.map((page) => page.text).join("\n"),
      false,
      [],
      continued,
    );
    const spanning = state().daily.find((w) => w.word === "emanet")!;
    assert.equal(spanning.pageNumber, 1);
    assert.equal(spanning.pageEnd, 2);
    assert.match(spanning.sentence, /korumayı\nöğrendi/);
    assert.equal(JSON.stringify(exportData().progress), progress);

    const plain = await extractDocument(
      new File(["Emaneti korudu. Metanet ile bekledi."], "text.txt"),
    );
    assert.deepEqual(plain.pages, []);
    importBook("Ohne Seiten", plain.text);
    assert.ok(
      state().daily.every((w) => w.pageNumber === null && w.pageEnd === null),
    );
    importBook("Windows-Text", "Emaneti iyi korudu.\r\nMetanet ile bekledi.");
    assert.ok(state().daily.every((w) => w.pageNumber === null));
    const before = JSON.stringify(exportData());
    assert.throws(
      () => importBook("Falsche Zuordnung", plain.text, false, [], continued),
      /Seitenzuordnung/,
    );
    // Failed imports do not create a book or alter learning data.
    assert.equal(
      JSON.stringify(exportData().books),
      JSON.stringify(JSON.parse(before).books),
    );
    assert.equal(JSON.stringify(exportData().progress), progress);
  } finally {
    db().close();
    rmSync(dir, { recursive: true, force: true });
  }
});
