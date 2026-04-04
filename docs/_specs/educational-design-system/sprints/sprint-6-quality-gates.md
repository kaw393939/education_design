# Sprint 6: QA, Accessibility, and Baseline Proof

## Goal

Lock the phase-1 baseline with measurable verification so the system can be reused with confidence.

## Scope

1. Expand or finalize unit coverage.
2. Add or refine browser smoke tests.
3. Run accessibility and Lighthouse checks.
4. Validate workflow artifacts and release integrity.
5. Document the final verification routine.

## Deliverables

- updated unit and browser tests
- accessibility follow-up list
- Lighthouse baseline notes
- workflow and release validation notes
- final verification checklist for maintainers

## Work checklist

1. Ensure each core component has automated coverage.
2. Ensure exemplar pages have route-level smoke coverage.
3. Add breakpoint verification for mobile and desktop.
4. Capture baseline Lighthouse expectations.
5. Run Lighthouse against the exported static artifact with a committed config.
6. Validate schema, workflow, and release invariants.
7. Document how to run the full verification stack locally and in CI.

## Positive tests

- All required tests pass in a clean run.
- Browser smoke tests cover the exemplar learning flows.
- Lighthouse accessibility, best-practices, and seo meet the agreed thresholds.
- Workflow and release validation passes on approved artifacts.

## Negative tests

- No high-severity accessibility issue is knowingly deferred without documentation.
- No critical component is left untested because it looked visually correct.
- No deployment path bypasses the quality gates.
- No release gate relies on a dev-server Lighthouse run when exported-site evidence is required.

## Edge-case checks

- CI behavior versus local behavior.
- Reduced-motion and high-contrast states.
- Narrow viewport rendering for long pages.

## Accessibility checks

- Heading order audit.
- focus visibility and order audit.
- color contrast audit.
- semantic landmark audit.

## Export and deploy checks

- Verify that the artifact being audited is the exported static site.
- Confirm deploy remains blocked when quality gates fail.

## Lighthouse policy for this sprint

- Audit the exported static site, not the development server.
- Use one committed Lighthouse configuration for local and CI runs.
- Gate on accessibility, best-practices, and seo first.
- Record performance as a baseline until stable budgets are adopted.

## Out of scope

- new feature development unrelated to baseline proof

## Exit criteria

Sprint 6 is done when another maintainer can run the documented checks and trust the design system baseline and publishing workflow as serious starting points.