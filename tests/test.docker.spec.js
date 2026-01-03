import { test, expect } from "@playwright/test";

test("Simple Demo Test", async ({ page }) => {
  await page.goto("https://example.com");
  const title = await page.title();
  expect(title).toBe("Example Domain");
});
