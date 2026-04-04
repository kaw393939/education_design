const origin = "http://127.0.0.1:3000";

function normalizeBasePath(value = "") {
  if (!value || value === "/") {
    return "";
  }

  return `/${value.replace(/^\/+|\/+$/g, "")}`;
}

function buildPreviewUrl(route) {
  const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH || "");
  const pathname = route === "/" ? "/" : `/${route.replace(/^\/+/, "")}`;

  return new URL(`${basePath}${pathname}`, origin).toString();
}

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: "npm run preview",
      startServerReadyPattern: "Preview server listening on",
      url: [
        "/",
        "/process/",
        "/status/",
        "/tokens/",
        "/layouts/",
        "/primitives/",
        "/examples/module/",
        "/examples/lesson/",
        "/examples/reading-map/",
      ].map(buildPreviewUrl),
    },
    assert: {
      assertions: {
        "categories:accessibility": [
          "error",
          {
            minScore: 0.95,
          },
        ],
        "categories:best-practices": [
          "error",
          {
            minScore: 0.9,
          },
        ],
        "categories:seo": [
          "error",
          {
            minScore: 0.9,
          },
        ],
        "categories:performance": "off",
      },
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci",
    },
  },
};