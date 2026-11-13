import { test, expect, devices } from "playwright/test";

const baseURL = process.env.BASE_URL;
test.use({ baseURL, ...devices["Pixel 7"] });

const widths = [320, 390, 639, 640, 641, 767, 768, 769, 1023, 1024, 1025, 1280];

for (const width of widths) {
  test(`discovery layout fits a ${width}px viewport`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.route("https://**/*", async (route) => {
      const image = route.request().resourceType() === "image";
      await route.fulfill({
        contentType: image ? "image/svg+xml" : "text/css",
        body: image ? '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="180"><rect width="120" height="180" fill="#eee8f4"/></svg>' : "",
      });
    });
    await page.goto("/", { waitUntil: "load" });
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
      body: document.body.scrollWidth,
    }));
    expect(dimensions.document).toBeLessThanOrEqual(dimensions.viewport);
    expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport);
    const cards = page.getByRole("article");
    await expect(cards).toHaveCount(8);
    for (const card of await cards.all()) {
      const title = card.getByRole("heading", { level: 3 });
      await expect(title).toBeVisible();
      const bounds = await title.boundingBox();
      if (!bounds) throw new Error("Visible book title has no layout box");
      expect(bounds.x).toBeGreaterThanOrEqual(0);
      expect(bounds.x + bounds.width).toBeLessThanOrEqual(width);
      await expect(card.getByText(/^\$\d+\.\d{2}$/)).toBeVisible();
      const cover = await card.getByRole("img").boundingBox();
      if (!cover) throw new Error("Book cover slot has no layout box");
      expect(cover.width).toBeGreaterThan(0);
      expect(cover.x).toBeGreaterThanOrEqual(0);
      expect(cover.x + cover.width).toBeLessThanOrEqual(width);
    }
    await expect(page.getByRole("heading", { name: "Bestsellers", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Staff Picks", exact: true })).toBeVisible();
  });
}
