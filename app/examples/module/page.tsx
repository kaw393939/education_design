import Link from "next/link";

import { CalloutBand } from "@/components/callout-band";
import { ContentGrid } from "@/components/content-grid";
import { EditorialBand } from "@/components/editorial-band";
import { MediaBlock } from "@/components/media-block";
import { PageShell } from "@/components/page-shell";
import { ProseBlock } from "@/components/prose-block";
import { SectionHeading } from "@/components/section-heading";
import { SplitLayout } from "@/components/split-layout";
import { TonePanel } from "@/components/tone-panel";
import { moduleCards } from "@/lib/layout-primitives-content";

export default function ModuleExamplePage() {
  return (
    <PageShell>
      <EditorialBand tone="synthesis" paddingScale="hero">
        <p className="type-meta text-[var(--accent-strong)]">Module overview example</p>
        <h1 className="type-hero measure-hero mt-4 text-[var(--ink-strong)]">A wide overview page can stay calm and directional.</h1>
        <ProseBlock lead className="mt-6">
          <p>
            This module page uses the new shell and layout primitives to show sequence, expectations, and lesson
            structure without dropping back into a custom page frame.
          </p>
        </ProseBlock>
      </EditorialBand>

      <SplitLayout
        ratio="feature"
        primary={
          <ProseBlock>
            <p>
              The module overview needs more horizontal space than a lesson page because it is organizing multiple
              sub-parts at once. PageShell and EditorialBand keep the frame consistent while ContentGrid and
              CalloutBand let the module page move between overview and emphasis cleanly.
            </p>
            <p>
              This proves the system can support a wider, scan-first page without abandoning the same token and
              layout logic used by the lesson and reading-map pages.
            </p>
          </ProseBlock>
        }
        secondary={
          <CalloutBand label="Success criteria" title="The page should answer three questions." tone="proof">
            <ul className="space-y-2 pl-5">
              <li>What is this module trying to help me understand?</li>
              <li>How do the lessons fit together?</li>
              <li>What should I do first?</li>
            </ul>
          </CalloutBand>
        }
      />

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Module cards"
          title="Shared grids now handle dense and sparse overview cards without page-specific rescue wrappers."
          body="The ContentGrid primitive is doing the structural work here, while the cards themselves remain simple instructional summaries."
        />
        <ContentGrid minCardWidth="16rem">
          {moduleCards.map((card) => (
            <TonePanel key={card.title} tone="reading" className="card-shell p-6">
              <h2 className="type-concept text-[var(--ink-strong)]">{card.title}</h2>
              <p className="mt-3 type-body text-[var(--ink-body)]">{card.summary}</p>
            </TonePanel>
          ))}
        </ContentGrid>
      </section>

      <MediaBlock
        alignment="wide"
        tone="proof"
        media={
          <div
            role="img"
            aria-label="Abstract module map showing orientation, sequence, proof, and next step as connected bands"
            className="aspect-[16/9] rounded-[var(--radius-card)] bg-[linear-gradient(135deg,_rgba(125,152,117,0.32),_rgba(239,229,215,0.78),_rgba(228,234,242,0.92))]"
          />
        }
        caption="Placeholder module map"
        credit="Sprint 2 proof artifact"
        annotation="Wide media can now sit inside a predictable frame with caption and note handling already solved."
      />

      <CalloutBand label="Next step" title="Continue into the lesson shell example." tone="next">
        <p>The overview page points to the next instructional job instead of trying to do everything itself.</p>
        <Link href="/examples/lesson" className="action-secondary mt-5 w-fit">
          Open lesson example
        </Link>
      </CalloutBand>
    </PageShell>
  );
}