import type { ReactNode } from "react";

/**
 * Insight — the value-add block that sells the work without claiming a trait.
 *
 * This is the one block that does the selling for you. It names what a passage
 * *proves about how Jess works* — the judgment, the method, the earned instinct —
 * so the reader infers the character instead of being told it (per the voice
 * guidelines' show-don't-tell rule). It wears the accent fill so it reads as the
 * deepest, most deliberate layer on the page.
 *
 * `sells` is a short eyebrow naming the capability on display (e.g. "systems
 * judgment", "risk sense"). Keep it a capability, never an adjective about Jess.
 */
export default function Insight({
  sells,
  children,
}: {
  /** Short label for the capability this passage demonstrates. */
  sells?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-10 overflow-hidden rounded-2xl border border-accent/40 bg-accent/[0.06] px-6 py-5">
      <p className="mb-2 flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden />
        {sells ? `What this shows · ${sells}` : "What this shows"}
      </p>
      <div className="leading-relaxed text-content [&_p]:mt-3 [&_p:first-child]:mt-0">
        {children}
      </div>
    </aside>
  );
}
