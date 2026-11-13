import { test, expect } from "playwright/test";

const baseURL = process.env.BASE_URL;
test.use({ baseURL, browserName: "chromium", headless: true });

// Native links/headings traced to app/page.tsx:23–34,43–59,86–105,117–119
// and app/sections.tsx:34–36. No mutable data or shared browser state.
test("browse collection and maison then return to top", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Discover the collection", exact: true }).click();
  await expect(page).toHaveURL(/\/#collection$/);
  await expect(page.getByRole("heading", { name: "The signature collection", exact: true })).toBeInViewport();
  await expect(page.getByRole("article")).toHaveCount(3);
  await page.getByRole("link", { name: "Our maison", exact: true }).click();
  await expect(page).toHaveURL(/\/#maison$/);
  await expect(page.getByRole("heading", { name: "Not just worn. Felt.", exact: true })).toBeInViewport();
  await page.getByRole("link", { name: "Find your fragrance", exact: true }).click();
  await expect(page).toHaveURL(/\/#collection$/);
  await expect(page.getByRole("heading", { name: "The signature collection", exact: true })).toBeInViewport();
  await page.getByRole("link", { name: "Back to top ↑", exact: true }).click();
  await expect(page).toHaveURL(/\/#?$/);
  await expect(page.getByRole("heading", { name: "A feeling, bottled.", level: 1 })).toBeInViewport();
});
