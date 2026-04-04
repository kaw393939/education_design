import { expect, test } from "@playwright/test";

function getRoutePath(route: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/^\/+|\/+$/g, "") || "";

  if (route === "/") {
    return basePath ? `/${basePath}/` : "/";
  }

  return `${basePath ? `/${basePath}` : ""}${route}`;
}

test("homepage exposes the executable baseline", async ({ page }) => {
  await page.goto(getRoutePath("/"));

  await expect(
    page.getByRole("heading", {
      name: "Documentation, QA, render contracts, and educational primitives now share one system.",
    }),
  ).toBeVisible();

  await expect(page.getByRole("link", { name: "Primitives guide", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Lesson example" })).toBeVisible();
  await expect(page.getByText("Committed Lighthouse config and runnable scripts")).toBeVisible();
  await expect(page.getByText("Sprint 3 educational primitives and normalized render-contract types")).toBeVisible();
});

test("documentation routes load from the exported site", async ({ page }) => {
  await page.goto(getRoutePath("/process/"));
  await expect(page.getByRole("heading", { name: "One operating loop, with explicit review artifacts." })).toBeVisible();

  await page.goto(getRoutePath("/status/"));
  await expect(page.getByRole("heading", { name: "What is actually done versus what is still planned." })).toBeVisible();

  await page.goto(getRoutePath("/tokens/"));
  await expect(
    page.getByRole("heading", {
      name: "Semantic tokens now define the visual language instead of one-off surface choices.",
    }),
  ).toBeVisible();

  await page.goto(getRoutePath("/layouts/"));
  await expect(
    page.getByRole("heading", {
      name: "Reusable shells and layout primitives now carry the structural work.",
    }),
  ).toBeVisible();

  await page.goto(getRoutePath("/primitives/"));
  await expect(
    page.getByRole("heading", {
      name: "Pedagogical primitives and unit-driven rendering now share one contract.",
    }),
  ).toBeVisible();
});

test("example routes prove the shared primitive layer", async ({ page }) => {
  await page.goto(getRoutePath("/examples/module/"));
  await expect(
    page.getByRole("heading", {
      name: "A wide overview page can stay calm and directional.",
    }),
  ).toBeVisible();

  await page.goto(getRoutePath("/examples/lesson/"));
  await expect(
    page.getByRole("heading", {
      name: "A content-heavy lesson can stay readable without losing orientation.",
    }),
  ).toBeVisible();

  await page.goto(getRoutePath("/examples/reading-map/"));
  await expect(
    page.getByRole("heading", {
      name: "A resource map can guide movement without turning into a directory dump.",
    }),
  ).toBeVisible();
});