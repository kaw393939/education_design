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
import { readingMapClusters } from "@/lib/layout-primitives-content";

export default function ReadingMapExamplePage() {
  return (
    <PageShell>
      <EditorialBand tone="next" paddingScale="hero">
        <p className="type-meta text-[var(--accent-strong)]">Reading-map example</p>
        <h1 className="type-hero measure-hero mt-4 text-[var(--ink-strong)]">A resource map can guide movement without turning into a directory dump.</h1>
        <ProseBlock lead className="mt-6">
          <p>
            This example uses the same PageShell, ContentGrid, CalloutBand, and MediaBlock layer to support a
            reading-map job instead of a lesson or overview job.
          </p>
        </ProseBlock>
      </EditorialBand>

      <SplitLayout
        ratio="feature"
        primary={
          <ProseBlock>
            <p>
              A reading map is structurally different from a lesson. It needs to cluster sources, explain order, and
              preserve a strong next action without pretending to be a narrative walkthrough.
            </p>
          </ProseBlock>
        }
        secondary={
          <CalloutBand label="Suggested order" title="Guide the first pass, then deepen." tone="reflection">
            <ol className="space-y-2 pl-5">
              <li>Read the foundation spec.</li>
              <li>Check the active QA artifacts.</li>
              <li>Only then move into the next sprint brief.</li>
            </ol>
          </CalloutBand>
        }
      />

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Source clusters"
          title="The same grid primitive can hold resource clusters without hardcoded card wrappers."
          body="Sparse and dense clusters both collapse to one readable column on small screens." 
        />
        <ContentGrid minCardWidth="17rem">
          {readingMapClusters.map((cluster) => (
            <TonePanel key={cluster.title} tone="reading" className="card-shell p-6">
              <h2 className="type-concept text-[var(--ink-strong)]">{cluster.title}</h2>
              <p className="mt-3 type-body text-[var(--ink-body)]">{cluster.summary}</p>
              <ul className="mt-4 space-y-2 pl-5 type-caption text-[var(--ink-body)]">
                {cluster.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </TonePanel>
          ))}
        </ContentGrid>
      </section>

      <MediaBlock
        alignment="wide"
        tone="reflection"
        media={
          <div
            role="img"
            aria-label="Annotated reading map showing clustered source paths and suggested sequence"
            className="aspect-[16/8] rounded-[var(--radius-card)] bg-[linear-gradient(135deg,_rgba(239,229,215,0.86),_rgba(230,239,227,0.92))]"
          />
        }
        caption="Placeholder reading-map visual"
        credit="Sprint 2 structural proof"
        annotation="The page can support a wide contextual visual without abandoning the same shell and spacing rules used by the lesson and module examples."
      />

      <CalloutBand label="Next step" title="Return to the layout guide or continue into future content primitives." tone="next">
        <p>The structural work is now in reusable primitives. The next sprint can build richer instructional primitives on top of this layer.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/layouts" className="action-primary">
            Back to layout guide
          </Link>
          <Link href="/process" className="action-secondary">
            Review process
          </Link>
        </div>
      </CalloutBand>
    </PageShell>
  );
}