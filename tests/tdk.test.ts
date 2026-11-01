import { test } from "node:test";
import assert from "node:assert/strict";
import { lookupTdk } from "../lib/tdk";
function mock(payload: unknown, status = 200): typeof fetch {
  return (async () =>
    new Response(JSON.stringify(payload), {
      status,
      headers: { "Content-Type": "application/json" },
    })) as typeof fetch;
}
test("current dictionary response reports actual returned spelling without altering the query", async () => {
  let requested = "";
  const fetcher = (async (url: unknown) => {
    requested = String(url);
    return new Response(
      JSON.stringify([{ madde: "şoför" }, { madde: "şoför" }]),
    );
  }) as typeof fetch;
  const result = await lookupTdk("şöför", fetcher);
  assert.equal(result.status, "listed");
  assert.deepEqual(result.spellings, ["şoför"]);
  assert.equal(result.word, "şöför");
  assert.equal(
    requested,
    "https://sozluk.gov.tr/gts?ara=" + encodeURIComponent("şöför"),
  );
  assert.ok(result.checkedAt);
});
test("missing historical words are not declared spelling errors", async () => {
  const result = await lookupTdk(
    "tefekkür",
    mock({ error: "Sonuç bulunamadı" }),
  );
  assert.equal(result.status, "not-listed");
  assert.match(result.message, /beweist keinen Schreibfehler/);
});
test("network failure, malformed data and empty responses never count as a dictionary confirmation", async () => {
  for (const fetcher of [
    mock({}, 200),
    mock("<html>blocked</html>"),
    mock([{ unexpected: "no word" }]),
    mock([], 200),
    mock({}, 403),
    (async () => {
      throw new Error("offline");
    }) as typeof fetch,
  ]) {
    const result = await lookupTdk("metanet", fetcher);
    assert.equal(result.status, "unavailable");
    assert.deepEqual(result.spellings, []);
  }
});
test("dictionary lookup accepts only bounded word queries to the fixed official destination", async () => {
  for (const word of ["", "https://example.com", "a".repeat(81), "word\nword"])
    await assert.rejects(() => lookupTdk(word, mock([])));
});
