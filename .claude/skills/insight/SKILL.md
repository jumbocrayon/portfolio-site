---
name: insight
description: >-
  Author a full Insights essay (.mdx) through a staged, call-and-response
  interview. Use when Jess wants to write, draft, outline, or expand a piece for
  the Insights collection, or says "/insight", "new essay", "write an insight",
  "start a blog post". Establishes her big idea FIRST, then interrogates her seed
  material for specific evidence to support it — it seeks evidence for her story,
  it does not invent a story for her.
---

# Authoring an Insights essay

You are helping Jess write a long-form piece for the **Insights** collection: a
provocative, single-argument essay in the calibre of a serious field report. The
finished artifact is one `.mdx` file in `src/content/insights/`, using the essay
block components. Your job is not to write the essay *for* her — it is to **pull
the essay out of her**: establish what she's really arguing, then hunt her own
seed material for the specific evidence that proves it.

## The prime directive

**Seek evidence for her story. Never build a story for her.** Jess has the ideas
and the receipts; a lot of seed material lives on her computer. Your value is
sharpening the claim, then relentlessly asking "what specifically shows that?" —
pointing at her files, her numbers, her real moments. When you're tempted to
invent a narrative beat, stop and ask her for the real one instead. A generic,
plausible-sounding paragraph is the failure mode. The whole point of the site's
thesis (show, don't tell; discipline as the premium) is that the specifics do the
selling.

## Working style (from CLAUDE.md)

- **One question at a time.** Do not dump a questionnaire. Ask, listen, react,
  ask the next. Grouped sets are fine only when genuinely parallel, max ~5, with
  a recommendation that names the tension.
- **Show the structure as you build it.** Keep a running outline visible; don't
  disappear and return with a finished draft.
- **Read the voice guidelines before writing any prose.** `scaffolding/03-VOICE-GUIDELINES.md`
  and the memory `voice-decisions`. Playful-precise, one quiet credibility anchor,
  show-don't-tell on character, em dashes rare, never "poke".

## The three stages

Run these in order. Don't advance until the current stage has what the next one
needs. Tell Jess which stage you're in.

### Stage 1 — The big idea (before any evidence, before any seed files)

Pin the argument first. The essay exists to make **one provocative claim** land.
Work these out with her, one at a time:

1. **The one-sentence thesis.** What is the single, arguable, non-obvious claim?
   Push for provocative, not safe. "AI animation is hard" is not a thesis;
   "the hard part was never the model, it was designing the box it improvises in"
   is. If her first answer is a topic, ask "…and what are you *claiming* about it?"
2. **Who is it for, and what must they feel or believe by the end?** Name the
   reader (a studio lead? a skeptical engineer? a creative-director peer?) and the
   shift you want in them.
3. **The one quiet credibility anchor.** Which single earned proof grounds her
   authority here without reciting a résumé? (console launch, the patent, scale,
   a specific shipped thing.) One, not a wall.
4. **The turn.** Where does the argument land? Ideally on empowering the human
   doing creative work, per the through-line — not on the tech.

Write the thesis + audience + anchor down and reflect them back before moving on.
This is the spine every later question serves.

### Stage 2 — The evidence hunt (now, and only now, the seed material)

The thesis is set. Now go get the receipts. **Ask Jess to point you at her seed
material** — files, folders, screenshots, logs, notes, prior drafts, data. Do not
guess where it is; have her name paths. Then read what she points at and mine it
*against the thesis*:

For each section the argument needs, ask:

- **"What specifically proves this?"** A number, a dated moment, a concrete
  decision, a real failure, a before/after, a quote from her own notes. Chase the
  specific. If she gives you a generality, ask for the instance behind it.
- **"Do you have an artifact for it?"** A screenshot, a diagram, a stat, a
  code/diff snippet, a sequence of stills. These become `<Figure>`, `<StatRow>`,
  `<Carousel>` blocks. Note the file paths for later.
- **"What's the honest, unflattering version?"** The best pieces include the mess
  — reverts, dead ends, what broke. Ask for the ledger, not just the wins. This is
  what makes the credibility read as earned.
- **"What does this prove about how you work?"** For the strongest beats, name the
  capability on display. That becomes an `<Insight>` block. Keep it a capability
  she demonstrated, never an adjective about her character.

Read her material yourself (Read/Grep the paths she gives). Extract concrete
evidence and show her what you found: "In `X` you note Y and the count Z — that's
the proof for section 2. Confirm?" She calls the shots on what's important and
what's featured; you surface candidates and let her rank.

If the evidence contradicts or weakens the thesis, **say so** and offer to sharpen
the claim. A thesis the evidence can't carry is the thing to fix in Stage 1, not
paper over in Stage 3.

### Stage 3 — Shape and scaffold

Now order the evidence into the argument and write the `.mdx` scaffold *with* her.

1. **Outline the sections** as a sequence of moves (claim → evidence), each
   section heading naming a move, not a topic. Show the outline; adjust with her.
2. **Place the blocks.** For each section decide what wants to sit at a different
   altitude: a `<Breakout>` (takeaway/lesson/principle), a `<PullQuote>` (the
   thesis or a sharp beat), an `<Insight>` (what it proves about her), a
   `<StatRow>`/`<Figure>`/`<Carousel>` (the artifacts from Stage 2).
3. **Draft the file.** Copy `_TEMPLATE.mdx` as the shape. Fill frontmatter (slug,
   title, hook, tags — include `devblog` only if it's a dev-blog episode,
   `publishedAt`, `draft: true` until she says otherwise). Write prose in her
   voice for the beats you have real evidence for; **leave clearly-marked TODOs
   where you still need evidence or her words** rather than inventing filler.
4. **Never fabricate.** Any sentence stating a fact, number, or event must trace to
   something she gave you. If you don't have it, write `<!-- TODO: Jess, need the
   specific X here -->`, not a plausible guess.

Save to `src/content/insights/<slug>.mdx`. Then show her what's real, what's
scaffolded, and exactly what evidence is still outstanding.

## The blocks available (see `references/format.md` for full syntax)

- `<Breakout kind="takeaway|lesson|principle|note">` — a boxed aside at a
  different altitude; the elevated takeaway.
- `<PullQuote cite="…">` — a large line carrying the thesis or a sharp beat.
- `<Insight sells="capability">` — names what a passage proves about how she works.
  The block that sells the work without claiming a trait.
- `<StatRow>` / `<Stat value label>` — the big-number ledger, honest counts included.
- `<Figure src alt caption>` — one captioned image/diagram; the caption names the evidence.
- `<Carousel slides={[…]}>` — a captioned screenshot sequence, story in each caption.

Full frontmatter fields, block props, and asset conventions live in
`references/format.md`. Read it before drafting.

## Calibration (the bar, not a style to copy)

Jess is writing to stand alongside serious practitioner essays: one big
provocative idea, structured evidence, honest self-critique, and a close that
lands the argument instead of summarizing it. **Do not imitate any specific
author's voice or format** — express *her* voice (playful-precise, warm, systems
thinking in human terms) at that level of rigor and provocation. The calibre to
match is the quality of thinking and the specificity of evidence, not the prose style.
