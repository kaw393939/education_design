# Sprint 5: Static Export and GitHub Pages Hardening

## Goal

Make the educational design system safe for static deployment on GitHub Pages.

## Scope

1. Confirm export-safe route behavior.
2. Validate base-path-aware navigation and assets.
3. Harden image and metadata handling.
4. Align CI with export reality.
5. Validate release-manifest-driven builds and CLI integration points.

## Deliverables

- finalized static export configuration
- deployment workflow notes
- CI updates where needed
- export validation checks
- release assembly rules for static publishing

## Work checklist

1. Validate `output: "export"` behavior.
2. Validate `trailingSlash: true` assumptions.
3. Validate `NEXT_PUBLIC_BASE_PATH` handling.
4. Confirm images and public assets resolve correctly.
5. Confirm sitemap and robots remain valid.
6. Confirm release manifests select only approved units and visuals.
7. Document any constraints authors must follow to stay export-safe.

## Positive tests

- The site builds cleanly to `out/`.
- Internal links resolve under repository-path hosting.
- Exemplar pages render with their assets intact.
- Release-based builds reproduce the same output from the same manifest.

## Negative tests

- No route requires a server runtime.
- No asset path is hardcoded to root when base-path awareness is required.
- No CI step validates only dev mode while ignoring exported output.

## Edge-case checks

- Nested route paths under base path.
- Remote image allowlist behavior.
- Empty base path for custom-domain readiness.

## Accessibility checks

- Metadata and route changes do not break page titles, landmarks, or canonical navigation cues.

## Export and deploy checks

- Manual or automated verification of the `out/` artifact.
- Pages workflow remains blocked behind quality gates.

## Out of scope

- backend deployment targets
- dynamic application hosting

## Exit criteria

Sprint 5 is done when the design system can be deployed to GitHub Pages as a static site without special-case patches and with reproducible release-manifest builds.