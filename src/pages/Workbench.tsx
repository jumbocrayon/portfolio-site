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
        <h1 className="font-hand text-4xl leading-tight sm:text-5xl">
          Jess Loeb
        </h1>
        <p className="mt-2 font-hand text-lg text-marker">
          Curious content, built in the open.
        </p>
        <p className="mt-4 text-lg text-ink-soft">
          More like a workbench than a résumé. I bring the instincts I used to ship a
          console launch to ideas about interactive media, technology patterns, and development processes
          and showcase thoughts, demos and analysis along the way. Some pieces are finished, some still have
          their working notes left in. Start light, let your curiosity guide you.
        </p>
      </motion.header>

      <section>
        <h2 className="mb-5 font-hand text-2xl text-ink-soft">
          Selected experiments
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {experiments.map((experiment, i) => (
            <ExperimentCard
              key={experiment.slug}
              experiment={experiment}
              tilt={i % 2 === 0 ? "l" : "r"}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
