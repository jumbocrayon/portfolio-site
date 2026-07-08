import type { ReactNode } from "react";

/**
 * PullQuote — a large emphasized line that carries the thesis or a sharp beat.
 *
 * Used sparingly: it's the rhythm break and the shareable sentence. An optional
 * `cite` attributes it (e.g. "me, to the governor"). Not a decorative blockquote;
 * reach for it only when a line is doing real load-bearing work.
 */
export default function PullQuote({
  children,
  cite,
}: {
  children: ReactNode;
  cite?: string;
}) {
  return (
    <figure className="my-10 border-l-4 border-accent pl-6">
      <blockquote className="font-display text-2xl font-semibold leading-snug tracking-tight text-balance text-content sm:text-3xl">
        {children}
      </blockquote>
      {cite && (
        <figcaption className="mt-3 text-sm text-content-muted">{cite}</figcaption>
      )}
    </figure>
  );
}
