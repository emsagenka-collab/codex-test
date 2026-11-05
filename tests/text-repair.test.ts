import { test } from "node:test";
import assert from "node:assert/strict";
import { hasLegacyTurkishGlyphs, repairTurkishText } from "../lib/text-repair";
test("screenshot-style legacy glyphs restore Turkish characters", () => {
  const raw =
    "Bize do€ru söylemeyi, emaneti gözetmeyi, akraba-l›k haklar›n› korumay›, komﬂularla güzel geçinmeyi bildiriyor. ﬁerhinde ﬂöyle denir: etti€i, oldu€unu.";
  assert.equal(
    repairTurkishText(raw),
    "Bize doğru söylemeyi, emaneti gözetmeyi, akraba-lık haklarını korumayı, komşularla güzel geçinmeyi bildiriyor. Şerhinde şöyle denir: ettiği, olduğunu.",
  );
  assert.equal(
    repairTurkishText(repairTurkishText(raw)),
    repairTurkishText(raw),
  );
});
test("real Turkish, quotations, currencies and unrelated ligatures stay unchanged", () => {
  for (const text of [
    "ç ğ ı İ ö ş ü Ömer Faruk Takkaç",
    "Der Preis beträgt 20 €.",
    "Er sagt: ‹Merhaba›.",
    "ﬂower and ﬁne typography",
    "Öğrenci doğruyu söyledi.",
  ])
    assert.equal(repairTurkishText(text), text);
  assert.equal(
    repairTurkishText("do€ru · 20 € · ‹Merhaba›"),
    "doğru · 20 € · ‹Merhaba›",
  );
});
test("whole-book detection repairs a sentence with only a trailing glyph", () => {
  assert.equal(hasLegacyTurkishGlyphs("haklar›n›"), true);
  assert.equal(repairTurkishText("korumay›", true), "korumayı");
  assert.equal(repairTurkishText("„hallo›“"), "„hallo›“");
});

test("already-imported PDF.js-normalized ligatures are repaired without damaging genuine fl", () => {
  assert.equal(
    repairTurkishText(
      "do€ru komflularla flöyle düflündü ve fierhinde yazd›; iflas, flört ve fiyat aynı.",
    ),
    "doğru komşularla şöyle düşündü ve Şerhinde yazdı; iflas, flört ve fiyat aynı.",
  );
});
