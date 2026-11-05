import { test } from "node:test";
import assert from "node:assert/strict";
import { checkTurkishOrthography } from "../lib/orthography";
test("standard separate and compound spellings have explanations and exact offsets", () => {
  const original =
    "Herşeyi bir kaç kişi anlattı; pekçok şey ve hiç bir sorun kalmadı.";
  const result = checkTurkishOrthography(original);
  assert.equal(
    result.suggestion,
    "Her şeyi birkaç kişi anlattı; pek çok şey ve hiçbir sorun kalmadı.",
  );
  assert.equal(
    original,
    "Herşeyi bir kaç kişi anlattı; pekçok şey ve hiç bir sorun kalmadı.",
  );
  assert.equal(result.issues.length, 4);
  for (const issue of result.issues) {
    assert.equal(original.slice(issue.start, issue.end), issue.original);
    assert.ok(issue.explanation);
    assert.match(issue.source, /^https:\/\/(tdk|sozluk)\.gov\.tr\//);
  }
  assert.equal(checkTurkishOrthography(result.suggestion).issues.length, 0);
});
test("Turkish casing, multiple faults and suggestions remain stable", () => {
  assert.equal(
    checkTurkishOrthography("HİÇ BİRŞEY ve HERŞEY YALNIŞ.").suggestion,
    "HİÇBİR ŞEY ve HER ŞEY YANLIŞ.",
  );
  assert.equal(
    checkTurkishOrthography("Hiç birşey, orjinal, süpriz, şöför.").suggestion,
    "Hiçbir şey, orijinal, sürpriz, şoför.",
  );
});
test("correct text, historical words, word boundaries and context-dependent rules are preserved", () => {
  for (const text of [
    "Her şey, bir şey, birkaç, birçok ve pek çok.",
    "İstanbul’da tefekkür, sükûnet ve fedakârlık.",
    "Ben de geldim. Evde kaldım. Dedi ki buradaki kişi kim?",
    "Geldi mi, gelmedi mi?",
    "meşherşey, bir kaçıncı, orjinaller",
    "bir\n\nkaç satır",
  ])
    assert.equal(checkTurkishOrthography(text).suggestion, text);
});
