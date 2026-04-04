import type { PanelTone } from "@/lib/theme-tokens";

import { TonePanel } from "@/components/tone-panel";

type PagePreviewCardProps = {
  title: string;
  purpose: string;
  sections: readonly string[];
  tone: PanelTone;
};

export function PagePreviewCard({ title, purpose, sections, tone }: PagePreviewCardProps) {
  return (
    <TonePanel tone={tone} className="card-shell p-6">
      <p className="type-meta text-[var(--accent-strong)]">Page Recipe Example</p>
      <h3 className="mt-3 type-concept text-[var(--ink-strong)]">{title}</h3>
      <p className="mt-3 type-body text-[var(--ink-body)]">{purpose}</p>
      <ul className="mt-5 space-y-2">
        {sections.map((section) => (
          <li
            key={section}
            className="rounded-[var(--radius-card)] border border-[var(--border-strong)] bg-[color:rgba(255,255,255,0.56)] px-4 py-3 type-caption text-[var(--ink-body)]"
          >
            {section}
          </li>
        ))}
      </ul>
    </TonePanel>
  );
}