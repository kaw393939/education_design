export function SiteFooter() {
  return (
    <footer className="panel-shell panel-neutral mt-8 px-5 py-6 text-[var(--ink-body)]">
      <p className="type-concept text-[var(--ink-strong)]">Documentation-first, export-safe, QA-governed.</p>
      <p className="type-body measure-reading mt-2">
        This scaffold now includes reusable shells, educational primitives, and a unit-driven renderer so page
        structure and pedagogical structure are both solved by the system itself. It is still intentionally narrow:
        strong enough to build, test, and audit the exported artifact without pretending the full publishing workflow
        is already implemented.
      </p>
    </footer>
  );
}