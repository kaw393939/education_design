import type { LocalNavItem } from "@/components/local-nav";
import type { PanelTone } from "@/lib/theme-tokens";

export const layoutPrimitiveNotes: Array<{
  name: string;
  tone: PanelTone;
  purpose: string;
  proof: string;
}> = [
  {
    name: "PageShell",
    tone: "reading",
    purpose: "Provides the outer frame, background, skip link, header, footer, and shared width rules.",
    proof: "Used by the overview, process, status, token, layout, and example routes.",
  },
  {
    name: "LessonShell",
    tone: "emphasis",
    purpose: "Pairs reading-width lesson content with optional local navigation and progress context.",
    proof: "Used by the lesson example to combine prose, callouts, media, and local navigation.",
  },
  {
    name: "ProseBlock",
    tone: "reading",
    purpose: "Standardizes readable text measure and section rhythm for long-form explanation.",
    proof: "Used in lesson, module, and reading-map examples for content-heavy sections.",
  },
  {
    name: "EditorialBand",
    tone: "synthesis",
    purpose: "Creates wide structural bands that still align inner content to the page system.",
    proof: "Used for page introductions and transitions without page-specific wrapper hacks.",
  },
  {
    name: "SplitLayout",
    tone: "proof",
    purpose: "Pairs related regions such as explanation plus example or media plus annotation.",
    proof: "Used for worked examples, process explanations, and layout notes.",
  },
  {
    name: "ContentGrid",
    tone: "neutral",
    purpose: "Builds responsive card grids that collapse cleanly without page-specific rescue wrappers.",
    proof: "Used for home cards, lesson maps, module cards, and reading clusters.",
  },
  {
    name: "CalloutBand",
    tone: "warning",
    purpose: "Surfaces bounded proof, warning, reflection, or next-step notes with consistent structure.",
    proof: "Used across process, lesson, and reading-map flows for focused instructional emphasis.",
  },
  {
    name: "MediaBlock",
    tone: "proof",
    purpose: "Groups visual media, caption, credit, and annotation in one export-safe primitive.",
    proof: "Used in the lesson and reading-map examples with captioned placeholder visuals.",
  },
  {
    name: "LocalNav",
    tone: "next",
    purpose: "Provides optional on-page orientation that stays readable and keyboard reachable on small screens.",
    proof: "Used in the lesson example and the layouts route to prove optional sticky behavior.",
  },
];

export const examplePageCards: Array<{
  title: string;
  href: string;
  tone: PanelTone;
  summary: string;
}> = [
  {
    title: "Module Overview Example",
    href: "/examples/module",
    tone: "synthesis",
    summary: "Shows a wide overview shell, concept grid, proof band, and next-step transition.",
  },
  {
    title: "Lesson Example",
    href: "/examples/lesson",
    tone: "reading",
    summary: "Shows LessonShell, LocalNav, ProseBlock, SplitLayout, MediaBlock, and reflection framing.",
  },
  {
    title: "Reading Map Example",
    href: "/examples/reading-map",
    tone: "next",
    summary: "Shows resource clustering, callout guidance, and export-safe navigation through source groups.",
  },
];

export const lessonNavItems: LocalNavItem[] = [
  { id: "orientation", label: "Orientation", description: "What this lesson is for and why it matters." },
  { id: "comparison", label: "Comparison", description: "How wide and narrow layouts cooperate." },
  { id: "worked-example", label: "Worked example", description: "A split layout and media treatment." },
  { id: "reflection", label: "Reflection", description: "How the shell ends with a next action." },
];

export const moduleCards = [
  {
    title: "Orientation and promise",
    summary: "How the module frames its outcome before diving into detail.",
  },
  {
    title: "Structural pathway",
    summary: "How the lessons relate to each other and why that order matters.",
  },
  {
    title: "Proof and expectations",
    summary: "How the page uses evidence, success criteria, and next steps together.",
  },
];

export const readingMapClusters = [
  {
    title: "Core architecture",
    summary: "Read the foundation spec, then the operating runbook, then the planning and QA rules.",
    items: ["Foundation spec", "Operating runbook", "Planning QA spec"],
  },
  {
    title: "Implementation evidence",
    summary: "Use the QA artifacts to confirm what was actually implemented and approved.",
    items: ["Scaffold implementation QA", "Sprint 1 implementation QA", "Planning artifacts"],
  },
  {
    title: "Forward work",
    summary: "Use the sprint briefs as the work queue, not as proof that work is already done.",
    items: ["Sprint 2 brief", "Sprint 3 brief", "Deployment spec"],
  },
];