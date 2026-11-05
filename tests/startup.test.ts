import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";

const { openWhenReady } = createRequire(import.meta.url)(
  "../scripts/open-browser.cjs",
);

test("browser startup waits for the lightweight Kelime health response without loading book state", async () => {
  let requests = 0;
  let opened = 0;
  let waits = 0;
  const ready = await openWhenReady({
    request: async (url: string) => {
      assert.equal(url, "http://localhost:3000/api/health");
      requests++;
      if (requests === 1) throw new Error("Server is still starting");
      if (requests === 2) return Response.json({ ready: true });
      if (requests === 3) return Response.json({ app: "kelime", ready: false });
      return Response.json({ app: "kelime", ready: true });
    },
    open: () => opened++,
    wait: async () => waits++,
    attempts: 5,
  });
  assert.equal(ready, true);
  assert.equal(requests, 4);
  assert.equal(waits, 3);
  assert.equal(opened, 1);
});

test("an unavailable server leaves manual startup instructions and never opens an unrelated service", async (t) => {
  const log = t.mock.method(console, "log", () => {});
  let opened = 0;
  const ready = await openWhenReady({
    request: async () =>
      Response.json({ error: "Unavailable" }, { status: 503 }),
    open: () => opened++,
    wait: async () => {},
    attempts: 2,
  });
  assert.equal(ready, false);
  assert.equal(opened, 0);
  assert.match(
    String(log.mock.calls[0].arguments[0]),
    /http:\/\/localhost:3000/,
  );
});
