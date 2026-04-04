import Link from "next/link";

import { CalloutBand } from "@/components/callout-band";
import { ContentGrid } from "@/components/content-grid";
import { EditorialBand } from "@/components/editorial-band";
import { PageShell } from "@/components/page-shell";
import { ProseBlock } from "@/components/prose-block";
import { SectionHeading } from "@/components/section-heading";
import { SplitLayout } from "@/components/split-layout";
import { TonePanel } from "@/components/tone-panel";
import { automationNotes, operatingLoop, qualityBars, readingOrder } from "@/lib/site-content";

export default function ProcessPage() {
  return (
    <PageShell>
      <EditorialBand tone="synthesis" paddingScale="hero">
        <SectionHeading
          eyebrow="Process"
          title="One operating loop, with explicit review artifacts."
          body="The project is designed so another maintainer can tell what to read, what to update, and whether work is approved without reconstructing intent from chat history." 
        />
        <ProseBlock className="mt-6">
          <p>
            Sprint 2 keeps the same process discipline while moving structural page concerns into reusable shells.
            The process docs remain the system of record, but the app surface now proves the shells and layout
            primitives with real example routes.
          </p>
        </ProseBlock>
      </EditorialBand>

      <SplitLayout
        ratio="feature"
        primary={
          <CalloutBand label="Operating Loop" title="Work is only done when the files say it is done." tone="neutral">
            <ol className="space-y-3 pl-5">
              {operatingLoop.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </CalloutBand>
        }
        secondary={
          <CalloutBand label="Read First" title="This is the required file order for humans and LLMs." tone="reflection">
            <ol className="space-y-3 pl-5">
              {readingOrder.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </CalloutBand>
        }
      />

      <ContentGrid minCardWidth="18rem">
        <CalloutBand label="Deterministic QA" title="The exported site is still the audit target." tone="proof">
          <ul className="space-y-3 pl-5">
            {qualityBars.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CalloutBand>

        <CalloutBand label="Automation" title="The same quality gates now run in GitHub Actions." tone="next">
          <ul className="space-y-3 pl-5">
            {automationNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CalloutBand>

        <TonePanel tone="reading" className="p-6">
          <p className="type-meta text-[var(--signal)]">Where to inspect the proof</p>
          <h2 className="mt-2 type-concept text-[var(--ink-strong)]">Live routes now prove the layout layer.</h2>
          <p className="mt-3 type-body text-[var(--ink-body)]">
            Review the layouts guide for the primitive inventory, then open the lesson, module, and reading-map
            example pages to see the same shell layer serve different jobs.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/layouts" className="action-primary">
              Layout guide
            </Link>
            <Link href="/examples/lesson" className="action-secondary">
              Lesson example
            </Link>
          </div>
        </TonePanel>
      </ContentGrid>
    </PageShell>
  );
}