export function SiteFooter() {
  return (
    <footer className="panel-shell panel-neutral mt-8 px-5 py-6 text-[var(--ink-body)]">
      <p className="type-concept text-[var(--ink-strong)]">Documentation-first, export-safe, QA-governed.</p>
      <p className="type-body measure-reading mt-2">
        This scaffold is the executable baseline that turns the active spec set into a real Next.js project.
        It is intentionally narrow: enough structure to build, test, and audit the exported artifact without
        pretending the content workflow is already implemented.
      </p>
    </footer>
  );
}