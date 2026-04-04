import { EditorialLayout } from "@/components/editorial-layout";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TonePanel } from "@/components/tone-panel";
import { completedItems, pendingItems } from "@/lib/site-content";

export default function StatusPage() {
  return (
    <EditorialLayout>
      <SiteHeader />

      <TonePanel tone="neutral" className="p-8">
        <SectionHeading
          eyebrow="Status"
          title="What is actually done versus what is still planned."
          body="This page reflects the same distinction the root README enforces: existing files and verified configuration count as done; planned architecture without implementation does not."
        />
      </TonePanel>

      <section className="grid gap-8 lg:grid-cols-2">
        <TonePanel tone="proof" className="p-8">
          <SectionHeading
            eyebrow="Completed"
            title="Baseline pieces now present in the repository."
            body="These items are either active documents, committed configs, or executable project infrastructure that now exists in the filesystem."
          />
          <ul className="mt-8 space-y-3 type-body text-[var(--ink-body)]">
            {completedItems.map((item) => (
              <li key={item} className="rounded-[var(--radius-card)] border border-[var(--border-proof)] bg-[color:rgba(255,255,255,0.65)] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </TonePanel>

        <TonePanel tone="warning" className="p-8">
          <SectionHeading
            eyebrow="Still Pending"
            title="The system is executable, but the educational product is not finished."
            body="The scaffold exists to support the next real implementation work, not to fake completion. These remain active implementation targets."
          />
          <ul className="mt-8 space-y-3 type-body text-[var(--ink-body)]">
            {pendingItems.map((item) => (
              <li key={item} className="rounded-[var(--radius-card)] border border-[var(--border-warning)] bg-[color:rgba(255,255,255,0.65)] px-4 py-3">
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