import Link from "next/link";

import { CalloutBand } from "@/components/callout-band";
import { ContentGrid } from "@/components/content-grid";
import { EditorialBand } from "@/components/editorial-band";
import { LocalNav } from "@/components/local-nav";
import { MediaBlock } from "@/components/media-block";
import { PageShell } from "@/components/page-shell";
import { ProseBlock } from "@/components/prose-block";
import { SectionHeading } from "@/components/section-heading";
import { SplitLayout } from "@/components/split-layout";
import { TonePanel } from "@/components/tone-panel";
import { examplePageCards, layoutPrimitiveNotes } from "@/lib/layout-primitives-content";

const layoutGuideNav = [
  { id: "frame-rules", label: "Frame rules", description: "How shell width and prose width coexist." },
  { id: "primitive-map", label: "Primitive map", description: "What each reusable primitive is for." },
  { id: "example-routes", label: "Example routes", description: "Which routes prove the primitives in practice." },
  { id: "media-proof", label: "Media proof", description: "How media, annotation, and callouts fit together." },
];

export default function LayoutsPage() {
  return (
    <PageShell>
      <EditorialBand tone="synthesis" paddingScale="hero">
        <p className="type-meta text-[var(--accent-strong)]">Sprint 2 Implementation</p>
        <h1 className="type-hero measure-hero mt-4 text-[var(--ink-strong)]">
          Reusable shells and layout primitives now carry the structural work.
        </h1>
        <ProseBlock lead className="mt-6">
          <p>
            This route is the live guide for Sprint 2. It explains the frame logic, shows the primitive map,
            and points to three different page types assembled from the same shell and layout system.
          </p>
        </ProseBlock>
      </EditorialBand>

      <SplitLayout
        ratio="feature"
        stackAt="xl"
        primary={
          <div className="space-y-12">
            <section id="frame-rules" className="space-y-6">
              <SectionHeading
                eyebrow="Frame Rules"
                title="Wide bands and reading-width blocks now live in one deliberate relationship."
                body="PageShell keeps the outer frame and shared rhythm stable, while ProseBlock keeps long-form explanation at readable measure. EditorialBand handles wider structural emphasis without forcing pages to invent new wrappers."
              />
              <SplitLayout
                ratio="feature"
                primary={
                  <CalloutBand label="PageShell" title="The frame owns header, footer, skip link, and page rhythm." tone="reading">
                    Top-level pages should not decide their own outer width, background, or shell padding. That work is now centralized.
                  </CalloutBand>
                }
                secondary={
                  <CalloutBand label="ProseBlock" title="Reading-width content stays bounded without shrinking the whole page." tone="proof">
                    Long-form sections land at `measure-reading`, while bands, grids, and media can occupy wider structures on the same page.
                  </CalloutBand>
                }
              />
            </section>

            <section id="primitive-map" className="space-y-6">
              <SectionHeading
                eyebrow="Primitive Map"
                title="Each primitive now has a clear structural job."
                body="These notes match the Sprint 2 brief: shells for frame logic, prose and bands for content rhythm, grids and splits for structure, and optional local navigation for long pages."
              />
              <ContentGrid minCardWidth="17rem">
                {layoutPrimitiveNotes.map((note) => (
                  <TonePanel key={note.name} tone={note.tone} className="card-shell p-6">
                    <p className="type-meta text-[var(--accent-strong)]">Layout primitive</p>
                    <h2 className="mt-3 type-concept text-[var(--ink-strong)]">{note.name}</h2>
                    <p className="mt-3 type-body text-[var(--ink-body)]">{note.purpose}</p>
                    <p className="mt-4 type-caption text-[var(--ink-muted)]">{note.proof}</p>
                  </TonePanel>
                ))}
              </ContentGrid>
            </section>

            <section id="example-routes" className="space-y-6">
              <SectionHeading
                eyebrow="Example Routes"
                title="Three different page types now prove the same primitive system."
                body="The goal was not a component gallery. The goal was showing that the same shell layer can support different instructional jobs without page-specific layout hacks."
              />
              <ContentGrid minCardWidth="18rem">
                {examplePageCards.map((page) => (
                  <TonePanel key={page.title} tone={page.tone} className="card-shell p-6">
                    <h2 className="type-concept text-[var(--ink-strong)]">{page.title}</h2>
                    <p className="mt-3 type-body text-[var(--ink-body)]">{page.summary}</p>
                    <Link href={page.href} className="action-secondary mt-5 w-fit">
                      Open route
                    </Link>
                  </TonePanel>
                ))}
              </ContentGrid>
            </section>

            <section id="media-proof" className="space-y-6">
              <SectionHeading
                eyebrow="Media Proof"
                title="Media, caption, and annotation now ship as one export-safe primitive."
                body="MediaBlock handles the grouping, while SplitLayout and CalloutBand provide the structural relationship between the visual and the supporting explanation."
              />
              <MediaBlock
                alignment="split"
                tone="proof"
                media={
                  <div
                    role="img"
                    aria-label="Abstract structural diagram showing shell, band, and prose layers stacking together"
                    className="aspect-[16/10] rounded-[var(--radius-card)] bg-[linear-gradient(135deg,_rgba(125,152,117,0.35),_rgba(228,234,242,0.85))]"
                  />
                }
                caption="Placeholder structural visual"
                credit="Used to prove spacing, caption, and annotation behavior"
                annotation={
                  <p>
                    The goal here is not finished content art. It is proving that a page can place a visual, caption,
                    and explanatory note together without inventing a one-off figure wrapper.
                  </p>
                }
              />
            </section>
          </div>
        }
        secondary={<LocalNav items={layoutGuideNav} title="Layout guide" progress="Sprint 2" />}
      />
    </PageShell>
  );
}