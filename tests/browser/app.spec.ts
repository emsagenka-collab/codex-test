import { readFileSync } from "node:fs";
import { test, expect } from "@playwright/test";
test("mobile import, daily lesson, persistence and all navigation", async ({
  page,
  request,
}) => {
  await request.post("/api/reset", { data: { confirm: "DELETE" } });
  await request.post("/api/settings", { data: { dailyWordCount: 2 } });
  const browserErrors: string[] = [];
  page.on("pageerror", (e) => browserErrors.push(e.message));
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(
    page.getByText("Ein Buch. Viele neue Perspektiven."),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Erst mit der Demo entdecken" })
    .click();
  await expect(page.locator("article.word-card")).toHaveCount(2);
  const original = await page.locator(".word-title h2").allTextContents();
  await page
    .locator("article")
    .first()
    .getByRole("button", { name: "Verstanden", exact: true })
    .click();
  await expect(
    page
      .locator("article")
      .first()
      .getByText(/Gespeichert · nächste/),
  ).toBeVisible();
  await page.reload();
  await expect(
    page
      .locator("article")
      .first()
      .getByText(/Gespeichert · nächste/),
  ).toBeVisible();
  expect(await page.locator(".word-title h2").allTextContents()).toEqual(
    original,
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await expect(
    page.getByText("Was passiert in diesem Abschnitt?", { exact: true }),
  ).toHaveCount(0);
  await expect(page.getByText("Wortwissen & Herkunft")).toHaveCount(2);
  await page.screenshot({ path: "/tmp/kelime-mobile.png", fullPage: true });
  await page.setViewportSize({ width: 320, height: 740 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.setViewportSize({ width: 390, height: 844 });
  await page
    .locator(".bottom-nav")
    .getByRole("button", { name: "Wörter", exact: true })
    .click();
  await expect(page.locator(".word-row")).toHaveCount(2);
  await page.getByRole("textbox", { name: "Wörter durchsuchen" }).fill("xyz");
  await expect(
    page.getByText("Noch keine Wörter in dieser Ansicht"),
  ).toBeVisible();
  await page
    .locator(".bottom-nav")
    .getByRole("button", { name: "Fortschritt", exact: true })
    .click();
  await expect(page.getByText("Kleine Schritte summieren sich.")).toBeVisible();
  await page
    .locator(".bottom-nav")
    .getByRole("button", { name: "Wiederholen", exact: true })
    .click();
  await page.getByRole("button", { name: "Ein Wort freiwillig üben" }).click();
  await page.getByRole("button", { name: "Bedeutung aufdecken" }).click();
  await page.getByRole("button", { name: "Gewusst", exact: true }).click();
  await expect(page.locator(".review-meta")).toContainText("1 in dieser Runde");
  await page.getByRole("button", { name: "Einstellungen öffnen" }).click();
  const dailyCount = page.getByRole("spinbutton", {
    name: "Tägliche neue Wörter",
  });
  await dailyCount.fill("0");
  expect(
    await dailyCount.evaluate(
      (input: HTMLInputElement) => input.validity.valid,
    ),
  ).toBe(false);
  await dailyCount.fill("5");
  await page.getByRole("button", { name: "Einstellungen speichern" }).click();
  await page
    .locator(".bottom-nav")
    .getByRole("button", { name: "Heute", exact: true })
    .click();
  await expect(page.locator("article.word-card")).toHaveCount(5);
  await expect(page.locator(".lesson-count")).toContainText("/ 5 entdeckt");
  await page.reload();
  await expect(page.locator("article.word-card")).toHaveCount(5);
  await page.getByRole("button", { name: "Einstellungen öffnen" }).click();
  await expect(dailyCount).toHaveValue("5");
  await dailyCount.fill("1");
  await page.getByRole("button", { name: "Einstellungen speichern" }).click();
  await expect(page.locator("article.word-card")).toHaveCount(1);
  await expect(
    page
      .locator("article")
      .first()
      .getByText(/Gespeichert · nächste/),
  ).toBeVisible();
  await page.getByRole("button", { name: "Einstellungen öffnen" }).click();
  await dailyCount.fill("2");
  await page.getByLabel("Darstellung").selectOption("dark");
  await page.getByRole("button", { name: "Einstellungen speichern" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Einstellungen öffnen" }).click();
  await page.getByLabel("Darstellung").selectOption("light");
  await page.getByRole("button", { name: "Einstellungen speichern" }).click();
  await page
    .locator(".bottom-nav")
    .getByRole("button", { name: "Heute", exact: true })
    .click();
  await page.setViewportSize({ width: 1440, height: 1050 });
  await expect(page.locator("article.word-card")).toHaveCount(2);
  await page.screenshot({ path: "/tmp/kelime-desktop.png", fullPage: true });
  await page.getByRole("button", { name: /Eigenen Text importieren/ }).click();
  await page.locator("input[type=file]").setInputFiles({
    name: "leer.txt",
    mimeType: "text/plain",
    buffer: Buffer.from(""),
  });
  await page.getByRole("button", { name: /Text analysieren &/ }).click();
  await expect(page.getByRole("dialog").getByRole("alert")).toContainText(
    "Kein lesbarer Text",
  );
  await page.locator("input[type=file]").setInputFiles({
    name: "mein-buch.txt",
    mimeType: "text/plain",
    buffer: Buffer.from(
      "Önemli bir karar vermeden önce arkadaşlarıyla istişare etti.\n\nBütün engellere rağmen yolunda sebat etti.",
    ),
  });
  await page.getByRole("button", { name: /Text analysieren &/ }).click();
  await expect(page.getByText("Deine Quelle:")).toBeVisible();
  await expect(page.locator(".source-footer")).toContainText("mein-buch");
  await expect(page.getByText("AUS DEM DEMOTEXT", { exact: true })).toHaveCount(
    0,
  );
  await expect(page.getByText("Ersteller:")).toContainText("Ömer Faruk Takkaç");
  const rawText =
    "Emaneti do€ru korumay› ve komflularla paylaflmay› ö€rendi.\n\nTefekkür ederken haklar›n› düflündü.";
  const legacy = await request.post("/api/import", {
    multipart: {
      file: {
        name: "alte-schrift.txt",
        mimeType: "text/plain",
        buffer: Buffer.from(rawText),
      },
    },
  });
  const legacyState = await legacy.json();
  expect(legacyState.ok).toBe(true);
  expect(
    legacyState.state.daily.find((w: { word: string }) => w.word === "emanet")
      .originalSentence,
  ).toContain("do€ru");
  await page.reload();
  await expect(
    page.locator("article").first().locator(".example-current>blockquote"),
  ).toContainText("doğru korumayı ve komşularla paylaşmayı öğrendi");
  await expect(page.getByText("PDF-Text berichtigt")).toHaveCount(0);
  await expect(page.locator(".source-repair")).toHaveCount(0);
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.getByText("Ersteller:")).toBeVisible();
  const spellingSource =
    "Emaneti korumak için herşey hazırdı.\n\nTefekkür ederken bir kaç kişi bekledi.";
  const spellingImport = await request.post("/api/import", {
    multipart: {
      file: {
        name: "schreibung.txt",
        mimeType: "text/plain",
        buffer: Buffer.from(spellingSource),
      },
    },
  });
  expect((await spellingImport.json()).ok).toBe(true);
  await page.reload();
  const firstCard = page.locator("article").first();
  await expect(page.locator(".orthography-panel")).toHaveCount(0);
  await expect(
    page.getByText("Türkische Schreibprüfung", { exact: false }),
  ).toHaveCount(0);
  await expect(firstCard.locator(".example-current>blockquote")).toContainText(
    "herşey",
  );
  const background = await (await request.get("/api/state")).json();
  const checked = background.daily.find(
    (w: { word: string }) => w.word === "emanet",
  );
  expect(checked.orthography.suggestion).toContain("her şey");
  expect(checked.orthography.issues.length).toBeGreaterThan(0);
  const splitSource =
    "Peygambe rimiz’in emaneti koruduğunu dinliyordu.\n\nTefek-\nkür ederken herşey hazırdı.";
  const joinedImport = await request.post("/api/import", {
    multipart: {
      file: {
        name: "worttrennungen.txt",
        mimeType: "text/plain",
        buffer: Buffer.from(splitSource),
      },
    },
  });
  const joinedState = await joinedImport.json();
  expect(joinedState.ok).toBe(true);
  expect(
    joinedState.state.daily.find((w: { word: string }) => w.word === "emanet")
      .sentence,
  ).toContain("Peygamberimiz’in");
  expect(
    joinedState.state.daily.find((w: { word: string }) => w.word === "tefekkür")
      .sentence,
  ).toContain("Tefekkür");
  await page.reload();
  await expect(
    page.locator("article").first().locator(".example-current>blockquote"),
  ).toContainText("Peygamberimiz’in");
  await expect(page.getByText("PDF-Text berichtigt")).toHaveCount(0);
  await expect(page.locator(".source-repair")).toHaveCount(0);
  await expect(page.locator(".orthography-panel")).toHaveCount(0);
  expect(
    (
      await request.get(
        "/api/tdk?word=" + encodeURIComponent("https://example.com"),
      )
    ).status(),
  ).toBe(400);
  const pdf = await request.post("/api/import", {
    multipart: {
      file: {
        name: "sample.pdf",
        mimeType: "application/pdf",
        buffer: readFileSync("tests/fixtures/sample.pdf"),
      },
    },
  });
  expect(await pdf.json()).toHaveProperty("ok", true);
  await request.post("/api/reset", { data: { confirm: "DELETE" } });
  const paged = await request.post("/api/import", {
    multipart: {
      file: {
        name: "zwei-seiten.pdf",
        mimeType: "application/pdf",
        buffer: readFileSync("tests/fixtures/two-pages.pdf"),
      },
    },
  });
  const pagedState = await paged.json();
  expect(pagedState.ok).toBe(true);
  await page.reload();
  const emanetCard = page.locator("article.word-card").filter({
    has: page.getByRole("heading", { name: "emanet", exact: true }),
  });
  await expect(emanetCard.locator(".source-location")).toContainText(
    "PDF-Seite 2",
  );
  await page.getByRole("button", { name: "Einstellungen öffnen" }).click();
  await expect(
    page.getByLabel("PDF-Seiten ausschließen", { exact: true }),
  ).toHaveCount(0);
  await page.getByRole("button", { name: "Dialog schließen" }).click();
  await page.setViewportSize({ width: 320, height: 740 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await request.post("/api/reset", { data: { confirm: "DELETE" } });
  const prose = "Daha sonra Habeşistan’a hicret etti.";
  const headings = await request.post("/api/import", {
    multipart: {
      file: {
        name: "überschriften.txt",
        mimeType: "text/plain",
        buffer: Buffer.from(
          "49 VII- HABEŞİSTAN’A HİCRET .\na) Habeşistan’a hicret edenler .\n›) Hicretin birinci yılının önemli olayları .\n" +
            prose +
            "\n\nMETANET VE SABIR\nMetanet ile bekledi.",
        ),
      },
    },
  });
  expect(await headings.json()).toHaveProperty("ok", true);
  await page.reload();
  const hicretCard = page.locator("article.word-card").filter({
    has: page.getByRole("heading", { name: "hicret", exact: true }),
  });
  await expect(hicretCard.locator(".example-current>blockquote")).toContainText(
    prose,
  );
  await expect(
    hicretCard.locator(".example-current>blockquote"),
  ).not.toContainText("VII-");
  await expect(
    hicretCard.locator(".example-current>blockquote"),
  ).not.toContainText("edenler");
  await expect(
    hicretCard.locator(".example-current>blockquote"),
  ).not.toContainText("olayları");
  expect(browserErrors).toEqual([]);
});

test("sentence carousel changes examples and PDF pages, keeps ratings and supports reduced motion", async ({
  page,
  request,
}) => {
  await request.post("/api/reset", { data: { confirm: "DELETE" } });
  await request.post("/api/settings", { data: { dailyWordCount: 1 } });
  const imported = await request.post("/api/import", {
    multipart: {
      file: {
        name: "beispiele.pdf",
        mimeType: "application/pdf",
        buffer: readFileSync("tests/fixtures/examples.pdf"),
      },
    },
  });
  expect(await imported.json()).toHaveProperty("ok", true);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const card = page.locator("article.word-card").first();
  const region = card.getByRole("region", { name: "Beispielsätze für emanet" });
  const next = card.getByRole("button", { name: "Nächster Beispielsatz" });
  const previous = card.getByRole("button", {
    name: "Vorheriger Beispielsatz",
  });
  await expect(card.locator(".example-count")).toHaveText("1 / 3");
  await expect(previous).toBeDisabled();
  await expect(card.locator(".example-current>blockquote")).toContainText(
    "Emaneti iyi korudu.",
  );
  await expect(card.locator(".source-location")).toContainText("PDF-Seite 1");
  await next.click();
  await expect(card.locator(".example-count")).toHaveText("2 / 3");
  await expect(card.locator(".example-current>blockquote")).toContainText(
    "Emaneti sahibine teslim etmeden evvel bir kez daha kontrol etti.",
  );
  await expect(card.locator(".source-location")).toContainText("PDF-Seite 2");
  await expect(previous).toBeEnabled();
  await expect(card.locator(".example-outgoing")).toHaveCount(0);
  await card.getByRole("button", { name: "Verstanden", exact: true }).click();
  await expect(card.getByText(/Gespeichert · nächste/)).toBeVisible();
  await expect(card.locator(".example-count")).toHaveText("2 / 3");
  await previous.click();
  await expect(card.locator(".example-count")).toHaveText("1 / 3");
  await expect(card.locator(".source-location")).toContainText("PDF-Seite 1");
  await expect(next).toBeEnabled();
  await page.setViewportSize({ width: 320, height: 740 });
  await next.click();
  await expect(previous).toBeEnabled();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: "/tmp/kelime-carousel-mobile.png",
    fullPage: true,
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await region.focus();
  await region.press("ArrowRight");
  await expect(card.locator(".example-count")).toHaveText("3 / 3");
  await expect(next).toBeDisabled();
  await expect(card.locator(".example-current>blockquote")).toContainText(
    "Emaneti korudu ve sahibine teslim etti.",
  );
  await expect(card.locator(".source-location")).toContainText("PDF-Seite 3");
  await expect(card.locator(".example-outgoing")).toHaveCount(0);
  await region.press("ArrowLeft");
  await expect(card.locator(".example-count")).toHaveText("2 / 3");
  const state = await (await request.get("/api/state")).json();
  expect(state.daily[0].reviewCount).toBe(1);
  expect(state.daily[0].examples).toHaveLength(3);
  expect(state.daily[0].frequency).toBe(4);
  await card.getByText("Wortwissen & Herkunft", { exact: true }).click();
  await expect(card.locator(".detail-content")).toContainText(
    "Im aktuellen Buch 4× erkannt",
  );
  await page.setViewportSize({ width: 1440, height: 1050 });
  await page.screenshot({
    path: "/tmp/kelime-carousel-desktop.png",
    fullPage: true,
  });
});
