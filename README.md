# Educational Design System

## Purpose

This repository defines a documentation-first educational design system and publishing workflow.

The intended product is a static-first educational site system built from reusable research-driven content units, approved visuals, experience configs, and release manifests. The repo now has an executable Next.js scaffold, but it is still early in the implementation stage.

If you are an LLM entering this repository for the first time, treat this file as the entrypoint and process contract.

## Current repository state

As of 2026-04-04, this repository contains:

- active architecture and workflow specs
- active sprint briefs
- active QA structure and seeded planning QA artifacts
- a committed package manifest and installable dependency graph
- a Next.js static-export scaffold with overview, process, and status routes
- a Sprint 1 token implementation with a dedicated `/tokens` documentation route
- a committed Lighthouse CI configuration and runnable QA scripts
- GitHub Actions workflows for automated quality checks and Pages deployment
- root-path and GitHub Pages-style base-path QA coverage
- research notes that inform the educational system

As of 2026-04-04, this repository does not yet contain:

- release QA artifacts
- the release-manifest-driven content workflow implementation
- the later educational primitives and content assembly layers beyond the phase-1 token baseline

Do not pretend those implementation pieces already exist. If they do not exist in the filesystem, they are not done.

## What this site is supposed to become

The system should produce calm, legible, static educational sites that help learners move through orientation, explanation, evidence, reflection, and next steps.

The architecture is configuration-driven:

1. source research and long-form source documents
2. structured page-level units with ordered `blocks[]`
3. reviewable visual artifacts
4. experience configs that assemble approved units
5. release manifests that select exact approved versions
6. static export and GitHub Pages deployment

## Read these files in order

1. `docs/_specs/README.md`
2. `docs/_specs/educational-design-system/spec.md`
3. `docs/_specs/educational-design-system/operating-runbook.md`
4. `docs/_specs/educational-design-system/planning-qa-spec.md`
5. the relevant domain spec or sprint brief under `docs/_specs/educational-design-system/`
6. the latest relevant QA artifact under `docs/_qa/`

If you skip this order, you are likely to act on stale or partial context.

## Required operating loop

Every meaningful work item follows this loop:

1. update the active spec or sprint doc
2. create or update the planning QA artifact
3. resolve planning findings until approved
4. implement the work
5. create or update the implementation QA artifact
6. resolve implementation findings until approved
7. if the work is releasable, create or update release QA
8. publish only after release validation passes

Do not use chat history as the system of record. The files are the system of record.

## Documents that must be kept current

When scope or architecture changes, update:

- `docs/_specs/README.md`
- the relevant active spec under `docs/_specs/educational-design-system/`

When sprint planning changes, update:

- the relevant sprint brief under `docs/_specs/educational-design-system/sprints/`
- the relevant planning QA artifact under `docs/_qa/planning/`

When implementation work changes, update:

- the relevant implementation QA artifact under `docs/_qa/implementation/`
- any active spec that is now inaccurate

When release readiness changes, update:

- the relevant release QA artifact under `docs/_qa/releases/`
- any release-facing build or deployment documentation

When the project status changes materially, update this README so an external LLM can still tell what is done and not done.

## QA system

QA artifacts live under `docs/_qa/`.

Use these paths:

- `docs/_qa/planning/specs/`
- `docs/_qa/planning/sprints/`
- `docs/_qa/implementation/sprints/`
- `docs/_qa/releases/`
- `docs/_qa/templates/`

If a work item has no QA artifact, assume it is not approved.

The current implementation artifact for this scaffold is:

- `docs/_qa/implementation/sprints/foundation-app-scaffold.implementation-qa.md`

That artifact is the current evidence-backed implementation QA record for the executable baseline.

The current Sprint 1 implementation artifact is:

- `docs/_qa/implementation/sprints/sprint-1-theme-tokens.implementation-qa.md`

That artifact is now approved and records the evidence-backed Sprint 1 token implementation pass.

Local secrets must live in `.env.local` or another ignored env file. Do not commit `.env` files containing real credentials.

## Deterministic Lighthouse rule

Lighthouse is part of the required QA system, but it must be used in a deterministic way.

The rule is:

1. run Lighthouse against the exported static site, not the dev server
2. use a committed Lighthouse CI config once the app scaffold exists
3. use the same categories and thresholds in local and CI runs
4. gate release readiness on stable categories first
5. record the result in the implementation or release QA artifact

For phase 1, the gating categories should be:

- accessibility
- best-practices
- seo

Performance may be recorded as a baseline, but it should not be the first hard gate unless the build environment and budgets are stabilized enough to avoid noisy failures.

## Seeded QA artifacts already present

- `docs/_qa/planning/specs/phase-1-foundation-spec.qa.md`
- `docs/_qa/planning/sprints/sprint-1-theme-tokens.planning-qa.md`

These are examples of the required process, not optional extras.

## Current completion snapshot

Completed:

- foundation architecture spec set
- sprint plan and sprint briefs
- workflow and publishing-model specs
- QA directory structure
- operating runbook and QA artifact rules
- first planning QA artifacts
- executable Next.js scaffold
- committed Lighthouse CI configuration and browser-test baseline
- validated typecheck, lint, unit test, browser test, and Lighthouse pass for the scaffold
- Sprint 1 semantic token system with color, type, spacing, radius, shadow, and motion roles
- token documentation and multi-page preview examples in the application itself
- GitHub Actions quality and Pages deployment workflows
- validated typecheck, lint, unit test, browser test, and Lighthouse pass after the Sprint 1 token and workflow changes
- validated the same browser and Lighthouse checks in GitHub Pages-style base-path mode

Not completed:

- component and page implementation
- release-manifest-driven content workflow implementation
- release manifests and publish pipeline

## Behavioral rules for any LLM working here

1. Do not mark work done because a plan exists. Mark it done only when the required artifact exists and says it is approved.
2. Do not create new source-of-truth docs if an existing active doc can be updated instead.
3. Do not leave superseded planning docs in active paths.
4. Do not treat implementation QA as interchangeable with planning QA.
5. Do not publish or describe a release as ready without release QA and deterministic Lighthouse evidence against exported output.
6. When in doubt about status, prefer explicit file evidence over inference.

## Immediate next implementation direction

The next practical implementation step is to begin Sprint 2 layout primitives on top of the now-approved token layer and automated quality baseline.