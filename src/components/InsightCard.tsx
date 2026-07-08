import { Link } from "react-router-dom";
import { motion } from "motion/react";
import type { Insight } from "@/content/insight";

/**
 * InsightCard — the surface tile for the Insights index.
 *
 * Same behavioral whimsy as the Workbench cards: calm at rest, lifts toward you
 * when you reach for it. Leads with the hook, carries the date as the one quiet
 * build-in-public signal, and shows its tags for scent.
 */
export default function InsightCard({ insight }: { insight: Insight }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="h-full"
    >
      <Link
        to={`/insights/${insight.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span className="text-xs text-content-muted/70">{insight.publishedAt}</span>

        <h3 className="mt-2 font-display text-xl font-semibold leading-tight tracking-tight">
          {insight.title}
        </h3>
        <p className="mt-2 text-content-muted">{insight.hook}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {insight.tags.map((tag) => (
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
            read on →
          </span>
        </p>
      </Link>
    </motion.div>
  );
}
