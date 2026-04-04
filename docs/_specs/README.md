# Specs Index

## Purpose

This folder contains the active specification set for the educational design system and its publishing workflow.

The repository-level entrypoint for new maintainers or external LLMs is `README.md` at the repo root. This file is the spec index once that higher-level context has been read.

The goal of this index is to make the doc hierarchy explicit so a human or an LLM can tell:

1. which docs are authoritative
2. which docs are supporting references
3. which docs are historical and archived

## Source of truth

For active planning and implementation, treat these documents as authoritative in this order:

1. `educational-design-system/spec.md`
2. `educational-design-system/operating-runbook.md`
3. `educational-design-system/phase-1-sprint-plan.md`
4. `educational-design-system/planning-qa-spec.md`
5. the active domain specs under `educational-design-system/`
6. the detailed sprint briefs under `educational-design-system/sprints/`

Archived materials under `_archive/` are historical context only.

## Recommended reading order

1. `educational-design-system/spec.md`
2. `educational-design-system/operating-runbook.md`
3. `educational-design-system/planning-qa-spec.md`
4. `educational-design-system/content-schema.md`
5. `educational-design-system/workflow-state-machine.md`
6. `educational-design-system/component-inventory.md`
7. `educational-design-system/page-recipes.md`
8. `educational-design-system/visual-asset-pipeline.md`
9. `educational-design-system/deployment.md`
10. `educational-design-system/cli-command-surface.md`
11. `educational-design-system/phase-1-sprint-plan.md`
12. `educational-design-system/sprints/*.md`
13. the latest relevant QA artifact under `docs/_qa/`

## Active docs

### Core

- `educational-design-system/spec.md`: the active phase-1 foundation and architecture spec
- `educational-design-system/operating-runbook.md`: the canonical doc -> QA -> implement -> QA -> release loop
- `educational-design-system/phase-1-sprint-plan.md`: sprint sequence and cross-sprint rules
- `educational-design-system/planning-qa-spec.md`: QA artifact rules, naming, and gate requirements

### System contracts

- `educational-design-system/content-schema.md`: page-level units, drafts, versions, blocks, experiences, releases
- `educational-design-system/workflow-state-machine.md`: authoring, review, approval, and publish lifecycle
- `educational-design-system/component-inventory.md`: render primitives and block-to-component contracts
- `educational-design-system/page-recipes.md`: page grammar and recipe validation targets
- `educational-design-system/visual-asset-pipeline.md`: illustration, diagram, chart, and visual-version model
- `educational-design-system/deployment.md`: static export and release-manifest-driven deployment
- `educational-design-system/cli-command-surface.md`: command model for the publishing workflow

### Sprint briefs

- `educational-design-system/sprints/`: one focused sprint brief per phase-1 sprint

### QA artifacts

- `../_qa/`: durable planning, implementation, and release QA records

## Archive policy

Move documents to `_archive/` when they are any of the following:

- superseded by an active spec
- useful as historical context but no longer authoritative
- temporary repair or migration documents that have already been integrated into active docs

Do not leave superseded planning documents in the active path if they duplicate active guidance.

## Current archive contents

- `_archive/letters/`: historical vision briefs
- `_archive/educational-design-system/`: repaired or superseded planning artifacts

## Maintenance rule

If a new doc is added to `_specs/`, update this README or do not add the doc.

The folder should stay small enough that an LLM can read the full active spec set without guessing which files matter.