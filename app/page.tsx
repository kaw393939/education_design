import Link from "next/link";

import { PagePreviewCard } from "@/components/page-preview-card";
import { EditorialLayout } from "@/components/editorial-layout";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TonePanel } from "@/components/tone-panel";
import { completedItems, operatingLoop, qualityBars, topLevelCards } from "@/lib/site-content";
import { pageTypeExamples } from "@/lib/theme-tokens";

export default function HomePage() {
  return (
    <EditorialLayout>
      <SiteHeader />

      <TonePanel tone="emphasis" className="grid gap-6 p-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-end lg:p-12">
        <div className="measure-wide">
          <p className="type-meta text-[var(--accent-strong)]">
            Executable Phase 1 Baseline
          </p>
          <h1 className="type-hero measure-hero mt-4 text-balance text-[var(--ink-strong)]">
            Documentation, QA, and static export now share one runnable project.
          </h1>
          <p className="type-body measure-reading mt-6 text-[var(--ink-body)] sm:text-[1.125rem]">
            This scaffold is the bridge between the active spec set and the first real implementation work.
            It keeps the repo static-first, gives Playwright and Lighthouse an exported artifact to audit, and
            makes the process visible enough that another maintainer or LLM can continue without guesswork.
          </p>
        </div>

        <div className="card-shell rounded-[var(--radius-card)] border border-[var(--border-strong)] bg-[color:rgba(255,255,255,0.62)] p-6">
          <p className="type-meta text-[var(--signal)]">Current focus</p>
          <ul className="mt-4 space-y-3 type-caption text-[var(--ink-body)]">
            <li>Static export with base-path-safe Next.js configuration.</li>
            <li>Committed Lighthouse CI config against exported output.</li>
            <li>Semantic token system covering reading, proof, reflection, and next-step states.</li>
            <li>GitHub Actions workflows for automated quality checks and Pages deploy.</li>
          </ul>
        </div>
      </TonePanel>

      <section className="grid gap-4 md:grid-cols-3">
        {topLevelCards.map((card) => (
          <TonePanel key={card.title} tone="neutral" className="card-shell p-6">
            <h2 className="type-concept text-[var(--ink-strong)]">{card.title}</h2>
            <p className="type-body mt-3 text-[var(--ink-body)]">{card.description}</p>
          </TonePanel>
        ))}
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Token Proof"
          title="Three page jobs, one semantic visual system."
          body="Sprint 1 is now live in the scaffold: the same token layer can style lesson pages, module overviews, and reading maps without falling back to page-specific decoration."
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

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <TonePanel tone="neutral" className="p-8">
          <SectionHeading
            eyebrow="Operating Loop"
            title="The process is part of the product baseline."
            body="Implementation is only valid when it leaves behind the review trail the specs require. The files define what is done, what is approved, and what still needs work."
          />
          <ol className="mt-8 space-y-4 type-body text-[var(--ink-body)]">
            {operatingLoop.map((step) => (
              <li key={step} className="rounded-[var(--radius-card)] border border-[var(--border-neutral)] bg-[var(--surface-reading)] px-4 py-3">
                {step}
              </li>
            ))}
          </ol>
        </TonePanel>

        <TonePanel tone="proof" className="p-8">
          <SectionHeading
            eyebrow="Quality Gates"
            title="Exported output is the thing we trust."
            body="The dev server is useful for iteration, but it is not the artifact we publish. Verification is anchored to the exported site so the build path and the QA path stay aligned."
          />
          <ul className="mt-8 space-y-3 type-body text-[var(--ink-body)]">
            {qualityBars.map((item) => (
              <li key={item} className="rounded-[var(--radius-card)] border border-[var(--border-proof)] bg-[color:rgba(255,255,255,0.65)] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </TonePanel>
      </section>

      <TonePanel tone="reading" className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <SectionHeading
            eyebrow="Completed Now"
            title="The repo has moved past pure planning."
            body="The scaffold is intentionally narrow, but it is enough to start implementation under real build, test, and exported-site QA conditions."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {completedItems.map((item) => (
              <li
                key={item}
                className="rounded-[var(--radius-card)] border border-[var(--border-neutral)] bg-[color:rgba(255,255,255,0.72)] px-4 py-3 type-caption text-[var(--ink-body)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/tokens" className="action-primary">
            Review token system
          </Link>
          <Link href="/process" className="action-secondary">
            Review the process
          </Link>
          <Link href="/status" className="action-secondary">
            See status snapshot
          </Link>
        </div>
      </TonePanel>

      <SiteFooter />
    </EditorialLayout>
  );
}