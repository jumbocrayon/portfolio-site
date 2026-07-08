import type { ComponentProps } from "react";
import Breakout from "./Breakout";
import PullQuote from "./PullQuote";
import Insight from "./Insight";
import { StatRow, Stat } from "./StatRow";
import Figure from "./Figure";
import Carousel from "./Carousel";

/**
 * The MDX component map.
 *
 * Two jobs: (1) expose the essay block components so an .mdx file can use
 * <Breakout>, <Insight>, <PullQuote>, <StatRow>/<Stat>, <Figure>, <Carousel>
 * without importing them; (2) style the base Markdown elements (headings, prose,
 * lists, code, links) to the site's type system so plain prose reads right.
 *
 * Passed to <MDXProvider components={mdxComponents}> in InsightDetail.
 */
export const mdxComponents = {
  // Essay blocks, available unqualified inside MDX.
  Breakout,
  PullQuote,
  Insight,
  StatRow,
  Stat,
  Figure,
  Carousel,

  // Section headings. Essays start their sections at h2 (the h1 is the title,
  // rendered by the template outside the MDX body).
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="mt-14 mb-4 font-display text-2xl font-bold leading-tight tracking-tight text-balance sm:text-3xl"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="mt-10 mb-3 font-display text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="my-5 text-lg leading-relaxed text-content-muted" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul
      className="my-5 list-disc space-y-2 pl-6 text-lg leading-relaxed text-content-muted"
      {...props}
    />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol
      className="my-5 list-decimal space-y-2 pl-6 text-lg leading-relaxed text-content-muted"
      {...props}
    />
  ),
  li: (props: ComponentProps<"li">) => <li className="pl-1" {...props} />,
  a: (props: ComponentProps<"a">) => (
    <a
      className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:text-accent-hover"
      {...props}
    />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-content" {...props} />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="my-6 border-l-2 border-line pl-4 italic text-content-muted"
      {...props}
    />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.9em] text-content"
      {...props}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="my-6 overflow-x-auto rounded-xl border border-line bg-surface p-4 font-mono text-sm leading-relaxed [&_code]:bg-transparent [&_code]:p-0"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-line" />,
};
