import type { ComponentType } from "react";
import type { Insight, InsightMeta } from "./insight";

/**
 * The Insights collection, loaded from .mdx essays.
 *
 * Every essay in content/insights/*.mdx is picked up by the glob below. Its
 * `frontmatter` export is validated into InsightMeta; its default export is the
 * rendered body. Drop a new file in that folder and it appears in the index,
 * sorted by date. No registry to maintain.
 */

interface EssayModule {
  frontmatter?: Record<string, unknown>;
  default: ComponentType<{ components?: Record<string, unknown> }>;
}

// Eager glob: essays are small and we want them in the index synchronously.
const modules = import.meta.glob<EssayModule>("./insights/*.mdx", {
  eager: true,
});

/** Validate a frontmatter blob into InsightMeta, or throw with the file path. */
function toMeta(path: string, fm: Record<string, unknown> | undefined): InsightMeta {
  if (!fm) throw new Error(`Insight ${path}: missing frontmatter`);
  const { slug, title, hook, tags, publishedAt, draft } = fm;
  const req = { slug, title, hook, publishedAt };
  for (const [k, v] of Object.entries(req)) {
    if (typeof v !== "string" || v.length === 0) {
      throw new Error(`Insight ${path}: frontmatter "${k}" must be a non-empty string`);
    }
  }
  if (!Array.isArray(tags) || tags.some((t) => typeof t !== "string")) {
    throw new Error(`Insight ${path}: frontmatter "tags" must be a string[]`);
  }
  return {
    slug: slug as string,
    title: title as string,
    hook: hook as string,
    tags: tags as string[],
    publishedAt: publishedAt as string,
    draft: draft === true,
  };
}

// Build the collection once at module load. Drafts are kept but flagged.
export const insights: Insight[] = Object.entries(modules)
  .map(([path, mod]) => ({ ...toMeta(path, mod.frontmatter), Body: mod.default }))
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

/** Published essays only (drafts hidden from the index and tag list). */
export function publishedInsights(): Insight[] {
  return insights.filter((i) => !i.draft);
}

/** Lookup by slug for the detail route. Drafts resolve too (direct-link preview). */
export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

/** Every tag across published essays, deduped and alphabetised, for the filter row. */
export function allTags(): string[] {
  return [...new Set(publishedInsights().flatMap((i) => i.tags))].sort();
}
