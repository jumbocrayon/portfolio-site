# Insights essay format reference

An essay is one `.mdx` file in `src/content/insights/`. The filename (minus
`.mdx`) should match the frontmatter `slug`. Drop the file in and the glob loader
(`src/content/insights.ts`) picks it up automatically — no registry to edit.

Start from `src/content/insights/_TEMPLATE.mdx`: it is a live, working example of
every block, and it renders (as a draft) so you can see the format before writing.

## Frontmatter

```yaml
---
slug: guardrails            # URL slug + id; match the filename
title: "Guardrails, not gates"
hook: "One line that makes you want to read on."   # shows on card + detail header
tags: ["devblog", "real-time AI"]   # freeform; "devblog" = a dev-blog episode
publishedAt: "2026-06-18"   # ISO date; collection sorts newest-first
draft: true                 # optional; drafts are hidden from the index but
                            #   still reachable by direct link for preview
---
```

- All string fields must be non-empty or the loader throws (loudly, with the path).
- `tags` must be a string array. `devblog` is just one tag; it carries the old
  dev-blog stream into the collection. Other tags seen so far: `essay`,
  `working notes`, `real-time AI`, `method`, `facilitation`, `risk`, `art × science`.
- Leave `draft: true` until Jess explicitly says to publish.

## The body

Prose is plain Markdown and picks up the site's type system automatically (h2/h3
headings, paragraphs, lists, links, `code`, blockquotes). Sections start at `##`
(h2) — the `#` title is rendered by the template from frontmatter, not in the body.

The body's first paragraph should be the **big idea stated plainly**. No warm-up.

## Blocks

All blocks are available unqualified — no imports in the `.mdx` file.

### Breakout — elevated aside

```mdx
<Breakout kind="takeaway">
The one thing to leave with.
</Breakout>
```

`kind`: `takeaway` (green, "if you take one thing"), `lesson` (accent, "the lesson
under it"), `principle` (accent, "the principle this forced"), `note` (neutral).
Override the eyebrow with `label="Custom label"`.

### PullQuote — the load-bearing line

```mdx
<PullQuote cite="me, to the model">
Guardrails, not gates.
</PullQuote>
```

`cite` optional. Use sparingly — thesis or a genuinely sharp beat only.

### Insight — sells the work

```mdx
<Insight sells="constraint design">
What this passage proves about how Jess works. Point at the specific decision on
display, not an adjective about her.
</Insight>
```

`sells` is a short capability label. The block wears the accent fill so it reads
as the deepest, most deliberate layer. This is the one that does the selling —
keep it grounded in a real thing she did.

### StatRow — the big-number ledger

```mdx
<StatRow>
  <Stat value="50" label="numbered builds" />
  <Stat value="19" label="days, end to end" />
  <Stat value="47" label="reverts (the honest count)" />
  <Stat value="0" label="values that moved" />
</StatRow>
```

`value` is the big figure, `label` the caption under it. Include the unflattering
counts — honesty reads as confidence. Renders 2-up on mobile, 4-up on desktop.

### Figure — one captioned image

```mdx
<Figure
  src="/insights/guardrails/constraint-layer.png"
  alt="Read-aloud description; follows the same voice rules as copy."
  caption="Captions name the evidence, they don't just label the picture."
/>
```

### Carousel — captioned screenshot sequence

```mdx
<Carousel slides={[
  { src: "/insights/guardrails/1.png", alt: "…", caption: "Where it started." },
  { src: "/insights/guardrails/2.png", alt: "…", caption: "What changed." },
]} />
```

One image visible at a time; arrows + dots to navigate; the per-slide caption
carries the story. Good for before→after and progressions across builds.

## Assets

Images go under `public/insights/<slug>/` and are referenced as
`/insights/<slug>/<file>` (the `public/` prefix is dropped in the URL). Create the
folder when the essay first needs an image. `alt` is required on every image and
is read aloud, so write it in Jess's voice.

## After drafting

1. `npm run dev` and open `/insights/<slug>` to see it render.
2. Check the tag filter on `/insights` includes the new tags.
3. Run the voice self-check (the PostToolUse hook surfaces it on copy edits):
   backed? altitude? agency? earned? clean (no "poke", em dashes rare)?
4. Flip `draft: true` → remove it (or `false`) only when Jess says to publish.
