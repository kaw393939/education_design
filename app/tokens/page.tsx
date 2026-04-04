import { PagePreviewCard } from "@/components/page-preview-card";
import { EditorialLayout } from "@/components/editorial-layout";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TonePanel } from "@/components/tone-panel";
import { colorRoles, layoutRoles, pageTypeExamples, typographyRoles } from "@/lib/theme-tokens";

export default function TokensPage() {
  return (
    <EditorialLayout>
      <SiteHeader />

      <TonePanel tone="emphasis" className="p-8 lg:p-12">
        <p className="type-meta text-[var(--accent-strong)]">Sprint 1 Implementation</p>
        <h1 className="type-hero measure-hero mt-4 text-[var(--ink-strong)]">
          Semantic tokens now define the visual language instead of one-off surface choices.
        </h1>
        <p className="type-body measure-reading mt-6 text-[var(--ink-body)]">
          This route is the live token documentation for the current scaffold. It shows the named color roles,
          typography roles, layout rules, and page-type previews that all share the same system rather than
          page-specific magic numbers.
        </p>
      </TonePanel>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Color Roles"
          title="Each state has a job, not just a color."
          body="Reading, proof, reflection, synthesis, warning, and next-step surfaces are intentionally separated so pages can guide attention without drifting into promo styling."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {colorRoles.map((role) => (
            <TonePanel key={role.name} tone={role.tone} className="card-shell p-6">
              <p className="type-meta text-[var(--accent-strong)]">{role.token}</p>
              <h2 className="mt-3 type-concept text-[var(--ink-strong)]">{role.name}</h2>
              <p className="mt-3 type-body text-[var(--ink-body)]">{role.guidance}</p>
            </TonePanel>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <TonePanel tone="reading" className="p-8">
          <SectionHeading
            eyebrow="Typography Roles"
            title="Hierarchy is explicit, not implied."
            body="Each text role is named for what it does in the learning flow so the same system can style lessons, module pages, and reading maps consistently."
          />
          <div className="mt-8 space-y-4">
            {typographyRoles.map((role) => (
              <div
                key={role.name}
                className="rounded-[var(--radius-card)] border border-[var(--border-neutral)] bg-[color:rgba(255,255,255,0.6)] px-4 py-4"
              >
                <p className="type-meta text-[var(--accent-strong)]">{role.token}</p>
                <h3 className="mt-2 type-concept text-[var(--ink-strong)]">{role.name}</h3>
                <p className="mt-2 type-caption text-[var(--ink-body)]">{role.sample}</p>
              </div>
            ))}
          </div>
        </TonePanel>

        <TonePanel tone="proof" className="p-8">
          <SectionHeading
            eyebrow="Layout Rules"
            title="Spacing, measure, radius, and motion now have named contracts."
            body="The token layer makes it harder to solve layout problems with ad hoc numbers and easier to keep the system coherent as more pages and primitives arrive."
          />
          <div className="mt-8 space-y-4">
            {layoutRoles.map((role) => (
              <div
                key={role.name}
                className="rounded-[var(--radius-card)] border border-[var(--border-proof)] bg-[color:rgba(255,255,255,0.58)] px-4 py-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="type-concept text-[var(--ink-strong)]">{role.name}</p>
                  <p className="type-meta text-[var(--accent-strong)]">{role.value}</p>
                </div>
                <p className="mt-2 type-caption text-[var(--ink-body)]">{role.guidance}</p>
              </div>
            ))}
          </div>
        </TonePanel>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Page-Type Examples"
          title="The same token layer can style different learning jobs."
          body="These previews are not full recipes, but they prove that lesson pages, module overviews, and reading maps can share one semantic visual system."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {pageTypeExamples.map((page) => (
            <PagePreviewCard
              key={page.title}
              title={page.title}
              purpose={page.purpose}
              sections={page.sections}
              tone={page.tone}
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </EditorialLayout>
  );
}