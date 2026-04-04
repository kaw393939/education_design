import type { ReactNode } from "react";

import { TonePanel } from "@/components/tone-panel";
import type { PanelTone } from "@/lib/theme-tokens";

type CalloutBandProps = {
  label: string;
  title: string;
  children: ReactNode;
  tone?: PanelTone;
  icon?: ReactNode;
  className?: string;
};

export function CalloutBand({
  label,
  title,
  children,
  tone = "proof",
  icon,
  className = "",
}: CalloutBandProps) {
  return (
    <TonePanel tone={tone} className={`p-6 ${className}`.trim()}>
      <div className="flex items-start gap-4">
        {icon ? <div className="pt-1 text-[var(--accent-strong)]">{icon}</div> : null}
        <div className="min-w-0">
          <p className="type-meta text-[var(--accent-strong)]">{label}</p>
          <h2 className="mt-2 type-concept text-[var(--ink-strong)]">{title}</h2>
          <div className="mt-3 type-body text-[var(--ink-body)]">{children}</div>
        </div>
      </div>
    </TonePanel>
  );
}