import { test, expect } from "@playwright/test";

test("library deletion requires confirmation and handles inactive, active and last books", async ({
  page,
  request,
}) => {
  await request.post("/api/reset", { data: { confirm: "DELETE" } });
  const texts = [
    "Emaneti iyi korudu. Metanet ile bekledi.",
    "Hicret hakkında konuştu. Harp hakkında düşündü.",
    "Şefkat gösterdi. Merhamet gösterdi.",
  ];
  const ids: number[] = [];
  for (let i = 0; i < texts.length; i++) {
    const response = await request.post("/api/import", {
      multipart: {
        file: {
          name: `Buch ${i + 1}.txt`,
          mimeType: "text/plain",
          buffer: Buffer.from(texts[i]),
        },
        level: "B2",
      },
    });
    const json = await response.json();
    expect(json.ok).toBe(true);
    ids.push(json.state.book.id);
  }
  expect(
    (await request.post("/api/delete-book", { data: { id: ids[0] } })).status(),
  ).toBe(400);
  expect(
    (
      await request.post("/api/delete-book", {
        data: { id: 999999, confirm: "DELETE" },
      })
    ).status(),
  ).toBe(400);
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto("/");
  await page
    .locator(".bottom-nav")
    .getByRole("button", { name: "Bibliothek", exact: true })
    .click();
  await expect(page.locator(".library-book")).toHaveCount(3);
  await page
    .getByRole("button", { name: "Buch „Buch 1“ löschen", exact: true })
    .click();
  const dialog = page.getByRole("dialog", { name: "Buch löschen?" });
  await expect(dialog).toContainText("„Buch 1“");
  await expect(dialog.getByRole("button", { name: "Abbrechen" })).toBeFocused();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await dialog.getByRole("button", { name: "Abbrechen" }).click();
  await expect(dialog).toHaveCount(0);
  await expect(page.locator(".library-book")).toHaveCount(3);
  await page
    .getByRole("button", { name: "Buch „Buch 1“ löschen", exact: true })
    .click();
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(page.locator(".library-book")).toHaveCount(3);
  for (const [title, remaining, active] of [
    ["Buch 1", 2, "Buch 3"],
    ["Buch 3", 1, "Buch 2"],
    ["Buch 2", 0, null],
  ] as const) {
    await page
      .getByRole("button", { name: `Buch „${title}“ löschen`, exact: true })
      .click();
    await dialog
      .getByRole("button", { name: "Buch endgültig löschen", exact: true })
      .click();
    await expect(dialog).toHaveCount(0);
    await expect(page.locator(".library-book")).toHaveCount(remaining);
    if (active)
      await expect(page.locator(".library-book.is-active h2")).toHaveText(
        active,
      );
  }
  await expect(page.getByText("Hier beginnt deine Bibliothek.")).toBeVisible();
  await page.reload();
  await page
    .locator(".bottom-nav")
    .getByRole("button", { name: "Bibliothek", exact: true })
    .click();
  await expect(page.getByText("Hier beginnt deine Bibliothek.")).toBeVisible();
  const backup = await (await request.get("/api/export")).json();
  expect(backup.books).toEqual([]);
  expect(backup.sections).toEqual([]);
  expect(backup.occurrences).toEqual([]);
});
