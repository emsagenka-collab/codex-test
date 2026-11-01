import { test } from "node:test";
import assert from "node:assert/strict";
import { repairPdfWordBreaks } from "../lib/pdf-word-breaks";
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
