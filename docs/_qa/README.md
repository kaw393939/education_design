# QA Index

## Purpose

This folder contains the active QA artifacts for planning, implementation, and releases.

These files are the durable review record for the development process. They are separate from `_specs/` so the active source-of-truth specs stay compact while QA history remains explicit and auditable.

## Structure

- `planning/specs/`: QA for core architecture and planning specs
- `planning/sprints/`: QA for sprint briefs before implementation begins
- `implementation/sprints/`: QA for sprint implementations after code or content changes are made
- `releases/`: QA for publishable release candidates
- `templates/`: starter files for each QA artifact type

## Reading rule

Before starting work on a sprint or release, read:

1. the relevant active spec in `docs/_specs/`
2. the latest relevant QA artifact in `docs/_qa/`

The current implementation baseline artifact is:

- `implementation/sprints/foundation-app-scaffold.implementation-qa.md`

This artifact is currently approved and records the first evidence-backed implementation validation pass for the repo.

The current Sprint 1 implementation artifact is:

- `implementation/sprints/sprint-1-theme-tokens.implementation-qa.md`

This artifact is currently approved and records the evidence-backed Sprint 1 token implementation pass.

The current Sprint 2 planning artifact is:

- `planning/sprints/sprint-2-layout-primitives.planning-qa.md`

This artifact is currently approved and records the planning review for the shared shell and layout primitive layer.

The current Sprint 3 planning artifact is:

- `planning/sprints/sprint-3-educational-primitives.planning-qa.md`

This artifact is currently approved and records the planning review for the pedagogical primitive layer and unit-to-component render contracts.

The current Sprint 2 implementation artifact is:

- `implementation/sprints/sprint-2-layout-primitives.implementation-qa.md`

This artifact is currently approved and records the evidence-backed Sprint 2 layout implementation pass.

The current Sprint 3 implementation artifact is:

- `implementation/sprints/sprint-3-educational-primitives.implementation-qa.md`

This artifact is currently approved and records the evidence-backed Sprint 3 pedagogical primitive and unit-renderer implementation pass.

All current implementation artifacts now include evidence for root-path validation and GitHub Pages-style base-path validation.

## Naming rule

Use the naming conventions defined in:

- `docs/_specs/educational-design-system/planning-qa-spec.md`

Start from the matching file under `templates/` when creating a new QA artifact.

## Maintenance rule

Do not store superseded planning or implementation QA in random project folders.

If a QA artifact is replaced, either:

- update its status to `superseded`, or
- create a newer file that clearly supersedes it

The QA trail should stay understandable to another maintainer or LLM without reconstructing history from chat logs.

## Lighthouse rule

When Lighthouse is used as evidence, run it against the exported site artifact and record the result in the relevant implementation or release QA file.
