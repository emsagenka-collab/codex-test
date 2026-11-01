import { test } from "node:test";
import assert from "node:assert/strict";
import { exampleSentences } from "../lib/example-sentences";

test("chapter titles, table-of-contents entries and fragments are not learning examples", () => {
  for (const heading of [
    "49 VII- HABEŞİSTAN’A HİCRET .",
    "VII – Habeşistan’a Hicret",
    "HABEŞİSTAN’A HİCRET",
    "EMANETİ KORUMA.",
    "Habeşistan’a Hicret ........ 49",
    "Habeşistan’a hicret … 49",
    "Hicret 49",
    "Emanet\t73",
    "49",
    "VII.",
    "Hicret ederken yolda",
    "a) Habeşistan’a hicret edenler.",
    "a) Habeşistan’a hicret edenler .",
    "b) Habeşistan’a hicret edenler",
    "(c) Habeşistan’a hicret edenler.",
    "d. Habeşistan’a hicret edenler.",
    "• Habeşistan’a hicret edenler.",
    "Habeşistan’a hicret edenler.",
    "Medine’ye hicret edenlerin.",
  ])
    assert.deepEqual(exampleSentences(heading), [], heading);
});
test("headings cannot merge into nearby prose and wrapped original sentences stay intact", () => {
  const sentence =
    "Habeşistan’a hicret edenler\nyolda metanetlerini korudular.";
  const text =
    "49 VII- HABEŞİSTAN’A HİCRET .\n" +
    sentence +
    "\nEMANETİ KORUMA\nEmaneti iyi korudu.\nHicret 49\nSonra tekrar hicret etti.";
  const examples = exampleSentences(text);
  assert.deepEqual(examples, [
    sentence,
    "Emaneti iyi korudu.",
    "Sonra tekrar hicret etti.",
  ]);
  for (const example of examples) assert.ok(text.includes(example));
});
test("capitalized prose, questions, commands and nominal sentences are not rewritten", () => {
  const examples = [
    "EMANETİ İYİ KORUDU.",
    "Bu, gerçek bir metanet.",
    "Emaneti koru!",
    "Emaneti kim korudu?",
    "Emaneti korudu.",
    "Hicret sabır gerektirir.",
    "Bugün Medine’ye hicret etti.",
  ];
  for (const sentence of examples)
    assert.deepEqual(exampleSentences(sentence), [sentence]);
});

test("contents context excludes even grammatical entries, but ordinary numbered prose remains", () => {
  const index =
    "İÇİNDEKİLER\na) Habeşistan’a hicret ettiler.\nb) Medine’ye hicret etti.";
  assert.deepEqual(exampleSentences(index), []);
  const prose = "a) Habeşistan’a hicret ettiler.";
  assert.deepEqual(exampleSentences(prose), [prose]);
  const wrapped =
    "a) Habeşistan’a hicret edenler\nyolda metanetlerini korudular.";
  assert.deepEqual(exampleSentences(wrapped), [wrapped]);
  const mixed =
    "a) Habeşistan’a hicret edenler.\nb) Medine’ye hicret edenler.\nDaha sonra Habeşistan’a hicret etti.";
  assert.deepEqual(exampleSentences(mixed), [
    "Daha sonra Habeşistan’a hicret etti.",
  ]);
});
