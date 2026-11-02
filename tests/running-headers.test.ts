import { test } from "node:test";
import assert from "node:assert/strict";
import { detectRunningHeaders } from "../lib/running-headers";
import { indexBookSource } from "../lib/book-source";
import { exampleSentences } from "../lib/example-sentences";

test("repeated page decorations are removed from display while cross-page raw spans stay exact", () => {
  const sections = [
    {
      id: 1,
      sectionNumber: 1,
      text: "Deniz Kaya\t1\nSükûnet içinde\n2\tBir Kitap\nbekledi.",
    },
    {
      id: 2,
      sectionNumber: 2,
      text: "Deniz Kaya\t3\nOrada sükûnetini korudu.\n4\tBir Kitap",
    },
    {
      id: 3,
      sectionNumber: 3,
      text: "Deniz Kaya\t5\nSükûnete ihtiyaç duydu.\n6\tBir Kitap",
    },
  ];
  const headers = detectRunningHeaders(
    sections.map((section) => section.text).join("\n"),
    false,
  );
  assert.equal(headers.size, 2);
  const word = indexBookSource(sections, false).forWord("sükûnet");
  assert.equal(word.frequency, 3);
  assert.equal(word.examples.length, 3);
  assert.equal(word.examples[0].sentence, "Sükûnet içinde\nbekledi.");
  assert.ok(word.examples[0].raw.includes("Bir Kitap"));
  for (const example of word.examples) {
    assert.ok(example.section.text.includes(example.raw));
    assert.equal(
      example.section.text.slice(
        example.start,
        example.start + example.raw.length,
      ),
      example.raw,
    );
    assert.ok(!example.sentence.includes("Deniz Kaya"));
    assert.ok(!example.sentence.includes("Bir Kitap"));
  }
});
test("justified verse and uppercase chapter subheadings do not suppress following prose", () => {
  const text = "a) YENİ BÖLÜM\nOrada\tbir\tsükûnet\ndevri başladı.";
  assert.deepEqual(exampleSentences(text), [
    "Orada\tbir\tsükûnet\ndevri başladı.",
  ]);
  const dialogue =
    "– Bunu söylerken bekledi, dedi ve\nsonra arkadaşına döndü. Ardından sükûnetini korudu.";
  assert.ok(
    exampleSentences(dialogue).some((sentence) =>
      sentence.includes("sükûnetini"),
    ),
  );
  assert.deepEqual(exampleSentences("a) Sükûnetini korudu."), []);
  assert.deepEqual(exampleSentences("Sükûnet\t622\tMedine"), []);
  assert.equal(
    detectRunningHeaders("Hicret\t622\nHicret\t623\nHicret\t624", false).size,
    0,
  );
});
