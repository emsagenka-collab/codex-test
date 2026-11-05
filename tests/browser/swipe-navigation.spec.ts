import { test } from "@playwright/test";
import { checkMobileNavigation } from "./mobile-navigation-checks";

test.use({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});

test("mobile swipes follow category order without interfering with scroll, controls or review translations", async ({
  page,
}) => {
  await page.goto("/");
  await checkMobileNavigation(page);
});
