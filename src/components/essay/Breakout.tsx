import type { ReactNode } from "react";

/**
 * Breakout — a boxed aside at a different altitude than the prose.
 *
 * This is the "the lesson under everything" / "the principle this forced" move:
 * lift a takeaway out of the flow so a skimmer catches it. Each `kind` carries a
 * small eyebrow label and a left-border color. Prose stays quiet; the breakout
 * is where a paragraph earns a frame.
 */
export type BreakoutKind = "lesson" | "principle" | "takeaway" | "note";

const KIND_META: Record<BreakoutKind, { label: string; border: string }> = {
  lesson: { label: "The lesson under it", border: "border-l-accent" },
  principle: { label: "The principle this forced", border: "border-l-accent" },
  takeaway: { label: "If you take one thing", border: "border-l-status-live" },
  note: { label: "A note", border: "border-l-line" },
};

export default function Breakout({
  kind = "note",
  label,
  children,
}: {
  kind?: BreakoutKind;
  /** Override the default eyebrow for this kind. */
  label?: string;
  children: ReactNode;
}) {
  const meta = KIND_META[kind];
  return (
    <aside
      className={`my-8 rounded-r-xl border border-line border-l-4 bg-surface px-5 py-4 ${meta.border}`}
    >
      <p className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.14em] text-content-muted">
        {label ?? meta.label}
      </p>
      <div className="leading-relaxed text-content [&_p]:mt-2 [&_p:first-child]:mt-0">
        {children}
      </div>
    </aside>
  );
}
