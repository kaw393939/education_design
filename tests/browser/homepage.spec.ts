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
      name: "Documentation, QA, and static export now share one runnable project.",
    }),
  ).toBeVisible();

  await expect(page.getByRole("link", { name: "Review the process" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Review token system" })).toBeVisible();
  await expect(page.getByText("Committed Lighthouse config and runnable scripts")).toBeVisible();
  await expect(page.getByText("Sprint 1 semantic token system and documentation route")).toBeVisible();
});

test("process, status, and tokens routes load from the exported site", async ({ page }) => {
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
});