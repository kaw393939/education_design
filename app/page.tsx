import Link from "next/link";

import { CalloutBand } from "@/components/callout-band";
import { ContentGrid } from "@/components/content-grid";
import { EditorialBand } from "@/components/editorial-band";
import { SectionHeading } from "@/components/section-heading";
import { PageShell } from "@/components/page-shell";
import { ProseBlock } from "@/components/prose-block";
import { SplitLayout } from "@/components/split-layout";
import { TonePanel } from "@/components/tone-panel";
import { examplePageCards } from "@/lib/layout-primitives-content";
import { completedItems, operatingLoop, qualityBars, topLevelCards } from "@/lib/site-content";

export default function HomePage() {
  return (
    <PageShell>
      <EditorialBand tone="emphasis" paddingScale="hero">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-end">
          <div className="measure-wide">
            <p className="type-meta text-[var(--accent-strong)]">
              Sprint 3 Educational Primitives
            </p>
            <h1 className="type-hero measure-hero mt-4 text-balance text-[var(--ink-strong)]">
              Documentation, QA, render contracts, and educational primitives now share one system.
            </h1>
            <ProseBlock lead className="mt-6">
              <p>
                The app is no longer proving itself only with shell-level layout. Sprint 3 adds the pedagogical layer:
                unit-driven blocks now map into reusable heroes, sections, comparisons, examples, summaries,
                reading maps, and next-step components through one shared renderer.
              </p>
            </ProseBlock>
          </div>

          <CalloutBand label="Current focus" title="The educational layer is now explicit." tone="next">
            <ul className="space-y-2 pl-5">
              <li>Structured block payloads now map into first-class educational primitives.</li>
              <li>Shared sub-shapes keep actions, metadata, and source links from drifting across components.</li>
              <li>The new primitives guide proves concept, assignment, and reading-map units render from one contract.</li>
              <li>Exported-site QA still gates the result in both root-path and Pages-style base-path modes.</li>
            </ul>
          </CalloutBand>
        </div>
      </EditorialBand>

      <ContentGrid minCardWidth="17rem">
        {topLevelCards.map((card) => (
          <TonePanel key={card.title} tone="neutral" className="card-shell p-6">
            <h2 className="type-concept text-[var(--ink-strong)]">{card.title}</h2>
            <p className="type-body mt-3 text-[var(--ink-body)]">{card.description}</p>
          </TonePanel>
        ))}
      </ContentGrid>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Proof Routes"
          title="Layout proof pages remain, and the new primitives guide adds unit-driven rendering proof."
          body="The route set now proves both structural reuse and pedagogical reuse: the shell system still carries page layout, while the primitives guide renders structured units through the new content layer." 
        />
        <ContentGrid minCardWidth="18rem">
          {examplePageCards.map((page) => (
            <TonePanel key={page.title} tone={page.tone} className="card-shell p-6">
              <p className="type-meta text-[var(--accent-strong)]">Layout proof page</p>
              <h2 className="mt-3 type-concept text-[var(--ink-strong)]">{page.title}</h2>
              <p className="mt-3 type-body text-[var(--ink-body)]">{page.summary}</p>
              <Link href={page.href} className="action-secondary mt-5 w-fit">
                Open example
              </Link>
            </TonePanel>
          ))}
        </ContentGrid>
        <TonePanel tone="proof" className="p-6">
          <p className="type-meta text-[var(--accent-strong)]">New guide route</p>
          <h2 className="mt-3 type-concept text-[var(--ink-strong)]">Primitives guide</h2>
          <p className="mt-3 type-body text-[var(--ink-body)]">
            The new guide shows the shared contract layer, then renders concept, assignment, and reading-map units from
            ordered block arrays instead of hand-composed page files.
          </p>
          <Link href="/primitives" className="action-secondary mt-5 w-fit">
            Open primitives guide
          </Link>
        </TonePanel>
      </section>

      <SplitLayout
        ratio="feature"
        primary={
          <CalloutBand label="Operating Loop" title="The process is part of the product baseline." tone="neutral">
            <ol className="space-y-3 pl-5">
              {operatingLoop.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </CalloutBand>
        }
        secondary={
          <CalloutBand label="Quality Gates" title="Exported output is still the thing we trust." tone="proof">
            <ul className="space-y-3 pl-5">
              {qualityBars.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/primitives" className="action-secondary mt-5 w-fit">
              Review educational primitives
            </Link>
          </CalloutBand>
        }
      />

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Completed Now"
          title="The repo has moved from shell proof into unit-driven pedagogical proof."
          body="Sprint 3 adds the contract types, block renderer, and educational primitives that sit on top of the shell system while keeping the validation path rooted in exported output." 
        />
        <SplitLayout
          ratio="feature"
          primary={
            <ContentGrid minCardWidth="15rem">
              {completedItems.map((item) => (
                <TonePanel key={item} tone="reading" className="card-shell p-5">
                  <p className="type-caption text-[var(--ink-body)]">{item}</p>
                </TonePanel>
              ))}
            </ContentGrid>
          }
          secondary={
            <TonePanel tone="next" className="p-6">
              <p className="type-meta text-[var(--signal)]">Next routes to review</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/primitives" className="action-primary">
                  Primitives guide
                </Link>
                <Link href="/layouts" className="action-primary">
                  Layout guide
                </Link>
                <Link href="/examples/lesson" className="action-secondary">
                  Lesson example
                </Link>
              </div>
            </TonePanel>
          }
        />
      </section>
    </PageShell>
  );
}