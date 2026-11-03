import { test } from "node:test";
import assert from "node:assert/strict";
import { observedWordForms, repairPdfWordBreaks } from "../lib/pdf-word-breaks";
import { repairTurkishText } from "../lib/text-repair";
test("known word forms rejoin spaces and line breaks while preserving spelling and apostrophes", () => {
  for (const [raw, expected] of [
    ["Peygambe rimiz’in", "Peygamberimiz’in"],
    ["Peygambe rimiz", "Peygamberimiz"],
    ["Peygambe\nrimizin", "Peygamberimizin"],
    ["te fek kür", "tefekkür"],
    ["tefek-\nkür", "tefekkür"],
    ["tefek-\r\nkür", "tefekkür"],
    ["iba- ret", "ibaret"],
    ["tefek\u00adkür", "tefekkür"],
    ["O gün dem-\nirci hakkında düşündü.", "O gün demirci hakkında düşündü."],
    ["PEYGAMBE RİMİZ", "PEYGAMBERİMİZ"],
  ] as const) {
    const result = repairPdfWordBreaks(raw);
    assert.equal(result.text, expected);
    assert.ok(result.repairs.length);
    for (const repair of result.repairs)
      assert.equal(raw.slice(repair.start, repair.end), repair.original);
    assert.equal(repairPdfWordBreaks(result.text).text, result.text);
  }
});
test("real word boundaries, unknown forms, punctuation, paragraphs and meaningful hyphens remain intact", () => {
  for (const text of [
    "bir şey",
    "her gün",
    "bu gün",
    "ben de",
    "emaneti korudu",
    "tefek. kür",
    "tefek\n\nkür",
    "Türk-İslam",
    "tefek-kür",
    "bilin meyen",
    "merhaba dünya",
  ])
    assert.equal(repairPdfWordBreaks(text).text, text);
});
test("existing display repair combines legacy glyph restoration and split-word recovery", () => {
  assert.equal(
    repairTurkishText(
      "Peygambe rimiz’in te fek kür ederken hak lar›n› korudu.",
    ),
    "Peygamberimiz’in tefekkür ederken haklarını korudu.",
  );
});

test("document-attested whole forms repair explicit line-end hyphens across arbitrary words, preserving real compounds", () => {
  const source =
    "Kureyşlilerin burada hicretten bahsettiğini gördü.\nKu-\nreyşlilerin hicret-\nten söz ettiğini duydu.";
  const forms = observedWordForms(source);
  const repaired = repairPdfWordBreaks(source, forms);
  assert.ok(repaired.text.includes("Kureyşlilerin hicretten söz"));
  for (const text of [
    "Türk-\nAlman",
    "Muhammedü’l-\nEmin",
    "Kureyşli-\n\nlerin",
    "qzxv-\nabcxyz",
    "her gün",
    "Kureyş-lilerin",
  ])
    assert.equal(repairPdfWordBreaks(text, forms).text, text);
  assert.equal(source.includes("Ku-\nreyşlilerin"), true);
  assert.equal(repairTurkishText("ya€-\nmuru", true), "yağmuru");
});

test("the offline word-form inventory repairs inflected words at different line and syllable breaks", () => {
  assert.equal(
    repairPdfWordBreaks("gös-\nte-\nril-\nmiş-\nti").text,
    "gösterilmişti",
  );
  for (const word of [
    "beraberdi",
    "gösteriyor",
    "gösterilmişti",
    "bayrağını",
    "verdikleri",
    "bilinmeyen",
  ]) {
    for (let at = 1; at < word.length; at++) {
      for (const gap of ["-\n", "-\r\n  ", "‐\n", "\u00ad\n", "- "]) {
        const raw = word.slice(0, at) + gap + word.slice(at);
        const repaired = repairPdfWordBreaks(raw);
        assert.equal(repaired.text, word, raw);
        assert.equal(repaired.repairs[0].original, raw);
        assert.equal(repairPdfWordBreaks(repaired.text).text, word);
      }
    }
  }
});

test("word-form lookup never broadens repairs to arbitrary spaces, inline compounds or paragraphs", () => {
  for (const raw of [
    "bera berdi",
    "bera-berdi",
    "göste riyor",
    "bilin-\n\nmeyen",
    "qzxv-\nabcxyz",
    "Türk-İslam",
    "Harem-i Şerif",
    "Türk‑Alman",
  ])
    assert.equal(repairPdfWordBreaks(raw).text, raw, raw);
  const forms = observedWordForms("Mescid-i Nebi ve Harem-i Şerif anıldı.");
  for (const raw of ["Mescid-\ni Nebi", "Harem-\ni Şerif"])
    assert.equal(repairPdfWordBreaks(raw, forms).text, raw);
  const proper = observedWordForms("Mekke’ye gitti.");
  assert.equal(repairPdfWordBreaks("Mek-\nke", proper).text, "Mekke");
});
