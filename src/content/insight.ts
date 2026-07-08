import type { ComponentType } from "react";

/**
 * The Insight content type.
 *
 * Insights is the writing collection: essays, working notes, and dev-blog
 * episodes, all authored as .mdx files in content/insights/. "devblog" is just
 * one tag among several, not a separate system. Each essay is a hand-written
 * document — prose plus the essay block components (Breakout, Insight, PullQuote,
 * StatRow, Figure, Carousel) — with metadata in its frontmatter.
 *
 * Adding a piece = dropping one .mdx file in content/insights/. The glob loader
 * in insights.ts picks it up; no registry to edit.
 */

/**
 * Frontmatter every essay declares. Validated at load time (see insights.ts)
 * so a malformed header fails loudly instead of rendering a broken card.
 */
export interface InsightMeta {
  /** URL slug + stable id. Should match the filename, e.g. "guardrails". */
  slug: string;
  /** Display title. */
  title: string;
  /** The whimsy hook: one line that makes you want to read on. */
  hook: string;
  /** Tags for filtering + scent. "devblog" carries the old blog stream. */
  tags: string[];
  /** ISO date string; the collection sorts newest-first on this. */
  publishedAt: string;
  /** Optional: draft essays are hidden from the index unless previewing. */
  draft?: boolean;
}

/** A loaded essay: its validated metadata plus the rendered body component. */
export interface Insight extends InsightMeta {
  /** The MDX body, rendered inside the essay provider. */
  Body: ComponentType<{ components?: Record<string, unknown> }>;
}
