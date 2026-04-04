export type PanelTone =
  | "neutral"
  | "reading"
  | "emphasis"
  | "proof"
  | "reflection"
  | "synthesis"
  | "warning"
  | "next";

export const colorRoles = [
  {
    name: "Reading",
    tone: "reading",
    token: "surface-reading",
    guidance: "Default long-form reading surface for prose-heavy lessons and reference blocks.",
  },
  {
    name: "Emphasis",
    tone: "emphasis",
    token: "surface-emphasis",
    guidance: "Primary visual emphasis for heroes, orientation blocks, and key transitions.",
  },
  {
    name: "Proof",
    tone: "proof",
    token: "surface-proof",
    guidance: "Evidence, verification, and quality-gate surfaces that should feel serious but calm.",
  },
  {
    name: "Reflection",
    tone: "reflection",
    token: "surface-reflection",
    guidance: "Reflection prompts, slower thinking moments, and retrospective notes.",
  },
  {
    name: "Synthesis",
    tone: "synthesis",
    token: "surface-synthesis",
    guidance: "Comparison, clustering, summary patterns, and conceptual map blocks.",
  },
  {
    name: "Warning",
    tone: "warning",
    token: "surface-warning",
    guidance: "Risk, caution, or dependency notes that should remain visible without feeling alarmist.",
  },
  {
    name: "Next Step",
    tone: "next",
    token: "surface-next",
    guidance: "Action-oriented blocks that point to the next move in a lesson or sprint.",
  },
] as const;

export const typographyRoles = [
  {
    name: "Hero",
    token: "type-hero",
    sample: "Big directional framing for the page's main job.",
  },
  {
    name: "Section",
    token: "type-section",
    sample: "Clear section titles with enough hierarchy to support scan-first reading.",
  },
  {
    name: "Body",
    token: "type-body",
    sample: "Long-form reading copy tuned for calm pacing and readable measure.",
  },
  {
    name: "Concept",
    token: "type-concept",
    sample: "Short explanatory labels for cards, concept clusters, and preview tiles.",
  },
  {
    name: "Caption",
    token: "type-caption",
    sample: "Supportive detail for examples, previews, and verification notes.",
  },
  {
    name: "Annotation",
    token: "type-annotation",
    sample: "Secondary notes, edge-case hints, and non-dominant side information.",
  },
  {
    name: "Metadata",
    token: "type-meta",
    sample: "Eyebrows and overlines that orient without stealing attention.",
  },
] as const;

export const layoutRoles = [
  {
    name: "Reading measure",
    token: "measure-reading",
    value: "68ch",
    guidance: "Long-form text should land here unless a narrower caption or wider grid is clearly better.",
  },
  {
    name: "Hero measure",
    token: "measure-hero",
    value: "18ch",
    guidance: "Large page statements should wrap deliberately instead of stretching across the full viewport.",
  },
  {
    name: "Panel radius",
    token: "radius-panel",
    value: "2rem",
    guidance: "Shared shell radius for major sections so the whole system feels coherent.",
  },
  {
    name: "Card radius",
    token: "radius-card",
    value: "1.5rem",
    guidance: "Secondary surfaces use a tighter radius to remain differentiated but related.",
  },
  {
    name: "Section rhythm",
    token: "space-6",
    value: "3rem",
    guidance: "Major sections should separate at this rhythm before resorting to custom spacing.",
  },
  {
    name: "Motion",
    token: "motion-gentle",
    value: "260ms",
    guidance: "Subtle hover and focus transitions stay calm and disappear for reduced-motion users.",
  },
] as const;

export const pageTypeExamples = [
  {
    title: "Lesson Page",
    tone: "reading",
    purpose: "Moves a learner from orientation to explanation to example to reflection.",
    sections: ["Orientation", "Why it matters", "Core explanation", "Worked example", "Reflection"],
  },
  {
    title: "Module Overview",
    tone: "synthesis",
    purpose: "Shows the learner the big structure, sequence, and why the unit fits together.",
    sections: ["Module frame", "Sequence map", "Proof of relevance", "Learning arc", "Next step"],
  },
  {
    title: "Reading Map",
    tone: "next",
    purpose: "Guides scan-first movement through sources, annotations, and suggested order.",
    sections: ["Reading goal", "Source cluster", "Annotations", "Suggested path", "Action"],
  },
] as const;