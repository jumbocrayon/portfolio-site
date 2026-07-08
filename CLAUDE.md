# CLAUDE.md — Living Testbed Portfolio

## What this project is
A personal portfolio website that is **more than a résumé** — it's a "living testbed" where Jess tests her own ideas about interactive media in the open. The site demonstrates how she works by being built the same way she'd run an engagement. **The medium is the message:** the site's structure mirrors her operating values because they're the same commitments.

**Current scope: build the portfolio SHELL/scaffolding only.** The dev blog is a separate, later content stream — stub its route, do not build it. The centerpiece demo (comic-vignette engine) is a placeholder slot for now.

## Seed docs (read these first, in order)
- `scaffolding/00-PROJECT-BRIEF.md` — positioning, thesis, audience, strategic purpose, full content map
- `scaffolding/01-DESIGN-DIRECTION.md` — look/feel: whimsy → depth → values, handmade aesthetic, anti-goals
- `scaffolding/02-SCAFFOLDING-SPEC.md` — stack, information architecture, core abstractions, v0 acceptance criteria, first tasks
- `scaffolding/03-VOICE-GUIDELINES.md` — **read before writing or revising ANY visitor-facing copy.** The playful-precise register, diction do/don't list, the "one quiet anchor" credibility rule, and a 5-question self-check. A PostToolUse hook surfaces the check whenever copy files are edited.

## Human-in-the-loop rule for longform content (non-negotiable)
**No longform Insights essay may be authored, drafted, or scaffolded without Jess in the loop.** Longform content = anything in `src/content/insights/*.mdx` (the `_TEMPLATE.mdx` reference is the only exception). This is enforced by the `/insight` skill's staged call-and-response: Stage 1 (big idea) must come from *her* answers, Stage 2 (evidence hunt) must run against seed material *she* points at. Never generate an essay from stub information or infer the argument on her behalf. The rule the whole site argues — show, don't tell; the specifics do the selling — only holds if the specifics are really hers. An essay produced without her call/response is invalid and must be marked `draft: true` with a note that it needs the interview, not shipped.

## The thesis the whole site argues
"Applied curiosity + caring about how creative groups use available resources = art meets science in unimaginably cool places, and I curate those spaces. I set technical foundations where curiosity and magic can later happen."

## The experience to produce (order matters)
1. **Whimsy that drives the work forward** — the hook. Playful, alive, handmade. Never decoration; every playful element should *do* or *reveal* something.
2. **A feel for partnering with Jess** — the character read. The non-negotiable values show up in *how the site behaves*, not just stated copy.
3. **Systems-level depth** — the proof. Real technical substance, reachable via progressive disclosure, never forced on the casual visitor.

Skim the whimsy in 10s → get the character in a minute → fall all the way to depth if you want.

## How to work in this repo
- This is a **low-overcommitment, curiosity-led** project. Favor simple, fast, fun-to-iterate tooling over heavy enterprise scaffolding. Speed-to-prototype wins.
- Optimize for **drop-in extensibility**: new interactive demos should slot in without rearchitecting. The `Experiment` content type + `<DemoSlot>` are the key primitives (see scaffolding spec).
- **Ask one question at a time** when a decision is needed. Show the structure as you build — don't disappear and return with a finished product.
- Match the surrounding code's idioms, naming, and comment density as the codebase grows.
- Jess drives the architectural constraints and creative decisions; present her with choices grouped together in sets of no more than 5 questions, with 1-3 recommendations calling out tensions and alignments with stated goals.

## Suggested stack (confirm before scaffolding; push back if you'd choose differently)
- Explore a few options with Jess: Vite + React + TypeScript, Tailwind CSS, Framer Motion for motion, MDX/typed data for demo entries, Vercel or Netlify or Cloudflare.

## Aesthetic guardrails
- Handmade, true-to-Jess, personal warmth. Hand-drawn marks and imperfect lines are a **feature** (human-defined aesthetic = the thesis made visible). Jess can draw "well enough" — lean into soul over polish, learn how she draws things and mimic her
- Avoid: traditional case-study grids, agency-corporate slickness, whimsy-as-empty-decoration, forcing depth on every visitor.
- Copy is first person, warm, clever-not-arrogant, compassionate-not-soft; systems thinking in human terms; no buzzword soup. Premium is conveyed by the work doing the convincing, and the analysis showcasing its value, never by making a claim not directly grounded in data or experience.

## Out of scope for v0
- The comic-vignette engine (centerpiece) — placeholder slot only.
- The kids' "let's tell a story" app — a separate prototype this site will eventually *feature*, not contain.
- Auth, CMS, analytics dashboards (analytics matters strategically later as an inward diagnostic, but not in v0).

## v0 done = 
Shell deploys with a Workbench home + Experiment detail template + About page; 2 seeded `Experiment` entries render through the real content type/components; `<DemoSlot>` proven with one trivial embedded interactive; handmade/whimsical surface with depth-on-demand; dev blog stubbed; preview deploy working.
