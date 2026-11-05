import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import JSZip from "jszip";
import { extractText } from "../lib/importer";
test("UTF-8 text preserves Turkish special characters", async () => {
  const text = "Çünkü şefkat, sükûnet ve İHLAS önemlidir.";
  assert.equal(await extractText(new File([text], "book.txt")), text);
});
test("PDF with a text layer is extracted", async () => {
  const bytes = readFileSync(new URL("./fixtures/sample.pdf", import.meta.url));
  const text = await extractText(new File([bytes], "book.pdf"));
  assert.match(text, /Metanet ve emanet/);
});
test("EPUB follows spine reading order and removes markup", async () => {
  const zip = new JSZip();
  zip.file(
    "META-INF/container.xml",
    '<container><rootfiles><rootfile full-path="OEBPS/content.opf"/></rootfiles></container>',
  );
  zip.file(
    "OEBPS/content.opf",
    '<package><manifest><item id="b" href="b.xhtml"/><item id="a" href="a.xhtml"/></manifest><spine><itemref idref="a"/><itemref idref="b"/></spine></package>',
  );
  zip.file(
    "OEBPS/a.xhtml",
    "<html><body><p>Birinci bölüm: metanet.</p></body></html>",
  );
  zip.file(
    "OEBPS/b.xhtml",
    "<html><body><p>İkinci bölüm: tefekkür.</p></body></html>",
  );
  const content = await zip.generateAsync({ type: "uint8array" });
  const text = await extractText(
    new File([Uint8Array.from(content)], "book.epub"),
  );
  assert.ok(text.indexOf("Birinci") < text.indexOf("İkinci"));
  assert.equal(text.includes("<p>"), false);
});
test("unsupported files fail clearly", async () => {
  await assert.rejects(
    () => extractText(new File(["binary"], "book.docx")),
    /TXT-, PDF- oder EPUB/,
  );
});

test("legacy Turkish PDF characters survive extraction and are recoverable", async () => {
  const { repairTurkishText } = await import("../lib/text-repair");
  const bytes = readFileSync(
    new URL("./fixtures/legacy-turkish.pdf", import.meta.url),
  );
  const raw = await extractText(new File([bytes], "legacy.pdf"));
  assert.ok(raw.includes("komﬂularla"));
  assert.match(
    repairTurkishText(raw),
    /doğru korumayı, komşularla paylaşmayı öğrendi/,
  );
  // This is the extraction mode used by previously installed versions.
  const { PDFParse } = await import("pdf-parse");
  const parser = new PDFParse({ data: bytes });
  try {
    const old = await parser.getText();
    assert.ok(old.text.includes("komflularla"));
    assert.match(repairTurkishText(old.text), /komşularla paylaşmayı/);
  } finally {
    await parser.destroy();
  }
});
