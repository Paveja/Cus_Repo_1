import { test, expect, type Locator } from "playwright/test";

const baseURL = process.env.BASE_URL;
test.use({ baseURL, viewport: { width: 1280, height: 900 } });

test.beforeEach(async ({ page }) => {
  await page.route("https://**/*", async (route) => {
    const image = route.request().resourceType() === "image";
    await route.fulfill({
      contentType: image ? "image/svg+xml" : "text/css",
      body: image ? '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="180"><rect width="120" height="180" fill="#eee8f4"/></svg>' : "",
    });
  });
  await page.goto("/", { waitUntil: "domcontentloaded" });
});

async function expectVisibleFocus(link: Locator) {
  await expect(link).toBeFocused();
  const outline = await link.evaluate((element) => {
    const style = getComputedStyle(element);
    return { style: style.outlineStyle, width: parseFloat(style.outlineWidth), color: style.outlineColor };
  });
  expect(outline.style).toBe("solid");
  expect(outline.width).toBeGreaterThanOrEqual(2);
  expect(outline.color).not.toBe("rgba(0, 0, 0, 0)");
}

test("skip link is the first keyboard stop and reaches main content", async ({ page }) => {
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to books", exact: true });
  await expectVisibleFocus(skip);
  await expect(skip).toBeInViewport();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeInViewport();
});

test("links have logical keyboard order, visible focus, and working internal activation", async ({ page }) => {
  const links = await page.getByRole("link").all();
  for (const link of links) {
    await page.keyboard.press("Tab");
    await expectVisibleFocus(link);
  }
  for (const link of links) {
    const href = await link.getAttribute("href");
    if (!href?.startsWith("#")) continue;
    await link.focus();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(new RegExp(`${href}$`));
  }
});

test("book covers lift on hover", async ({ page }) => {
  const card = page.getByRole("article").filter({ has: page.getByRole("heading", { name: "The Invisible Life of Addie LaRue", exact: true }) });
  const cover = card.getByRole("img");
  await expect(cover).toHaveCSS("transform", "none");
  await cover.hover();
  await expect.poll(() => cover.evaluate((element) => new DOMMatrixReadOnly(getComputedStyle(element).transform).m42)).toBeLessThan(0);
});

test("reduced motion disables smooth scrolling and cover transitions", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const cover = page.getByRole("img", { name: "The Invisible Life of Addie LaRue book cover", exact: true });
  await expect(cover).toHaveCSS("transition-duration", "0s");
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe("auto");
});

test("representative text on solid backgrounds meets AA contrast", async ({ page }) => {
  const targets = [
    page.getByRole("heading", { level: 1 }),
    page.getByRole("region", { name: "Follow your imagination" }).getByText("Thoughtfully gathered. Ready to sweep you away.", { exact: true }),
    page.getByRole("link", { name: "Find your next chapter", exact: true }),
    page.getByRole("navigation", { name: "Browse by category" }).getByRole("link", { name: "Fantasy", exact: true }),
    page.getByRole("article").filter({ has: page.getByRole("heading", { name: "The Midnight Library", exact: true }) }).getByText("Matt Haig", { exact: true }),
    page.getByRole("article").filter({ has: page.getByRole("heading", { name: "The Midnight Library", exact: true }) }).getByText("$18.00", { exact: true }),
  ];
  for (const target of targets) {
    const result = await target.evaluate((element) => {
      const style = getComputedStyle(element);
      let ancestor: Element | null = element;
      let background = "";
      while (ancestor) {
        const current = getComputedStyle(ancestor);
        if (current.backgroundImage !== "none") throw new Error("Gradient requires separate pixel-based analysis");
        if (current.backgroundColor !== "rgba(0, 0, 0, 0)") {
          background = current.backgroundColor;
          break;
        }
        ancestor = ancestor.parentElement;
      }
      const luminance = (color: string) => {
        const channels = (color.match(/[\d.]+/g) ?? []).slice(0, 3).map(Number);
        if (channels.length !== 3) throw new Error(`Unsupported computed color: ${color}`);
        const linear = channels.map((value) => {
          const normalized = value / 255;
          return normalized <= 0.04045 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
        });
        return linear.reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index]!, 0);
      };
      const foregroundLuminance = luminance(style.color);
      const backgroundLuminance = luminance(background);
      const ratio = (Math.max(foregroundLuminance, backgroundLuminance) + 0.05) / (Math.min(foregroundLuminance, backgroundLuminance) + 0.05);
      const size = parseFloat(style.fontSize);
      const large = size >= 24 || (size >= 18.6667 && Number(style.fontWeight) >= 700);
      return { ratio, minimum: large ? 3 : 4.5, foreground: style.color, background };
    });
    expect(result.ratio, JSON.stringify(result)).toBeGreaterThanOrEqual(result.minimum);
  }
});
