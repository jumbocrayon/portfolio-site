import { Link } from "react-router-dom";
import { motion } from "motion/react";
import type { Experiment } from "@/content/experiment";
import AliveIndicator from "./AliveIndicator";

/**
 * ExperimentCard — the surface tile for the Workbench.
 *
 * Professional and calm at rest; the whimsy is behavioral — it lifts toward you
 * when you reach for it, and the "closer look" cue slides in. It leads with the
 * hook, not a case-study headline. Depth is implied, never forced: the card only
 * promises "there's more here."
 */
export default function ExperimentCard({
  experiment,
}: {
  experiment: Experiment;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="h-full"
    >
      <Link
        to={`/experiment/${experiment.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <div className="mb-4 flex items-center justify-between gap-2">
          <AliveIndicator status={experiment.status} updatedAt={experiment.updatedAt} />
        </div>

        <h3 className="font-display text-xl font-semibold leading-tight tracking-tight">
          {experiment.title}
        </h3>
        <p className="mt-2 text-content-muted">{experiment.hook}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {experiment.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-2.5 py-0.5 text-xs text-content-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-5 font-display text-sm font-medium text-accent">
          <span className="inline-block transition-transform group-hover:translate-x-0.5">
            take a closer look →
          </span>
        </p>
      </Link>
    </motion.div>
  );
}
