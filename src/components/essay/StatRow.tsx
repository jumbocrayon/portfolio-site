import type { ReactNode } from "react";

/**
 * StatRow + Stat — the big-number ledger.
 *
 * A row of earned figures ("50 builds / 19 days"). This is the credibility
 * surface where numbers are shown, not claimed: let a stat carry the weight a
 * sentence would otherwise have to assert. Honest counts, including the
 * unflattering ones, read as confidence.
 *
 * Usage in MDX:
 *   <StatRow>
 *     <Stat value="24M+" label="players, zero downtime" />
 *     <Stat value="1" label="U.S. patent" />
 *   </StatRow>
 */
export function StatRow({ children }: { children: ReactNode }) {
  return (
    <div className="my-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
      {children}
    </div>
  );
}

export function Stat({
  value,
  label,
}: {
  value: ReactNode;
  label: ReactNode;
}) {
  return (
    <div className="bg-surface px-5 py-6 text-center">
      <div className="font-display text-3xl font-bold tracking-tight text-accent sm:text-4xl">
        {value}
      </div>
      <div className="mt-2 text-xs leading-snug text-content-muted">{label}</div>
    </div>
  );
}
