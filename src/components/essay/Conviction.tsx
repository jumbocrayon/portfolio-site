import type { ReactNode } from "react";

/**
 * Conviction — an inline mark for a strongly-held belief or takeaway.
 *
 * The one saturated exception to the purple accent: rose, bold, reserved for a
 * line the author would defend. Deliberately rare. The voice rule is the same as
 * the "one quiet anchor" idea, inverted: at most one Conviction per section, and
 * plenty of sections have none. Overuse turns conviction into decoration, which
 * is exactly what it is meant to resist.
 *
 * Usage in MDX:  <Conviction>the margins of life are the point</Conviction>
 */
export default function Conviction({ children }: { children: ReactNode }) {
  return (
    <strong className="font-semibold text-conviction decoration-conviction/30 [text-decoration-line:underline] [text-decoration-thickness:2px] underline-offset-4">
      {children}
    </strong>
  );
}
