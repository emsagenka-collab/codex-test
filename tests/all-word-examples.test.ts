import { test } from "node:test";
import assert from "node:assert/strict";
import { indexBookSource } from "../lib/book-source";
import { learningLexicon } from "../lib/lexicon";
import { exampleSentences } from "../lib/example-sentences";
import { sentences } from "../lib/learning";

test("every dictionary word receives all suitable prose examples, including dialogue, abbreviations and word wraps", () => {
  for (const { word } of learningLexicon) {
    const breakAt = Math.max(1, Math.floor(word.length / 2));
    const split = `${word.slice(0, breakAt)}-\n${word.slice(breakAt)}`;
    const texts = [
      `a) ${word.toLocaleUpperCase("tr-TR")}\nHz. Deniz, ${word} hakkında konuştu.`,
      `Ece şöyle dedi:\n– “Bugün ${word} hakkında\nkonuşacağız,” dedi.`,
      `a) TOPLANANLAR VE YAHUDİLER\nBİRLEŞİYOR:\nO gün ${split} hakkında uzun uzun düşündü.`,
      `O gün ${word} hakkında konuştu mu?`,
      `• ${word}.\n\na) ${word}.`,
    ];
    const index = indexBookSource(
      texts.map((text, i) => ({ id: i + 1, sectionNumber: i + 1, text })),
      false,
    );
    const result = index.forWord(word);
    assert.equal(result.examples.length, 4, word);
    assert.equal(result.frequency, 7, word);
    assert.ok(
      result.examples.every((example) =>
        example.section.text.includes(example.raw),
      ),
      word,
    );
    assert.ok(
      result.examples.every((example) => !example.sentence.includes("-\n")),
      word,
    );
    assert.match(result.examples[0].sentence, /^Hz\. Deniz,/u);
  }
});

test("quoted dialogue and wrapped suffixes do not suppress the following prose", () => {
  const raw =
    "Öğretmen ona:\n– “Sakin ol,” dedi.\nSevincini gizle-\ndi. Ardından merhamet hakkında\nkonuştu.\n– Metanetini koru.\nYeni bir kitap okudu.";
  const result = exampleSentences(raw);
  assert.ok(
    result.some((sentence) => sentence.includes("merhamet hakkında\nkonuştu.")),
  );
  // An unintroduced dash remains a list item.
  assert.ok(!result.some((sentence) => sentence.includes("Metanetini koru")));
});

test("Turkish abbreviations, ordinals and numbers preserve complete, exact source spans", () => {
  const quotes = [
    "Hz. Deniz, fedakârlık hakkında konuştu.",
    "O, hicretin II. yılında 3.000 kişiyle görüştü.",
    "Hicretin II. Yılında herkes bir araya geldi.",
    "Hicretin 8. yılında geri döndü.",
    "O gün evde idi.",
    "Hz. Deniz (s.a.s.) hakkında konuştu.",
  ];
  const text = quotes.join(" ");
  assert.deepEqual(sentences(text), quotes);
  assert.deepEqual(exampleSentences(text), quotes);
});

test("thousands and decimals at the start of prose are not numbered lists", () => {
  for (const sentence of [
    "10.000 kişi merhamet hakkında konuştu.",
    "3.5 saat boyunca metanetini korudu.",
  ])
    assert.deepEqual(exampleSentences(sentence), [sentence]);
  assert.deepEqual(exampleSentences("1. Merhamet hakkında konuştu."), []);
  assert.deepEqual(
    exampleSentences("a) METANETİNİ KORUDU.\nyoluna devam etti."),
    [],
  );
});
