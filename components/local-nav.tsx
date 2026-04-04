import type { ReactNode } from "react";

export type LocalNavItem = {
  id: string;
  label: string;
  description?: string;
  current?: boolean;
};

type LocalNavProps = {
  items: readonly LocalNavItem[];
  title?: string;
  progress?: ReactNode;
  sticky?: boolean;
  className?: string;
};

export function LocalNav({
  items,
  title = "On this page",
  progress,
  sticky = true,
  className = "",
}: LocalNavProps) {
  return (
    <nav
      aria-label={title}
      className={`panel-shell panel-reading p-5 ${sticky ? "lg:sticky lg:top-6" : ""} ${className}`.trim()}
    >
      {progress ? <p className="type-meta text-[var(--signal)]">{progress}</p> : null}
      <h2 className="mt-2 type-concept text-[var(--ink-strong)]">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.id} className="rounded-[var(--radius-card)] border border-[var(--border-neutral)] bg-[rgba(255,255,255,0.62)] px-4 py-3">
            <a
              href={`#${item.id}`}
              aria-current={item.current ? "location" : undefined}
              className="type-caption font-semibold text-[var(--ink-strong)] underline-offset-4 transition hover:text-[var(--accent-strong)] hover:underline"
            >
              {item.label}
            </a>
            {item.description ? <p className="mt-1 type-annotation text-[var(--ink-body)]">{item.description}</p> : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}