import { EditorialLayout } from "@/components/editorial-layout";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TonePanel } from "@/components/tone-panel";
import { automationNotes, operatingLoop, qualityBars, readingOrder } from "@/lib/site-content";

export default function ProcessPage() {
  return (
    <EditorialLayout>
      <SiteHeader />

      <TonePanel tone="neutral" className="p-8">
        <SectionHeading
          eyebrow="Process"
          title="One operating loop, with explicit review artifacts."
          body="The project is designed so another maintainer can tell what to read, what to update, and whether work is approved without reconstructing intent from chat history."
        />
        <ol className="mt-8 grid gap-3">
          {operatingLoop.map((step) => (
            <li
              key={step}
              className="rounded-[var(--radius-card)] border border-[var(--border-neutral)] bg-[var(--surface-reading)] px-4 py-3 type-body text-[var(--ink-body)]"
            >
              {step}
            </li>
          ))}
        </ol>
      </TonePanel>

      <section className="grid gap-8 xl:grid-cols-3">
        <TonePanel tone="reflection" className="p-8">
          <SectionHeading
            eyebrow="Read First"
            title="This is the required file order for humans and LLMs."
            body="Reading in the wrong order is the fastest way to act on stale context. The entrypoint is the root README, then the spec index, then the active doctrine and QA rules."
          />
          <ol className="mt-8 space-y-3 type-body text-[var(--ink-body)]">
            {readingOrder.map((item) => (
              <li key={item} className="rounded-[var(--radius-card)] border border-[var(--border-reflection)] bg-[color:rgba(255,255,255,0.62)] px-4 py-3">
                {item}
              </li>
            ))}
          </ol>
        </TonePanel>

        <TonePanel tone="proof" className="p-8">
          <SectionHeading
            eyebrow="Deterministic QA"
            title="The exported site is the audit target."
            body="The build path, browser smoke tests, and Lighthouse checks are all pointed at the exported artifact so the QA system matches the deployable system."
          />
          <ul className="mt-8 space-y-3 type-body text-[var(--ink-body)]">
            {qualityBars.map((item) => (
              <li key={item} className="rounded-[var(--radius-card)] border border-[var(--border-proof)] bg-[color:rgba(255,255,255,0.62)] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </TonePanel>

        <TonePanel tone="next" className="p-8">
          <SectionHeading
            eyebrow="Automation"
            title="The same quality gates now run in GitHub Actions."
            body="Local commands are still the developer entrypoint, but pull requests and main-branch deploys now run the same exported-site checks automatically."
          />
          <ul className="mt-8 space-y-3 type-body text-[var(--ink-body)]">
            {automationNotes.map((item) => (
              <li key={item} className="rounded-[var(--radius-card)] border border-[var(--border-next)] bg-[color:rgba(255,255,255,0.62)] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </TonePanel>
      </section>

      <SiteFooter />
    </EditorialLayout>
  );
}