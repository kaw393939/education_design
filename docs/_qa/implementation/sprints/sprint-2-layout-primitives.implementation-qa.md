---
schema: qa/v1
qaType: sprint-implementation
targetId: sprint-2-layout-primitives
targetPath: docs/_specs/educational-design-system/sprints/sprint-2-layout-primitives.md
status: approved
reviewer: github-copilot
createdAt: 2026-04-04T00:00:00Z
outcome: approved
supersedes: null
---

# Sprint 2 Layout Primitives Implementation QA

## Scope

Review the Sprint 2 implementation for shared page shells, layout primitives, proof routes, and validation coverage expected by the approved planning artifact.

## Method

Reviewed:

- new layout primitives under `components/`
- the live layout guide under `app/layouts/page.tsx`
- proof routes under `app/examples/`
- migration of the overview, process, status, and token routes onto the shared shell layer
- header and footer updates that expose the new layout-guide path
- unit coverage for `PageShell`, `LessonShell`, `SplitLayout`, and `LocalNav`
- browser coverage for landmark structure, heading flow, mobile single-column collapse, desktop sticky local navigation, and status-page evidence for the new layout baseline
- Lighthouse route expansion and the `.next` cleanup script used to keep build and typecheck stable
- manual browser inspection of `/layouts/` and `/examples/lesson/` against exported output, including console-message checks

Validation completed with these command results:

- `npm run typecheck`: passed
- `npm run lint`: passed
- `npm run test`: passed
- `CI=1 npm run test:browser`: passed on desktop and mobile projects against `/`, `/process/`, `/status/`, `/tokens/`, `/layouts/`, `/examples/module/`, `/examples/lesson/`, and `/examples/reading-map/`, including explicit checks for responsive split/grid behavior and local-nav accessibility rules
- `npm run lighthouse`: passed for the same root-path routes using `.lighthouserc.js`
- `NEXT_PUBLIC_BASE_PATH=/education_design NEXT_PUBLIC_SITE_URL=https://kaw393939.github.io CI=1 npm run test:browser`: passed for the same routes under `/education_design/`
- `NEXT_PUBLIC_BASE_PATH=/education_design NEXT_PUBLIC_SITE_URL=https://kaw393939.github.io npm run lighthouse`: passed for the same Pages-style routes using `.lighthouserc.js`
- Browser automation inspection reported zero console errors after adding `app/icon.svg` so the exported artifact no longer emits a favicon 404

## Findings

No blocking findings.

## Assumptions

- The layout guide and example pages are proof surfaces for the primitive layer, not final educational experiences.
- Sprint 3 will add higher-level educational blocks on top of these shells rather than reverting to page-specific layout markup.
- The custom export preview server remains the required local harness for GitHub Pages-style validation.

## Decision

Approved.

## Required Follow-ups

- Use the shared shells and layout primitives as the default path for Sprint 3 educational primitive work.
- Keep browser and Lighthouse route coverage aligned when new public routes are added.
