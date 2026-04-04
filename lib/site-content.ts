export const readingOrder = [
  "docs/_specs/README.md",
  "docs/_specs/educational-design-system/spec.md",
  "docs/_specs/educational-design-system/operating-runbook.md",
  "docs/_specs/educational-design-system/planning-qa-spec.md",
  "Relevant domain spec or sprint brief",
  "Latest relevant QA artifact under docs/_qa/",
];

export const operatingLoop = [
  "Update the active spec or sprint document.",
  "Create or update the planning QA artifact.",
  "Resolve planning findings until approved.",
  "Implement the work.",
  "Create or update the implementation QA artifact.",
  "Resolve implementation findings until approved.",
  "Create release QA when the work is releasable.",
  "Publish only after release validation passes.",
];

export const completedItems = [
  "Foundation architecture spec set",
  "Sprint plan and sprint briefs",
  "Workflow and publishing-model specs",
  "QA directory structure and templates",
  "Operating runbook and QA artifact rules",
  "Initial planning QA artifacts",
  "Next.js static-export scaffold",
  "Committed Lighthouse config and runnable scripts",
  "Sprint 1 semantic token system and documentation route",
  "GitHub Actions quality and Pages deployment workflows",
  "Validated local quality pass after Sprint 1 token and routing changes",
];

export const pendingItems = [
  "Educational component primitives",
  "Sprint 2 layout primitives",
  "Release-manifest-driven site build",
  "Approved content and visual version flow",
  "Release QA artifacts tied to real release manifests",
];

export const qualityBars = [
  "Static export is the baseline, not an afterthought.",
  "Lighthouse runs against exported output, not the dev server.",
  "Accessibility, best-practices, and SEO are the first blocking categories.",
  "Performance is tracked but remains non-blocking until budgets stabilize.",
  "Base-path-aware checks run in CI so repository-hosted Pages builds are not a later surprise.",
];

export const automationNotes = [
  "The Quality workflow runs typecheck, lint, unit tests, browser smoke tests, and Lighthouse on pull requests and main pushes.",
  "The Pages workflow waits for a successful main-branch Quality run, rebuilds with the repository base path, and deploys the exported artifact.",
  "Playwright and Lighthouse both read the current base path so local, CI, and Pages verification stay aligned.",
];

export const topLevelCards = [
  {
    title: "System",
    description:
      "A static-first educational site baseline derived from the strongest instructional patterns in the reference museum project.",
  },
  {
    title: "Process",
    description:
      "Specs, planning QA, implementation, implementation QA, release QA, then publish. Files are the system of record.",
  },
  {
    title: "Verification",
    description:
      "Vitest, Playwright, and Lighthouse are wired so the exported artifact can be validated deterministically.",
  },
];