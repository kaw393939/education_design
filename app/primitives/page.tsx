import { CalloutBand } from "@/components/callout-band";
import { ContentGrid } from "@/components/content-grid";
import { EditorialBand } from "@/components/editorial-band";
import { LessonShell } from "@/components/lesson-shell";
import { PageShell } from "@/components/page-shell";
import { ProseBlock } from "@/components/prose-block";
import { SectionHeading } from "@/components/section-heading";
import { TonePanel } from "@/components/tone-panel";
import { UnitRenderer } from "@/components/educational-primitives";
import {
  assignmentUnit,
  conceptUnit,
  contractBoundaryNotes,
  primitiveGuideNavItems,
  primitiveMapNotes,
  readingMapUnit,
} from "@/lib/educational-primitives-content";

export default function PrimitivesPage() {
  return (
    <PageShell maxWidthClassName="max-w-7xl">
      <LessonShell localNav={primitiveGuideNavItems} progress="Sprint 3">
        <EditorialBand tone="emphasis" paddingScale="hero">
          <p className="type-meta">Sprint 3 Implementation</p>
          <h1 className="type-hero measure-hero mt-4 text-balance">
            Pedagogical primitives and unit-driven rendering now share one contract.
          </h1>
          <ProseBlock lead className="mt-6">
            <p>
              This route is the live proof for Sprint 3. It shows the contract boundary, the pedagogical primitive map,
              and three different units rendered from structured blocks instead of ad hoc page wiring.
            </p>
          </ProseBlock>
        </EditorialBand>

        <section id="contract-boundary" className="space-y-6">
          <SectionHeading
            eyebrow="Contract Boundary"
            title="Serialized content stays simple and the renderer derives runtime structure."
            body="These notes make the implementation rule explicit: unit payloads store content fields and references, while the renderer maps those payloads into shared component props at runtime."
          />
          <ContentGrid minCardWidth="17rem">
            {contractBoundaryNotes.map((note) => (
              <TonePanel key={note.title} tone={note.tone} className="card-shell p-6">
                <h2 className="type-concept">{note.title}</h2>
                <p className="mt-3 type-body">{note.summary}</p>
              </TonePanel>
            ))}
          </ContentGrid>
        </section>

        <section id="primitive-map" className="space-y-6">
          <SectionHeading
            eyebrow="Primitive Map"
            title="The layout system now carries structure and the educational layer now carries pedagogy."
            body="These blocks are intentionally narrow. Their job is to orient, explain, compare, exemplify, reflect, or guide, not to act as decorative wrappers."
          />
          <ContentGrid minCardWidth="18rem">
            {primitiveMapNotes.map((note) => (
              <TonePanel key={note.name} tone={note.tone} className="card-shell p-6">
                <p className="type-meta">Pedagogical layer</p>
                <h2 className="mt-3 type-concept">{note.name}</h2>
                <p className="mt-3 type-body">{note.purpose}</p>
              </TonePanel>
            ))}
          </ContentGrid>
        </section>

        <section id="unit-renderer" className="space-y-6">
          <CalloutBand label="Unit renderer" title="One renderer now maps stored blocks into runtime component props." tone="proof">
            <p>
              The units below are stored as ordered block arrays with serializable payloads. The page does not hand-compose
              their layout. It passes the blocks through a single renderer that translates actions, visual references,
              and content fields into the shared primitive layer.
            </p>
          </CalloutBand>
        </section>

        <section id="concept-unit" className="space-y-6">
          <UnitRenderer unit={conceptUnit} headingLevel={2} />
        </section>

        <section id="assignment-unit" className="space-y-6">
          <UnitRenderer unit={assignmentUnit} headingLevel={2} />
        </section>

        <section id="reading-map-unit" className="space-y-6">
          <UnitRenderer unit={readingMapUnit} headingLevel={2} />
        </section>
      </LessonShell>
    </PageShell>
  );
}