import { motion } from "motion/react";
import { about } from "@/content/about";
import type { Highlight } from "@/content/about";

/**
 * About — the home / front door.
 *
 * The story that argues the site's thesis before any demo does. The arc is
 * "builder who protects the craft": a grounded hook (name + role line), the
 * thesis compressed into a display tagline, a career of empowering human
 * creatives reached through specific highlights, and a closing turn on the
 * value that discipline creates. Per the voice guide it ends on the work, with
 * no summary line naming the character. All copy lives in @/content/about.
 * (The "AI enthusiast*" self-label was intentionally pulled from the hero — it
 * reads as where-I-am-now, not the first thing to say. Kept in about.ts for
 * later reuse on a Workbench item.)
 */
export default function About() {
  return (
    <div className="mx-auto max-w-2xl">
      {/* Hook: name and role line. Grounded, no self-label up top. */}
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl">
          {about.name}
        </h1>
        <p className="mt-3 font-display text-lg font-medium text-accent">
          {about.roleLine}
        </p>
      </motion.header>

      {/* The arc, in prose. */}
      <div className="mt-8 space-y-5">
        {about.intro.map((para, i) => (
          <p key={i} className="text-lg text-content-muted">
            {para}
          </p>
        ))}
      </div>

      {/* The thesis, compressed: a display pull-quote punctuating the story. */}
      <p className="mt-10 font-display text-2xl font-semibold leading-snug tracking-tight text-balance sm:text-3xl">
        {about.tagline}
      </p>

      {/* CV figures: a quiet horizontal row. Numbers earned by the descent. */}
      <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {about.stats.map((stat) => (
          <div
            key={stat.value}
            className="rounded-xl border border-line bg-surface p-4 text-center shadow-sm"
          >
            <dt className="font-display text-2xl font-bold tracking-tight text-accent">
              {stat.value}
            </dt>
            <dd className="mt-1 text-xs leading-snug text-content-muted">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>

      {/* Credibility anchors, reached by choice. */}
      <section className="mt-12">
        <h2 className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-content-muted">
          A few things I've built
        </h2>
        <div className="space-y-3">
          {about.highlights.map((h) => (
            <HighlightRow key={h.id} highlight={h} />
          ))}
        </div>
      </section>

      {/* Closing turn: ends on the work, no character summary. */}
      <div className="mt-12 space-y-5">
        {about.closing.map((para, i) => (
          <p key={i} className="text-lg text-content-muted">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

/**
 * One highlight. A detailed anchor shows its metric and read; a coming-soon
 * stub surfaces honestly (build-in-public) rather than pretending to be done.
 */
function HighlightRow({ highlight: h }: { highlight: Highlight }) {
  const soon = h.status === "coming-soon";
  return (
    <div
      className={`rounded-2xl border bg-surface p-6 shadow-sm ${
        soon ? "border-dashed border-line" : "border-line"
      }`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-xl font-semibold tracking-tight text-accent">
          {h.title}
        </h3>
        {soon && (
          <span className="font-display text-xs font-medium text-content-muted/70">
            more soon
          </span>
        )}
      </div>
      {h.metric && (
        <p className="mt-1.5 font-display text-sm font-medium text-content-muted">
          {h.metric}
        </p>
      )}
      <p className="mt-3 leading-relaxed text-content-muted">{h.body}</p>
    </div>
  );
}
