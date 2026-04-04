import { expect, test } from "@playwright/test";

function getRoutePath(route: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/^\/+|\/+$/g, "") || "";

  if (route === "/") {
    return basePath ? `/${basePath}/` : "/";
  }

  return `${basePath ? `/${basePath}` : ""}${route}`;
}

test("primitives guide renders unit-driven concept, assignment, and reading-map examples", async ({ page }) => {
  await page.goto(getRoutePath("/primitives/"));

  await expect(
    page.getByRole("heading", {
      name: "Pedagogical primitives and unit-driven rendering now share one contract.",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: "A feedback loop changes the next move, not just the current result.",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: "A field-observation memo needs a method, not just raw notes.",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: "A reading map should guide sequence, not dump links.",
    }),
  ).toBeVisible();

  await expect(page.getByRole("link", { name: "Jump to assignment unit" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Review process docs" })).toBeVisible();
});

test("primitives guide preserves a single page-level h1 while rendering sample units below it", async ({ page }) => {
  await page.goto(getRoutePath("/primitives/"));

  const h1Count = await page.locator("h1").count();
  expect(h1Count).toBe(1);

  await expect(page.getByRole("navigation", { name: "Lesson navigation" })).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "One renderer now maps stored blocks into runtime component props.",
    }),
  ).toBeVisible();
  await expect(page.getByText("Useful terms for this assignment")).toBeVisible();
});