# Visual Asset Pipeline Spec

## Purpose

Define how the site creates, reviews, versions, and publishes imagery, diagrams, graphs, and charts.

The visual system must be high-quality, reusable, and compatible with the repaired publishing workflow: mutable drafts, immutable version snapshots, approved releases, and reproducible builds.

## Visual doctrine

1. Visuals are first-class publishing artifacts.
2. Accuracy-critical visuals should be deterministic.
3. Visual drafts may be mutable.
4. Visual versions become immutable once frozen.
5. Generated assets belong to a specific visual version and must never silently overwrite earlier outputs.
6. Every published visual needs intent, provenance, accessibility text, and review.

## Visual classes

The pipeline should distinguish between visual classes because they have different accuracy and generation requirements.

### 1. Illustrations

Use for:

- atmospheric scene imagery
- conceptual illustrations
- editorial hero images
- symbolic compositions

Generation approach:

- image-generation provider such as the EAI terminal tool with GPT image
- strong style profiles and review criteria

### 2. Diagrams

Use for:

- concept relationships
- process diagrams
- system maps
- timeline structures

Preferred generation approach:

- Mermaid, SVG, or structured diagram definitions first
- generative image support only when diagrammatic clarity remains reviewable

### 3. Charts and graphs

Use for:

- evidence displays
- comparisons
- timelines with quantitative scales
- trend and distribution graphics

Preferred generation approach:

- deterministic code-driven specs such as Vega-Lite, SVG, or other structured chart definitions
- never rely on generative raster image output for factual data graphics

## Visual artifact model

### `VisualDraft`

A mutable working draft for a visual specification.

Use this for:

- prompt refinement
- caption and alt-text refinement
- style-profile tuning
- data-source and labeling adjustments

### `VisualSpecVersion`

An immutable, versioned visual specification paired with generated or deterministic assets.

Use this for:

- review
- approval
- release references
- reproducible builds

## Visual spec fields

Required fields:

- `schema`
- `id`
- `version`
- `status`
- `kind`
- `intent`
- `forUnit`
- `supersedes`

Recommended optional fields:

- `caption`
- `alt`
- `longDescription`
- `styleProfile`
- `provider`
- `prompt`
- `negativePrompt`
- `dataSource`
- `sourceRefs`
- `dimensions`
- `assetRefs`
- `reviewRefs`

## Version storage model

Each visual version must own its own spec and its own generated assets.

Do not store multiple generated revisions in a shared `assets/` folder with stable filenames.

### Required storage rule

The directory or filenames for a visual version must be version-specific.

### Recommended directory structure

```text
content/
  drafts/
    visuals/
      student-readiness-chart.yml
      renaissance-press-hero.yml
  visuals/
    student-readiness-chart/
      versions/
        v2026-04-04T160000Z/
          spec.yml
          chart.svg
          chart.csv
    renaissance-press-hero/
      versions/
        v2026-04-04T161500Z/
          spec.yml
          image.png
          prompt.txt
```

This model ensures that a historical release can always resolve the exact artifact it referenced.

## Review requirements by visual class

### Illustrations

Review for:

- visual coherence with the site style profile
- avoidance of cliche or generic image output
- relevance to the unit objective
- safe and non-misleading representation

### Diagrams

Review for:

- structural clarity
- correct relationships and labels
- legibility on mobile and desktop
- semantic fit with the associated unit

### Charts and graphs

Review for:

- factual accuracy
- legible scales and labels
- source traceability
- accessible fallback or tabular equivalent

## Provider model

The system should not bind itself to one generation provider at the content-model level.

Instead, use a provider abstraction such as:

- `gpt-image`
- `vega-lite`
- `mermaid`
- `svg-template`

The EAI terminal tool can serve as the `gpt-image` generation adapter.

## Workflow alignment

The visual pipeline should follow this sequence:

1. create or edit a `VisualDraft`
2. freeze a `VisualSpecVersion`
3. generate assets for that frozen version
4. request review
5. revise through a new draft if changes are requested
6. approve the visual version
7. publish it only through a release manifest

At no point should an approved visual version be mutated in place.

## Asset reference rules

1. Release manifests should reference visual ids plus explicit versions.
2. Unit versions should reference approved visual versions, not mutable draft ids.
3. `assetRefs` should point only to files owned by that visual version.
4. If a visual is regenerated, it must produce a new version and a new asset path.

## Accessibility requirements

Every published visual needs:

- alt text
- caption when context matters
- long description for complex visuals when needed
- source notes for factual graphics

Charts and graphs should also provide structured data or a textual summary where practical.

## Failure modes to prevent

- using image generation for data charts
- publishing diagrams without label review
- storing images without the spec that produced them
- reusing stable asset paths across different visual versions
- regenerating assets without incrementing the visual version
- letting visuals appear in releases before approval

## Acceptance criteria

- The pipeline clearly separates illustration, diagram, and chart behavior.
- Every published visual can be traced to a versioned spec.
- Every versioned spec resolves to version-owned assets.
- The system supports review and regeneration loops through drafts and immutable snapshots.
- Accuracy-critical visuals are deterministic by default.

- The site can rebuild visuals or whole experiences from explicit approved versions.
