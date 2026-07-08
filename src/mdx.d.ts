/**
 * Type shims for MDX essay modules.
 *
 * Each `.mdx` file in the Insights collection exports:
 *  - a default React component (the rendered essay body)
 *  - a named `frontmatter` object (title, hook, tags, publishedAt, …),
 *    parsed by remark-mdx-frontmatter in vite.config.ts.
 *
 * The frontmatter shape is validated at load time against InsightMeta
 * (see content/insight.ts), so we type it loosely here and narrow there.
 */
declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const frontmatter: Record<string, unknown>;
  const MDXComponent: ComponentType<{ components?: Record<string, unknown> }>;
  export default MDXComponent;
}
