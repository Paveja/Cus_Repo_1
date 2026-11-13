import { expect, test } from "@playwright/test";

test("stationery page works on desktop and mobile, with no browser errors", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const requestFailures: string[] = [];
  const httpFailures: string[] = [];
  page.on("pageerror", (error) => consoleErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("requestfailed", (request) => requestFailures.push(request.url()));
  page.on("response", (response) => {
    if (response.status() >= 400)
      httpFailures.push(`${response.status()} ${response.url()}`);
  });

  for (const viewport of [
    { width: 1280, height: 900 },
    { width: 390, height: 844 },
  ]) {
    await page.setViewportSize(viewport);
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle("Paper & Form — A little more considered");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "A little moreconsidered.",
    );
    await expect(
      page.getByRole("img", { name: /olive notebook/ }),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);

    await page.getByRole("link", { name: "Discover the collection" }).click();
    await expect(page).toHaveURL(/#collection$/);
    await expect(
      page.getByRole("heading", { name: "Meet your everyday essentials." }),
    ).toBeInViewport();
    await expect(page.getByRole("article")).toHaveCount(3);
    await page.getByRole("link", { name: "Our story" }).click();
    await expect(page).toHaveURL(/#story$/);
    await expect(
      page.getByRole("heading", {
        name: "Good things start with a blank page.",
      }),
    ).toBeInViewport();

    const image = page.getByRole("img", { name: /writer putting pen/ });
    await expect(image).toBeVisible();
    await expect
      .poll(() =>
        image.evaluate((element) => (element as HTMLImageElement).naturalWidth),
      )
      .toBeGreaterThan(0);
    await page
      .getByRole("link", { name: "Enquire about the collection" })
      .click();
    await expect(page).toHaveURL(/#contact$/);
    await expect(
      page.getByRole("link", { name: "Write to us" }),
    ).toHaveAttribute("href", "mailto:hello@paperandform.example");
    await expect(
      page.getByText("Sample website · contact address is a placeholder."),
    ).toBeVisible();

    await page.goto("/");
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "Skip to content" }),
    ).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main$/);
    await page.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    await page.emulateMedia({
      colorScheme: "light",
      reducedMotion: "no-preference",
    });
  }

  await page.evaluate(() => document.fonts.ready);
  expect(
    await page
      .getByRole("heading", { level: 1 })
      .evaluate((element) => getComputedStyle(element).fontFamily),
  ).toContain("DM Serif Display");
  expect(consoleErrors).toEqual([]);
  expect(requestFailures).toEqual([]);
  expect(httpFailures).toEqual([]);
});
