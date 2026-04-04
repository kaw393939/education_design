import Link from "next/link";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/tokens", label: "Tokens" },
  { href: "/layouts", label: "Layouts" },
  { href: "/primitives", label: "Primitives" },
  { href: "/process", label: "Process" },
  { href: "/status", label: "Status" },
];

export function SiteHeader() {
  return (
    <header className="panel-shell panel-reading px-5 py-4 backdrop-blur">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="type-meta text-[var(--accent-strong)]">
            Phase 1 Layout Baseline
          </p>
          <Link href="/" className="mt-1 block type-concept text-[var(--ink-strong)]">
            Educational Design System
          </Link>
        </div>
        <nav aria-label="Primary" className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="action-secondary px-4 py-2 text-[var(--ink-body)] hover:border-[var(--accent)] hover:text-[var(--ink-strong)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}