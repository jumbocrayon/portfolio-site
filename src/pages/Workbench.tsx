import { motion } from "motion/react";
import { experiments } from "@/content/experiments";
import ExperimentCard from "@/components/ExperimentCard";

/**
 * The Workbench — home / living-testbed surface.
 *
 * Not a case-study grid: a hand-arranged board of experiments, some finished,
 * some in progress, the build visible. Whimsy in the first 10 seconds; the
 * promise of depth one poke away.
 */
export default function Workbench() {
  return (
    <div className="mx-auto max-w-5xl">
      <section className="mb-12 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-hand text-4xl leading-tight sm:text-5xl"
        >
          This isn't a résumé.
          <br />
          It's a <span className="ink-underline">workbench</span>.
        </motion.h1>
        <p className="mt-4 text-lg text-ink-soft">
          I run my own interactive-media experiments in public. Some are finished,
          some are mid-build — the wires are showing on purpose. Poke around. Skim
          the whimsy, get a feel for how I work, and fall as deep as you like.
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2">
        {experiments.map((experiment, i) => (
          <ExperimentCard
            key={experiment.slug}
            experiment={experiment}
            tilt={i % 2 === 0 ? "l" : "r"}
          />
        ))}
      </div>
    </div>
  );
}
