import { test, expect } from "playwright/test";

const baseURL = process.env.BASE_URL;
test.use({ baseURL, browserName: "chromium", headless: true });

// Source: app/page.tsx:43–47 and app/sections.tsx:3–24,34–64.
test("landing page shows the hero and complete fragrance collection", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "A feeling, bottled.", level: 1 })).toBeVisible();
  await expect(page.getByRole("heading", { name: "The signature collection", exact: true })).toBeVisible();
  await expect(page.getByRole("article")).toHaveCount(3);
  for (const [name, family, notes] of [
    ["Soleil Doré", "Bright · Citrus · Floral", "Bergamot, neroli & soft musk"],
    ["Bois de Minuit", "Deep · Woody · Warm", "Cedarwood, black tea & amber"],
    ["Rose Silencieuse", "Soft · Floral · Intimate", "Rose petals, iris & sandalwood"],
  ]) {
    const card = page.getByRole("article").filter({ has: page.getByRole("heading", { name, exact: true }) });
    await expect(card).toHaveCount(1);
    await expect(card.getByText(family, { exact: true })).toBeVisible();
    await expect(card.getByText(notes, { exact: true })).toBeVisible();
  }
});

for (const name of ["The collection", "Discover the collection", "Find your fragrance"]) {
  test(`collection link: ${name}`, async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name, exact: true }).click();
    await expect(page).toHaveURL(/\/#collection$/);
    await expect(page.getByRole("heading", { name: "The signature collection", exact: true })).toBeInViewport();
  });
}

test("maison navigation reaches the brand story", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Our maison", exact: true }).click();
  await expect(page).toHaveURL(/\/#maison$/);
  await expect(page.getByRole("heading", { name: "Not just worn. Felt.", exact: true })).toBeInViewport();
});

for (const name of ["Maison Auré home", "Back to top ↑"]) {
  test(`return to top: ${name}`, async ({ page }) => {
    await page.goto("/#maison");
    await expect(page.getByRole("heading", { name: "Not just worn. Felt.", exact: true })).toBeInViewport();
    await page.getByRole("link", { name, exact: true }).click();
    await expect(page).toHaveURL(/\/#?$/);
    await expect(page.getByRole("heading", { name: "A feeling, bottled.", level: 1 })).toBeInViewport();
  });
}

for (const [fragment, heading] of [
  ["collection", "The signature collection"],
  ["maison", "Not just worn. Felt."],
]) {
  test(`direct fragment entry: ${fragment}`, async ({ page }) => {
    await page.goto(`/#${fragment}`);
    await expect(page).toHaveURL(new RegExp(`/#${fragment}$`));
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeInViewport();
  });
}
