import { test, expect } from "playwright/test";

const baseURL = process.env.BASE_URL;
test.use({ baseURL, viewport: { width: 1280, height: 900 } });

const books = [
  { title: "The Invisible Life of Addie LaRue", author: "V. E. Schwab", price: "$19.99" },
  { title: "The Midnight Library", author: "Matt Haig", price: "$18.00" },
  { title: "Book Lovers", author: "Emily Henry", price: "$17.00" },
  { title: "The Silent Patient", author: "Alex Michaelides", price: "$17.99" },
  { title: "The Night Circus", author: "Erin Morgenstern", price: "$17.00" },
  { title: "The House in the Cerulean Sea", author: "TJ Klune", price: "$18.99" },
  { title: "Piranesi", author: "Susanna Clarke", price: "$17.00" },
  { title: "Devotions", author: "Mary Oliver", price: "$20.00" },
];

const recommendations = [
  { name: /^Midnight Reads/, hash: "midnight-reads", title: "The Night Circus", collection: true },
  { name: /^Dreamy Escapes/, hash: "dreamy-escapes", title: "The House in the Cerulean Sea", collection: true },
  { name: /^Stories to Get Lost In/, hash: "stories-to-get-lost-in", title: "Piranesi", collection: true },
  { name: "Fantasy", hash: "fantasy", title: "The Invisible Life of Addie LaRue", collection: false },
  { name: "Romance", hash: "romance", title: "Book Lovers", collection: false },
  { name: "Mystery", hash: "mystery", title: "The Silent Patient", collection: false },
  { name: "Fiction", hash: "fiction", title: "The Midnight Library", collection: false },
  { name: "Poetry", hash: "poetry", title: "Devotions", collection: false },
];

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

test("renders the complete book discovery content", async ({ page }) => {
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Somewhere, a storyis waiting for you.");
  const collections = page.getByRole("region", { name: "Follow your imagination" });
  await expect(collections.getByRole("link")).toHaveCount(3);
  const categories = page.getByRole("navigation", { name: "Browse by category" });
  await expect(categories.getByRole("link")).toHaveText(["✧ Fantasy", "♡ Romance", "☾ Mystery", "❦ Fiction", "✎ Poetry"]);
  await expect(page.getByRole("region", { name: "Bestsellers", exact: true }).getByRole("article")).toHaveCount(4);
  await expect(page.getByRole("region", { name: "Staff Picks", exact: true }).getByRole("article")).toHaveCount(4);
  for (const book of books) {
    const card = page.getByRole("article").filter({ has: page.getByRole("heading", { name: book.title, exact: true }) });
    await expect(card.getByRole("heading")).toBeVisible();
    await expect(card.getByText(book.author, { exact: true })).toBeVisible();
    await expect(card.getByText(book.price, { exact: true })).toBeVisible();
    await expect(card.getByRole("img")).toHaveAccessibleName(/book cover$/);
  }
});

test("primary and header links reach their sections", async ({ page }) => {
  await page.getByRole("link", { name: "Find your next chapter", exact: true }).click();
  await expect(page).toHaveURL(/#collections$/);
  await expect(page.getByRole("heading", { name: "Follow your imagination" })).toBeInViewport();
  const navigation = page.getByRole("navigation", { name: "Main navigation" });
  for (const target of [
    { link: "Bestsellers", hash: "bestsellers", heading: "Bestsellers" },
    { link: "Staff Picks", hash: "staff-picks", heading: "Staff Picks" },
    { link: "Collections", hash: "collections", heading: "Follow your imagination" },
  ]) {
    await navigation.getByRole("link", { name: target.link, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#${target.hash}$`));
    await expect(page.getByRole("heading", { name: target.heading, exact: true })).toBeInViewport();
  }
});

test("collection and category links reach the intended recommendations", async ({ page }) => {
  for (const target of recommendations) {
    // Each recommendation starts from the same loaded page. Returning to a
    // source link mid-animation can interrupt the browser's prior smooth scroll.
    await page.goto("/", { waitUntil: "load" });
    const scope = target.collection
      ? page.getByRole("region", { name: "Follow your imagination" })
      : page.getByRole("navigation", { name: "Browse by category" });
    await scope.getByRole("link", { name: target.name }).click();
    await expect(page).toHaveURL(new RegExp(`#${target.hash}$`));
    await expect(page.getByRole("heading", { name: target.title, exact: true })).toBeInViewport();
  }
});

test("footer exposes sample disclosures and safe contact destinations", async ({ page }) => {
  const footer = page.getByRole("contentinfo");
  await expect(footer.getByText("Sample contact · replace before publishing", { exact: true })).toBeVisible();
  await expect(footer.getByText("Sample USD prices · No purchasing available", { exact: true })).toBeVisible();
  await expect(footer.getByRole("link", { name: "hello@example.com" })).toHaveAttribute("href", "mailto:hello@example.com");
  const social = footer.getByRole("navigation", { name: "Social platforms" });
  for (const [name, href] of [["Instagram ↗", "https://www.instagram.com/"], ["Pinterest ↗", "https://www.pinterest.com/"]]) {
    const link = social.getByRole("link", { name, exact: true });
    await expect(link).toHaveAttribute("href", href);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /\bnoopener\b/);
    await expect(link).toHaveAttribute("rel", /\bnoreferrer\b/);
  }
  await footer.getByRole("link", { name: "Back to top ↑", exact: true }).click();
  await expect(page).toHaveURL(/#main$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeInViewport();
});
