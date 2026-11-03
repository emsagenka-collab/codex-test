import { test } from "node:test";
import assert from "node:assert/strict";
import { isKnownTurkishWordForm } from "../lib/turkish-word-forms";

test("the offline inventory validates only listed stems and their explicitly assigned endings", () => {
  for (const word of [
    "beraberdi",
    "BERABERDİ",
    "gösteriyor",
    "gösterilmişti",
    "bayrağını",
    "verdikleri",
    "bilinmeyen",
    "âlemini",
  ])
    assert.equal(isKnownTurkishWordForm(word), true, word);
  for (const word of [
    "",
    "qzxvler",
    "beraberxyz",
    "beraberlar",
    "bayrağün",
    "gösteriyorxyz",
    "her şey",
    "Türk-Alman",
    "gösteri123",
    "a".repeat(100),
  ])
    assert.equal(isKnownTurkishWordForm(word), false, word);
});
