# Scaffolding Spec — What to Prototype First

> Goal: stand up a fast, flexible site shell that hosts a growing collection of interactive demos, framed by the whimsy → depth → values spine. Optimize for speed-to-prototype and easy drop-in of new interactive pieces. This is the **portfolio shell only** — the dev blog is a separate, later stream.

## Suggested stack (bias to fast + fun, adjust as you like)
- **Framework:** Vite + React + TypeScript (fast HMR, easy to drop in interactive demos). Alternative: Astro if you want content-islands and lighter JS by default.
- **Styling:** Tailwind CSS for speed, with room for hand-drawn/SVG flourishes and custom motion.
- **Motion:** Framer Motion (or CSS) for playful microinteractions.
- **Content:** MDX or simple typed data files for demo entries, so new experiments are cheap to add.
- **Deploy:** Vercel or Netlify (instant preview deploys — supports the build-in-public ethos).
- Keep it static-first; add interactivity per-demo as needed.

## Information architecture (v0)
- **Home / Workbench** — the living testbed surface. A browsable collection of experiments (finished + in-progress), each with a playful surface card. Sets whimsy first, hints at depth.
- **Experiment detail (template)** — progressive disclosure: playful surface → "what it is" → "how it works" / systems depth. This template is the workhorse; every demo uses it.
- **Centerpiece slot** — a featured placement for the comic-vignette engine when it lands. For now, a placeholder/"coming alive" state.
- **About / Operating values** — the character read, expressed through how I work (whimsy, depth, relationship), not a bio dump.
- **Dev blog slot (stub only)** — reserve the route/placement; do NOT build the blog system now.

## Core abstractions to get right (so demos drop in cleanly)
1. **`Experiment` content type** — a typed schema: title, one-line whimsy hook, surface preview (image/interactive), status (`live` | `in-progress` | `spark-test`), depth sections (what / how / systems), tags, optional shareable-artifact hook. Everything on the Workbench is an `Experiment`.
2. **`<ExperimentCard>`** — the playful surface tile for the Workbench.
3. **`<ExperimentDetail>`** — the progressive-disclosure template (surface → what → how → systems).
4. **`<DemoSlot>`** — a wrapper that lets an interactive React component be embedded into an experiment's surface or detail without special-casing each one. The key extensibility primitive — new demos = new components dropped into a `DemoSlot`.
5. **Build-in-public affordances** — a lightweight way to mark something "in progress," show an updated-at, and signal the site is alive/evolving.

## v0 acceptance criteria (the fast prototype)
- [ ] Site shell deploys with a Workbench home, an Experiment detail template, and an About page.
- [ ] At least 2 seeded placeholder `Experiment` entries render through the real content type + components (e.g. "Comic-vignette engine — in progress" and "Pre-mortem worksheet — spark").
- [ ] `<DemoSlot>` proven by embedding one trivial interactive component (even a toy) to validate drop-in flow.
- [ ] Visual language reads handmade/whimsical, not corporate; surface is light with depth-on-demand on the detail template.
- [ ] Dev blog route stubbed but NOT built.
- [ ] Instant preview deploy working (build-in-public).

## Explicitly out of scope for v0
- The actual comic-vignette engine (centerpiece) — just a slot/placeholder.
- The dev blog system — stub only.
- The kids' "let's tell a story" app — separate prototype; this site will eventually *feature* it, not contain its build.
- Auth, CMS, analytics dashboards (note: analytics matters strategically later as the inward diagnostic, but not in v0).

## First three concrete tasks for the new project
1. Scaffold Vite + React + TS + Tailwind, deploy a hello-world to a preview URL.
2. Define the `Experiment` content type and build `<ExperimentCard>` + `<ExperimentDetail>` + `<DemoSlot>`, wired to 2 seeded entries.
3. Apply the handmade/whimsical visual pass to the Workbench home and detail template; stub the dev blog and About routes.
