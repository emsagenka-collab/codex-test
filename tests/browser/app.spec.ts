import { readFileSync } from "node:fs";
import { test, expect } from "@playwright/test";
test("mobile import, daily lesson, persistence and all navigation", async ({
  page,
  request,
}) => {
  await request.post("/api/reset", { data: { confirm: "DELETE" } });
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
  await page
    .locator("article")
    .first()
    .getByText("Was passiert in diesem Abschnitt?", { exact: true })
    .click();
  await expect(
    page.locator("article").first().getByText("Originalabschnitt lesen"),
  ).toBeVisible();
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
  await page
    .locator("input[type=file]")
    .setInputFiles({
      name: "leer.txt",
      mimeType: "text/plain",
      buffer: Buffer.from(""),
    });
  await page.getByRole("button", { name: /Text analysieren &/ }).click();
  await expect(page.getByRole("dialog").getByRole("alert")).toContainText(
    "Kein lesbarer Text",
  );
  await page
    .locator("input[type=file]")
    .setInputFiles({
      name: "mein-buch.txt",
      mimeType: "text/plain",
      buffer: Buffer.from(
        "Önemli bir karar vermeden önce arkadaşlarıyla istişare etti.\n\nBütün engellere rağmen yolunda sebat etti.",
      ),
    });
  await page.getByRole("button", { name: /Text analysieren &/ }).click();
  await expect(page.getByText("Deine Quelle:")).toBeVisible();
  await expect(page.locator(".source-footer")).toContainText("mein-buch");
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
  expect(browserErrors).toEqual([]);
});
