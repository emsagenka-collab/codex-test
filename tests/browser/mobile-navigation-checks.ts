import { expect, type Page } from "@playwright/test";

export async function checkMobileNavigation(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.evaluate(async () => {
    await fetch("/api/reset", {
      method: "POST",
      body: JSON.stringify({ confirm: "DELETE" }),
    });
    await fetch("/api/settings", {
      method: "POST",
      body: JSON.stringify({ dailyWordCount: 2, level: "B2" }),
    });
    const form = new FormData();
    form.append(
      "file",
      new File(
        [
          "Emaneti iyi korudu.\n\nEmaneti sahibine teslim etti.\n\nHarp sırasında bekledi.",
        ],
        "Wischbuch.txt",
      ),
    );
    form.append("level", "B2");
    const result = await (
      await fetch("/api/import", { method: "POST", body: form })
    ).json();
    if (!result.ok) throw new Error(result.error);
    await fetch("/api/rate", {
      method: "POST",
      body: JSON.stringify({ id: result.state.daily[0].id, rating: "hard" }),
    });
  });
  await page.reload();
  await expect(page.locator("article.word-card")).toHaveCount(2);
  const session = await page.context().newCDPSession(page);
  async function swipe(x1 = 75, y1 = 160, x2 = 285, y2 = 160) {
    await session.send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: [{ x: x1, y: y1 }],
    });
    for (let i = 1; i <= 6; i++)
      await session.send("Input.dispatchTouchEvent", {
        type: "touchMove",
        touchPoints: [
          { x: x1 + ((x2 - x1) * i) / 6, y: y1 + ((y2 - y1) * i) / 6 },
        ],
      });
    await session.send("Input.dispatchTouchEvent", {
      type: "touchEnd",
      touchPoints: [],
    });
  }
  const active = page.locator(".bottom-nav button.active");
  async function tab(label: string) {
    await page
      .locator(".bottom-nav")
      .getByRole("button", { name: label, exact: true })
      .click();
    await expect(active).toHaveText(label);
  }
  await swipe();
  await expect(active).toHaveText("Wiederholen");
  await page.getByRole("button", { name: "Ein Wort freiwillig üben" }).click();
  await page.getByRole("button", { name: "Bedeutung aufdecken" }).click();
  await expect(page.locator(".flashcard blockquote")).toBeVisible();
  await expect(page.locator(".flashcard")).not.toContainText(
    /Für diesen Originalsatz/iu,
  );
  for (const label of ["Wörter", "Bibliothek", "Fortschritt"]) {
    await swipe();
    await expect(active).toHaveText(label);
  }
  await swipe();
  await expect(active).toHaveText("Fortschritt");
  for (const label of ["Bibliothek", "Wörter", "Wiederholen", "Heute"]) {
    await swipe(285, 160, 75, 160);
    await expect(active).toHaveText(label);
  }
  await swipe(285, 160, 75, 160);
  await expect(active).toHaveText("Heute");
  await swipe(75, 160, 105, 160);
  await expect(active).toHaveText("Heute");
  await swipe(75, 320, 80, 150);
  await expect(active).toHaveText("Heute");
  expect(await page.evaluate(() => scrollY)).toBeGreaterThan(0);
  await page.evaluate(() => scrollTo(0, 0));
  // Gestures within the sentence carousel must not switch categories.
  const quote = page.locator(".example blockquote").first();
  await quote.scrollIntoViewIfNeeded();
  const box = (await quote.boundingBox())!;
  await swipe(75, box.y + box.height / 2, 285, box.y + box.height / 2);
  await expect(active).toHaveText("Heute");
  await page.evaluate(() => scrollTo(0, 0));
  await page.getByRole("button", { name: "Einstellungen öffnen" }).click();
  await swipe(75, 260, 285, 260);
  await expect(active).toHaveText("Heute");
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("button", { name: "Dialog schließen" }).click();
  await tab("Wörter");
  const search = page.getByLabel("Wörter durchsuchen");
  const searchBox = (await search.boundingBox())!;
  await swipe(
    75,
    searchBox.y + searchBox.height / 2,
    285,
    searchBox.y + searchBox.height / 2,
  );
  await expect(active).toHaveText("Wörter");
  await tab("Heute");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await swipe();
  await expect(active).toHaveText("Wiederholen");
  expect(
    await page
      .locator(".tab-content")
      .evaluate((e) => e.getAnimations().length),
  ).toBe(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.setViewportSize({ width: 1280, height: 900 });
  await swipe(285, 160, 75, 160);
  await expect(active).toHaveText("Wiederholen");
  await page.setViewportSize({ width: 390, height: 844 });
  // A real demo translation is retained when the card is revealed.
  const translation = await page.evaluate(async () => {
    await fetch("/api/reset", {
      method: "POST",
      body: JSON.stringify({ confirm: "DELETE" }),
    });
    const data = await (await fetch("/api/demo", { method: "POST" })).json();
    const word = data.state.daily[0];
    await fetch("/api/rate", {
      method: "POST",
      body: JSON.stringify({ id: word.id, rating: "hard" }),
    });
    return word.sentenceTranslation as string;
  });
  expect(translation).toBeTruthy();
  await page.reload();
  await tab("Wiederholen");
  await page.getByRole("button", { name: "Ein Wort freiwillig üben" }).click();
  await page.getByRole("button", { name: "Bedeutung aufdecken" }).click();
  await expect(page.locator(".flashcard")).toContainText(translation);
  expect(errors).toEqual([]);
  await session.detach();
}
