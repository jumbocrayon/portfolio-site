import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { allTags, publishedInsights } from "@/content/insights";
import InsightCard from "@/components/InsightCard";

/**
 * Insights — the writing collection.
 *
 * Essays, working notes, and dev-blog episodes in one place, newest-first,
 * filterable by tag. The old "dev blog" is now just the pieces tagged devblog.
 * A single active tag keeps the filter honest and the surface calm; "all"
 * resets it.
 */
export default function Insights() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const tags = useMemo(allTags, []);
  const all = useMemo(publishedInsights, []);
  const shown = activeTag ? all.filter((i) => i.tags.includes(activeTag)) : all;

  return (
    <div className="mx-auto max-w-5xl">
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 max-w-2xl"
      >
        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl">
          Insights
        </h1>
        <p className="mt-4 text-lg text-content-muted">
          Writing with the working notes left in — essays, method, and dev-blog
          episodes from the work. Filter by tag, or read newest-first.
        </p>
      </motion.header>

      {/* Tag filter row. "All" is the reset. */}
      <div className="mb-8 flex flex-wrap gap-2">
        <FilterPill
          label="all"
          active={activeTag === null}
          onClick={() => setActiveTag(null)}
        />
        {tags.map((tag) => (
          <FilterPill
            key={tag}
            label={tag}
            active={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          />
        ))}
      </div>

      <section>
        {shown.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {shown.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        ) : (
          <p className="max-w-md text-content-muted">
            First pieces are in the works. This stream is written by hand, one
            evidence-backed essay at a time — worth the wait.
          </p>
        )}
      </section>
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3 py-1 font-display text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        active
          ? "border-accent bg-accent/10 text-accent"
          : "border-line text-content-muted hover:text-content"
      }`}
    >
      {label}
    </button>
  );
}
