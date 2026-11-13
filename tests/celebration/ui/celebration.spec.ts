import { expect, test } from "playwright/test";

const baseURL = process.env.BASE_URL;
test.use({ baseURL });

test.describe("celebration page", () => {
  test("shows the celebration content and supports keyboard activation", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: /A little click\. A lot of happy\./ }),
    ).toBeVisible();
    await expect(
      page.getByText("Big wins. Small wins. Just because.", { exact: false }),
    ).toBeVisible();

    const button = page.getByRole("button", { name: /Make it rain/ });
    await expect(button).toBeVisible();
    await button.focus();
    await expect(button).toBeFocused();
    await page.keyboard.press("Enter");

    await expect(page.getByRole("status")).toHaveText(
      "Here’s to you. Let’s celebrate!",
    );
    await expect(page.locator('div[aria-hidden="true"] span')).toHaveCount(160);
  });

  test("celebrates when the page background is clicked", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("main").click({ position: { x: 8, y: 8 } });

    await expect(page.getByRole("status")).toHaveText(
      "Here’s to you. Let’s celebrate!",
    );
  });

  test("keeps the status announcement without particles for reduced motion", async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    await page.getByRole("button", { name: /Make it rain/ }).click();

    await expect(page.getByRole("status")).toHaveText(
      "Here’s to you. Let’s celebrate!",
    );
    await expect(page.locator('div[aria-hidden="true"] span')).toHaveCount(0);
  });
});
