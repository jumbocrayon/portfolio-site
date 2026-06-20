import { Link } from "react-router-dom";
import { motion } from "motion/react";
import type { Experiment } from "@/content/experiment";
import AliveIndicator from "./AliveIndicator";

/**
 * ExperimentCard — the playful surface tile for the Workbench.
 *
 * Whimsy first: it sits slightly off-grid (hand-pinned), lifts and straightens
 * when you reach for it, and leads with the hook — not a case-study headline.
 * Depth is implied, never forced: the card only promises "there's more here."
 */
export default function ExperimentCard({
  experiment,
  tilt,
}: {
  experiment: Experiment;
  /** Alternating tilt so the board feels hand-arranged. */
  tilt: "l" | "r";
}) {
  const rotate = tilt === "l" ? "var(--rotate-tilt)" : "var(--rotate-tilt-r)";

  return (
    <motion.div
      style={{ rotate }}
      whileHover={{ rotate: 0, y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        to={`/experiment/${experiment.slug}`}
        className="block h-full rounded-2xl border-2 border-ink bg-paper p-5 shadow-[4px_4px_0_0_var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-marker"
      >
        <div className="mb-3 flex items-center justify-between gap-2">
          <AliveIndicator status={experiment.status} updatedAt={experiment.updatedAt} />
        </div>

        <h3 className="font-hand text-2xl leading-tight">{experiment.title}</h3>
        <p className="mt-2 text-ink-soft">{experiment.hook}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {experiment.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink/20 bg-paper-deep px-2 py-0.5 text-xs text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 font-hand text-sm text-marker">poke this experiment →</p>
      </Link>
    </motion.div>
  );
}
