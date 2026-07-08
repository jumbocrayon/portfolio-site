import { motion } from "motion/react";
import { experiments } from "@/content/experiments";
import ExperimentCard from "@/components/ExperimentCard";

/**
 * The Workbench — home / living-testbed surface.
 *
 * A portfolio top (name, role line, compact intro) over a hand-arranged board
 * of experiments, some finished, some in progress, the build visible. Whimsy in
 * the first 10 seconds; the promise of depth one click away.
 */
export default function Workbench() {
  return (
    <div className="mx-auto max-w-5xl">
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 max-w-2xl"
      >
        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl">
          Jess Loeb
        </h1>
        <p className="mt-3 font-display text-lg font-medium text-accent">
          Where I test the ideas in the open.
        </p>
        <p className="mt-5 text-lg text-content-muted">
          This is the workbench: interactive media, technology patterns, and
          development processes, with the thinking and analysis left in
          alongside the demos. I bring the instincts I used to ship a console
          launch to ideas that are still being figured out. Some pieces are
          finished, some still have their working notes in. Follow whatever
          you're curious about.
        </p>
      </motion.header>

      <section>
        <h2 className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-content-muted">
          Selected experiments
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {experiments.map((experiment) => (
            <ExperimentCard key={experiment.slug} experiment={experiment} />
          ))}
        </div>
      </section>
    </div>
  );
}
