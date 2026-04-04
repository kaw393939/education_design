---
schema: qa/v1
qaType: sprint-planning
targetId: sprint-3-educational-primitives
targetPath: docs/_specs/educational-design-system/sprints/sprint-3-educational-primitives.md
status: approved
reviewer: github-copilot
createdAt: 2026-04-04T00:00:00Z
outcome: approved
supersedes: null
---

# Sprint 3 Educational Primitives Planning QA

## Scope

Review the Sprint 3 brief to confirm the educational primitive layer is bounded, testable, and ready to implement on top of the approved token and layout baselines.

## Method

Reviewed the sprint brief against:

- the phase-1 foundation spec
- the phase-1 sprint plan
- the operating runbook
- the planning QA artifact spec
- the educational primitive contracts in `component-inventory.md`
- the phase-1 block union in `content-schema.md`

Checked for:

- alignment between the planned components and the documented phase-1 block types
- clear separation between pedagogical primitives and already-completed layout primitives
- testability of default, negative, and edge-case component states
- placeholder-content rules that prove the system generalizes beyond the museum subject area

## Findings

No blocking findings.

## Assumptions

- Sprint 3 implementation will treat `ReadingMapGrid` as part of the first-class pedagogical layer because it already exists in the active block schema and component inventory.
- Unit-to-component mapping contracts can be implemented in code and supporting tests without creating a second competing source-of-truth document.
- Isolated example states are sufficient for Sprint 3 so long as they prove render contracts and semantic structure; full exemplar pages remain Sprint 4 work.

## Decision

Approved for implementation.

## Required Follow-ups

- Create `sprint-3-educational-primitives.implementation-qa.md` when the components, render contracts, and tests exist.
- Record explicit evidence that each core primitive has at least one test and that unit-driven rendering does not rely on ad hoc page glue.
