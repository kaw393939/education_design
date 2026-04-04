import Link from "next/link";

import { CalloutBand } from "@/components/callout-band";
import { EditorialBand } from "@/components/editorial-band";
import { LessonShell } from "@/components/lesson-shell";
import { MediaBlock } from "@/components/media-block";
import { PageShell } from "@/components/page-shell";
import { ProseBlock } from "@/components/prose-block";
import { SectionHeading } from "@/components/section-heading";
import { SplitLayout } from "@/components/split-layout";
import { lessonNavItems } from "@/lib/layout-primitives-content";

export default function LessonExamplePage() {
  return (
    <PageShell maxWidthClassName="max-w-7xl">
      <LessonShell localNav={lessonNavItems} progress="Lesson 2 of 6">
        <EditorialBand tone="reading" paddingScale="hero">
          <p className="type-meta text-[var(--accent-strong)]">Lesson example</p>
          <h1 className="type-hero measure-hero mt-4 text-[var(--ink-strong)]">A content-heavy lesson can stay readable without losing orientation.</h1>
          <ProseBlock lead className="mt-6">
            <p>
              This example proves LessonShell, LocalNav, ProseBlock, SplitLayout, and MediaBlock working together.
              It is intentionally sparse on content sophistication and heavy on structural proof.
            </p>
          </ProseBlock>
        </EditorialBand>

        <section id="orientation" className="space-y-6">
          <SectionHeading
            eyebrow="Orientation"
            title="The lesson shell keeps orientation and reading width in the same frame."
            body="The page can start wide enough for a strong opener, then narrow into readable explanation without changing the outer shell."
          />
          <ProseBlock>
            <p>
              The reading measure is explicit, the shell rhythm is explicit, and the optional navigation sits outside
              the main prose so the content flow remains readable. On smaller screens, that navigation collapses into
              a normal inline block instead of sticky UI that blocks access.
            </p>
          </ProseBlock>
        </section>

        <section id="comparison" className="space-y-6">
          <SectionHeading
            eyebrow="Comparison"
            title="Split layouts handle explanation plus support without assuming both sides are equally dense."
            body="The primary region can stay text-heavy while the secondary region becomes a bounded proof or caution block."
          />
          <SplitLayout
            ratio="feature"
            primary={
              <ProseBlock>
                <p>
                  The primary region holds the core explanation. It can be long-form prose, an ordered sequence, or a
                  worked example narrative. The important part is that the layout primitive owns the relationship
                  between the two regions instead of leaving every page to improvise it.
                </p>
              </ProseBlock>
            }
            secondary={
              <CalloutBand label="Proof" title="The secondary region can be sparse without breaking the layout." tone="proof">
                <p>
                  This side can hold evidence, a short example, or even be omitted entirely. The primitive handles the
                  single-column fallback and keeps the source order sensible.
                </p>
              </CalloutBand>
            }
          />
        </section>

        <section id="worked-example" className="space-y-6">
          <SectionHeading
            eyebrow="Worked example"
            title="Media and annotation now travel as one structural unit."
            body="A lesson often needs a visual bridge between explanation and action. MediaBlock solves the grouping so the page only needs to decide the instructional purpose."
          />
          <MediaBlock
            alignment="split"
            tone="proof"
            media={
              <div
                role="img"
                aria-label="Annotated layout diagram showing wide intro, narrow prose, and side navigation"
                className="aspect-[16/10] rounded-[var(--radius-card)] bg-[linear-gradient(135deg,_rgba(125,152,117,0.3),_rgba(223,233,225,0.88))]"
              />
            }
            caption="Placeholder lesson diagram"
            credit="Sprint 2 structural proof"
            annotation={
              <p>
                The layout primitive is doing the hard work here: figure grouping, caption handling, and the split
                relationship between the visual and the note. The page content only supplies the instructional meaning.
              </p>
            }
          />
        </section>

        <section id="reflection" className="space-y-6">
          <SectionHeading
            eyebrow="Reflection"
            title="The lesson still ends with a bounded reflection and next action."
            body="The shell and layout layer should support the instructional arc, not replace it."
          />
          <CalloutBand label="Reflection" title="Ask what the layout is now responsible for." tone="reflection">
            <p>
              Which parts of this page are now solved by reusable structure, and which parts still belong to future
              educational content primitives?
            </p>
            <Link href="/examples/reading-map" className="action-secondary mt-5 w-fit">
              Open reading-map example
            </Link>
          </CalloutBand>
        </section>
      </LessonShell>
    </PageShell>
  );
}