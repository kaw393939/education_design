import { CalloutBand } from "@/components/callout-band";
import { ContentGrid } from "@/components/content-grid";
import { EditorialBand } from "@/components/editorial-band";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { SplitLayout } from "@/components/split-layout";
import { TonePanel } from "@/components/tone-panel";
import { completedItems, pendingItems } from "@/lib/site-content";

export default function StatusPage() {
  return (
    <PageShell>
      <EditorialBand tone="proof" paddingScale="hero">
        <SectionHeading
          eyebrow="Status"
          title="What is actually done versus what is still planned."
          body="This page reflects the same distinction the root README enforces: existing files and verified configuration count as done; planned architecture without implementation does not."
        />
      </EditorialBand>

      <SplitLayout
        primary={
          <CalloutBand label="Completed" title="Baseline pieces now present in the repository." tone="proof">
            <ContentGrid minCardWidth="14rem" className="mt-4">
              {completedItems.map((item) => (
                <TonePanel key={item} tone="reading" className="card-shell p-4">
                  <p className="type-caption text-[var(--ink-body)]">{item}</p>
                </TonePanel>
              ))}
            </ContentGrid>
          </CalloutBand>
        }
        secondary={
          <CalloutBand
            label="Still Pending"
            title="The system is executable, but the educational product is not finished."
            tone="warning"
          >
            <ul className="space-y-3 pl-5">
              {pendingItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CalloutBand>
        }
      />
    </PageShell>
  );
}