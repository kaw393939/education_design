type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div className="measure-reading">
      <p className="type-meta text-[var(--accent-strong)]">{eyebrow}</p>
      <h2 className="type-section mt-3 text-balance text-[var(--ink-strong)]">{title}</h2>
      <p className="type-body mt-4 text-[var(--ink-body)]">{body}</p>
    </div>
  );
}