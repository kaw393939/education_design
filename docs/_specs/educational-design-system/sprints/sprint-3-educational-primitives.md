# Sprint 3: Educational Content Primitives

## Goal

Implement the pedagogical component layer that turns the layout system into a real educational design system.

## Scope

Implement:

- `LessonHero`
- `SectionBlock`
- `WhyItMatters`
- `ConceptGrid`
- `SummaryGrid`
- `ComparisonGrid`
- `SequenceTimeline`
- `WorkedExample`
- `EditorialAside`
- `PullInsight`
- `VisualBreak`
- `ReflectionPrompt`
- `NextStepBlock`
- `SourceAnchorGrid`
- `ReadingMapGrid`
- optional `GlossaryBlock`

Also define the render contracts that map structured unit inputs to these primitives.

## Deliverables

- component implementations
- prop contracts
- unit-to-component mapping contracts
- shared payload sub-shape definitions for actions, metadata, visual refs, and reusable link/list items
- unit tests for each core component
- usage examples with non-AI-history placeholder content

## Work checklist

1. Keep each component's instructional job narrow and explicit.
2. Ensure components compose cleanly inside the layout primitives.
3. Separate content structure from visual surface treatment.
4. Define the structured fields each component expects from unit configs.
5. Normalize shared sub-shapes so actions, metadata, visual refs, and link lists do not drift across blocks.
6. Write unit tests for core render states and semantic structure.
7. Verify placeholder content reads naturally outside the museum subject area.

## Positive tests

- Every component renders with a clean default case.
- Every component has at least one test.
- Components work with concept, process, assignment, and reading-map content.
- Components can be populated from unit-driven render contracts without ad hoc page logic.

## Negative tests

- No component assumes historical chronology unless it is explicitly the timeline variant.
- No component requires museum-specific metadata.
- No component uses decorative content as a substitute for instructional value.
- No serialized block contract stores React-only props such as `children`, `primary`, or `secondary`.

## Edge-case checks

- Empty optional metadata in heroes.
- One-item and many-item card grids.
- Very short and very long reflection prompts.
- Source grids with mixed source types.
- Reading-map grids with uneven cluster sizes.

## Accessibility checks

- Verify heading hierarchy.
- Verify appropriate use of `section`, `aside`, list, and table semantics.
- Verify focus order and meaningful link text.

## Export and deploy checks

- Static render sanity for every component state used by exemplar pages.

## Out of scope

- final exemplar pages beyond what is needed for isolated component examples

## Exit criteria

Sprint 3 is done when the design system has a complete first-class pedagogical primitive layer with tests, clear contracts, and unit-driven rendering rules.
