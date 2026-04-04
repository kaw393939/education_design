import type { PanelTone } from "@/lib/theme-tokens";

export type ActionLinkSpec = {
  label: string;
  href: string;
  kind?: "primary" | "secondary";
  note?: string;
};

export type MetadataItemSpec = {
  label: string;
  value: string;
};

export type GridItemSpec = {
  title: string;
  summary: string;
  href?: string;
  tag?: string;
};

export type SummaryItemSpec = {
  title: string;
  takeaway: string;
  action?: ActionLinkSpec;
};

export type ComparisonColumnSpec = {
  key: string;
  label: string;
};

export type ComparisonRowSpec = {
  label: string;
  cells: readonly string[];
};

export type SequenceMode = "timeline" | "process";

export type VisualReferenceSpec = {
  visualRef: string;
  caption?: string;
  credit?: string;
  alt?: string;
};

export type SequenceItemSpec = {
  label: string;
  title: string;
  summary: string;
  href?: string;
  visualRef?: VisualReferenceSpec;
};

export type WorkedExampleStepSpec = {
  title: string;
  body: string;
  outcome?: string;
};

export type SourceItemSpec = {
  title: string;
  description: string;
  href: string;
  type: string;
  note?: string;
};

export type ReadingMapLinkSpec = {
  label: string;
  href: string;
  note?: string;
  type?: string;
};

export type ReadingMapClusterSpec = {
  title: string;
  summary: string;
  links: readonly ReadingMapLinkSpec[];
};

export type GlossaryTermSpec = {
  term: string;
  definition: string;
  note?: string;
};

type BaseBlockSpec<TType extends string> = {
  type: TType;
  id?: string;
};

export type HeroBlockSpec = BaseBlockSpec<"hero"> & {
  eyebrow?: string;
  title: string;
  dek: string;
  metadata?: readonly MetadataItemSpec[];
  progress?: string;
  actions?: readonly ActionLinkSpec[];
  visualRef?: VisualReferenceSpec;
};

export type WhyItMattersBlockSpec = BaseBlockSpec<"whyItMatters"> & {
  title?: string;
  summary: string;
  stakes: string;
  audience?: string;
  links?: readonly ActionLinkSpec[];
};

export type SectionBlockSpec = BaseBlockSpec<"section"> & {
  id: string;
  eyebrow?: string;
  title: string;
  summary?: string;
  body: string;
  tone?: PanelTone;
};

export type ConceptGridBlockSpec = BaseBlockSpec<"conceptGrid"> & {
  title?: string;
  summary?: string;
  items: readonly GridItemSpec[];
  columns?: number;
};

export type SummaryGridBlockSpec = BaseBlockSpec<"summaryGrid"> & {
  title?: string;
  items: readonly SummaryItemSpec[];
};

export type ComparisonGridBlockSpec = BaseBlockSpec<"comparisonGrid"> & {
  title?: string;
  legend?: string;
  caption?: string;
  columns: readonly ComparisonColumnSpec[];
  rows: readonly ComparisonRowSpec[];
};

export type SequenceTimelineBlockSpec = BaseBlockSpec<"sequenceTimeline"> & {
  title?: string;
  summary?: string;
  mode: SequenceMode;
  items: readonly SequenceItemSpec[];
};

export type WorkedExampleBlockSpec = BaseBlockSpec<"workedExample"> & {
  title?: string;
  prompt: string;
  steps: readonly WorkedExampleStepSpec[];
  result?: string;
  reflection?: string;
  visualRef?: VisualReferenceSpec;
};

export type EditorialAsideBlockSpec = BaseBlockSpec<"editorialAside"> & {
  title?: string;
  body: string;
  tone?: PanelTone;
  icon?: string;
};

export type PullInsightBlockSpec = BaseBlockSpec<"pullInsight"> & {
  quote: string;
  attribution?: string;
  context?: string;
};

export type VisualBreakBlockSpec = BaseBlockSpec<"visualBreak"> & {
  title?: string;
  body?: string;
  tone?: PanelTone;
  visualRef?: VisualReferenceSpec;
};

export type ReflectionPromptBlockSpec = BaseBlockSpec<"reflectionPrompt"> & {
  title?: string;
  prompt: string;
  questions?: readonly string[];
  mode?: "write" | "discuss" | "practice";
  timeEstimate?: string;
};

export type NextStepBlockSpec = BaseBlockSpec<"nextStep"> & {
  title: string;
  summary?: string;
  primaryAction: ActionLinkSpec;
  secondaryAction?: ActionLinkSpec;
  context?: string;
};

export type SourceAnchorGridBlockSpec = BaseBlockSpec<"sourceAnchorGrid"> & {
  title?: string;
  summary?: string;
  items: readonly SourceItemSpec[];
};

export type GlossaryBlockSpec = BaseBlockSpec<"glossary"> & {
  title?: string;
  layout?: "list" | "grid";
  terms: readonly GlossaryTermSpec[];
};

export type ReadingMapGridBlockSpec = BaseBlockSpec<"readingMapGrid"> & {
  title?: string;
  progression?: string;
  clusters: readonly ReadingMapClusterSpec[];
};

export type UnitBlockSpec =
  | HeroBlockSpec
  | WhyItMattersBlockSpec
  | SectionBlockSpec
  | ConceptGridBlockSpec
  | SummaryGridBlockSpec
  | ComparisonGridBlockSpec
  | SequenceTimelineBlockSpec
  | WorkedExampleBlockSpec
  | EditorialAsideBlockSpec
  | PullInsightBlockSpec
  | VisualBreakBlockSpec
  | ReflectionPromptBlockSpec
  | NextStepBlockSpec
  | SourceAnchorGridBlockSpec
  | GlossaryBlockSpec
  | ReadingMapGridBlockSpec;

export type EducationalUnitSpec = {
  id: string;
  kind: "concept" | "assignment" | "reading-map" | "lesson";
  recipe: string;
  title: string;
  summary: string;
  blocks: readonly UnitBlockSpec[];
};

export function isInternalHref(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

export function getBlockTitle(block: UnitBlockSpec) {
  switch (block.type) {
    case "hero":
      return block.title;
    case "section":
    case "conceptGrid":
    case "summaryGrid":
    case "comparisonGrid":
    case "sequenceTimeline":
    case "workedExample":
    case "editorialAside":
    case "visualBreak":
    case "reflectionPrompt":
    case "sourceAnchorGrid":
    case "glossary":
    case "readingMapGrid":
      return block.title;
    case "whyItMatters":
      return block.title ?? "Why it matters";
    case "nextStep":
      return block.title;
    case "pullInsight":
      return block.attribution ?? "Insight";
  }
}
