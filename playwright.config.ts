import { defineConfig, devices } from "@playwright/test";

import { getPreviewBaseUrl } from "./lib/site-config";

const previewBaseUrl = getPreviewBaseUrl();

export default defineConfig({
  testDir: "./tests/browser",
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "html" : "list",
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "desktop-chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 7"] },
    },
  ],
  webServer: {
    command: "npm run build && npm run preview",
    url: previewBaseUrl,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});