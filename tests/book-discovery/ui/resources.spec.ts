import { test, expect } from "playwright/test";

const baseURL = process.env.BASE_URL;
test.use({ baseURL, viewport: { width: 1280, height: 900 } });

const authors = ["V. E. Schwab", "Matt Haig", "Emily Henry", "Alex Michaelides", "Erin Morgenstern", "TJ Klune", "Susanna Clarke", "Mary Oliver"];
const placeholder = '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="180"><rect width="120" height="180" fill="#eee8f4"/></svg>';

test("real images and font families load without browser errors", async ({ page }) => {
  const failures: string[] = [];
  const pageErrors: string[] = [];
  page.on("requestfailed", (request) => failures.push(`${request.url()} ${request.failure()?.errorText ?? "unknown failure"}`));
  page.on("response", (response) => {
    if (response.status() >= 400) failures.push(`${response.status()} ${response.url()}`);
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") pageErrors.push(message.text());
  });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  // index.html:55 and each cover <img>: inspect native image properties,
  // including the decorative hero image excluded from the accessible image roles.
  const images = page.locator("img");
  await expect(images).toHaveCount(9);
  for (const image of await images.all()) await image.scrollIntoViewIfNeeded();
  await expect.poll(async () => ({
    images: await images.evaluateAll((elements) => elements.map((element) => ({
      source: element.getAttribute("src"),
      loaded: element instanceof HTMLImageElement && element.complete && element.naturalWidth > 1 && element.naturalHeight > 1,
    })).filter((image) => !image.loaded)),
    fonts: await page.evaluate(() => {
      const loaded = Array.from(document.fonts).filter((font) => font.status === "loaded").map((font) => font.family.replace(/["']/g, ""));
      return ["Cormorant Garamond", "DM Sans"].filter((family) => !loaded.includes(family));
    }),
    failures: [...failures],
    pageErrors: [...pageErrors],
  }), { timeout: 30000 }).toEqual({ images: [], fonts: [], failures: [], pageErrors: [] });
});

test("blocked images preserve readable books and reserved cover slots", async ({ page }) => {
  await page.route("https://**/*", async (route) => {
    if (route.request().resourceType() === "image") await route.abort("failed");
    else await route.fulfill({ contentType: "text/css", body: "" });
  });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const cards = page.getByRole("article");
  await expect(cards).toHaveCount(8);
  for (const [index, card] of (await cards.all()).entries()) {
    await expect(card.getByRole("heading", { level: 3 })).toBeVisible();
    const author = authors[index];
    if (!author) throw new Error("Missing source-derived author fixture");
    await expect(card.getByText(author, { exact: true })).toBeVisible();
    await expect(card.getByText(/^\$\d+\.\d{2}$/)).toBeVisible();
    const cover = card.getByRole("img");
    await cover.scrollIntoViewIfNeeded();
    await expect(cover).toHaveAccessibleName(/book cover$/);
    await expect.poll(() => cover.evaluate((element) => element instanceof HTMLImageElement && element.complete && element.naturalWidth === 0)).toBe(true);
    const fallback = await cover.evaluate((element) => {
      const style = getComputedStyle(element);
      const rectangle = element.getBoundingClientRect();
      return { width: rectangle.width, height: rectangle.height, background: style.backgroundColor, color: style.color };
    });
    expect(fallback.width).toBeGreaterThan(0);
    expect(fallback.height).toBeGreaterThan(0);
    expect(fallback.background).not.toBe("rgba(0, 0, 0, 0)");
    expect(fallback.color).not.toBe(fallback.background);
  }
  await page.getByRole("navigation", { name: "Browse by category" }).getByRole("link", { name: "Poetry", exact: true }).click();
  await expect(page).toHaveURL(/#poetry$/);
  await expect(page.getByRole("heading", { name: "Devotions", exact: true })).toBeInViewport();
});

test("blocked external fonts leave readable text and working navigation", async ({ page }) => {
  await page.route("https://**/*", async (route) => {
    if (route.request().resourceType() === "image") await route.fulfill({ contentType: "image/svg+xml", body: placeholder });
    else await route.abort("failed");
  });
  await page.goto("/", { waitUntil: "load" });
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  expect(await page.evaluate(() => Array.from(document.fonts).length)).toBe(0);
  const dimensions = await page.evaluate(() => ({
    content: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth,
  }));
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
  for (const card of await page.getByRole("article").all()) await expect(card.getByRole("heading", { level: 3 })).toBeVisible();
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Staff Picks", exact: true }).click();
  await expect(page).toHaveURL(/#staff-picks$/);
  await expect(page.getByRole("heading", { name: "Staff Picks", exact: true })).toBeInViewport();
});
