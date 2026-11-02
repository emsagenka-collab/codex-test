import { test } from "node:test";
import assert from "node:assert/strict";
import {
  addDays,
  containsWord,
  dayKey,
  matches,
  schedule,
  splitSections,
} from "../lib/learning";
test("Berlin calendar changes at local midnight, including DST", () => {
  assert.equal(dayKey(new Date("2026-11-01T22:59:59Z")), "2026-11-01");
  assert.equal(dayKey(new Date("2026-11-01T23:00:00Z")), "2026-11-02");
  assert.equal(dayKey(new Date("2026-07-01T22:00:00Z")), "2026-07-02");
  assert.equal(addDays("2026-12-31", 1), "2027-01-01");
});
test("Turkish characters and attested inflections match without arbitrary substrings", () => {
  assert.ok(matches("TEFEKKÜRE", "tefekkür"));
  assert.ok(containsWord("Müjdeyi duyunca sevindi.", "müjde"));
  assert.ok(containsWord("Sükûnetini korudu.", "sükûnet"));
  assert.equal(containsWord("Merhametsiz davranma.", "merhamet"), false);
  assert.equal(containsWord("metanetli", "metanet"), false);
});
test("sections preserve source sentences and order", () => {
  const text =
    "Birinci cümle burada. İkinci cümle burada!\n\nYeni bir bölüm başlıyor.";
  const parts = splitSections(text);
  assert.equal(parts.length, 2);
  parts.forEach((s) => assert.ok(text.includes(s)));
});
test("difficult and uncertain words return before understood words", () => {
  assert.equal(schedule("hard", 0, "2026-11-01").nextReview, "2026-11-02");
  assert.equal(schedule("unsure", 0, "2026-11-01").nextReview, "2026-11-03");
  assert.equal(
    schedule("understood", 0, "2026-11-01").nextReview,
    "2026-11-05",
  );
  assert.equal(schedule("good", 2, "2026-11-01").nextReview, "2026-11-13");
  assert.throws(() => schedule("invalid", 0, "2026-11-01"));
});

test("short source paragraphs are retained even though they are not sentence examples", () => {
  assert.deepEqual(
    splitSections("TEFEKKÜR\n\nTefekkür ederken sessizce düşündü."),
    ["TEFEKKÜR", "Tefekkür ederken sessizce düşündü."],
  );
});
