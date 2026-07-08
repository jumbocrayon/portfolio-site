import { MDXProvider } from "@mdx-js/react";
import type { Insight } from "@/content/insight";
import { mdxComponents } from "@/components/essay/mdxComponents";

/**
 * InsightDetail — the reading template for a full essay.
 *
 * The header (date, title, hook, tags) is rendered here from frontmatter; the
 * body is the MDX component, rendered inside the provider so its prose and block
 * components (Breakout, Insight, PullQuote, StatRow, Figure, Carousel) pick up
 * the site's type system and styling. There's no progressive disclosure: an
 * essay is read straight through, its depth carried by the breakout/insight
 * blocks rather than collapsibles.
 */
export default function InsightDetail({ insight }: { insight: Insight }) {
  const { Body } = insight;
  return (
    <article className="mx-auto max-w-2xl">
      <header className="mb-8">
        <span className="text-xs text-content-muted/70">{insight.publishedAt}</span>
        <h1 className="mt-2 font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
          {insight.title}
        </h1>
        <p className="mt-4 text-xl text-content-muted">{insight.hook}</p>
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
        {insight.draft && (
          <p className="mt-4 inline-block rounded-md bg-status-progress/10 px-2.5 py-1 font-display text-xs font-medium text-status-progress">
            draft — not yet published to the index
          </p>
        )}
      </header>

      <MDXProvider components={mdxComponents}>
        <Body />
      </MDXProvider>
    </article>
  );
}
