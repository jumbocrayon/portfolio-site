/**
 * How I play — value prop + the engagements I take.
 *
 * Not a list of adjectives about me. The site's thesis is "demonstrate, don't
 * assert," so this page leads with what I do for partners and the kinds of work
 * I take on. The values (whimsy, depth, relationship) show up only in *how* each
 * engagement is described; the page deliberately has no summary line naming them.
 * It ends on the last card and lets the work do the convincing. The medium is
 * the message, applied to the offer.
 */
const ENGAGEMENTS = [
  {
    title: "Fractional engineering leadership",
    hook: "Stand up the team that does the work, not just the work.",
    body: "I build teams, departments, and studios from zero: the operating model, the hiring strategy, the career paths people actually grow through. I've scaled a two-person initiative into a thirty-person department and stood up a studio in an emerging talent market. Director-level leadership, on loan, hands-on where it matters.",
  },
  {
    title: "Launch & risk readiness",
    hook: "De-risk the launch before it ships.",
    body: "I ran the launch-readiness program for a major console launch: 24M+ players across 25 titles, zero downtime, a global workforce wargaming the failure modes from home. I help you name the villains that could kill a launch while it's still cheap to plan against them, and build the readiness that holds up under real load.",
  },
  {
    title: "Systems & developer experience",
    hook: "Build the foundation that lets a creative team move fast.",
    body: "Platform and SDK architecture, observability, and tooling that saves partners years, not weeks. I hold a patent in bug triage for microservice architectures and have shipped developer experience that saved studio partners a self-reported 2.5 years of cumulative dev time. I work in systems and explain them in human terms.",
  },
  {
    title: "AI strategy for creative teams",
    hook: "Figure out what AI can genuinely do for the work, and what it can't.",
    body: "Anyone can build almost anything now, which is exactly why the plan matters more, not less. I dig into the what, the why, and the how before the tooling, so a team ends up with something imaginative that doesn't oversell what it can actually do. The goal is always to amplify the people doing the creative work, not to replace the judgment that makes it good.",
  },
  {
    title: "Interactive-media R&D",
    hook: "Prototype the art-meets-science idea before the stakes get high.",
    body: "Curiosity-led prototyping at the edge of what's possible: the curious-content space these experiments live in, where a human-defined aesthetic meets real-time AI and becomes something touchable. I find where art and science meet in unimaginably cool places, and set the technical foundation so curiosity and magic can happen there.",
  },
];

export default function HowIPlay() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance">
        How I play
      </h1>
      <p className="mt-4 text-lg text-content-muted">
        Play is infrastructure. Someone has to build the systems, teams, and
        culture that make it possible at scale, and that's the work I take on. I
        move between strategic framing and hands-on systems engineering, and I
        care a great deal about how creative groups use the resources they have.
        Here's where I can help.
      </p>

      <div className="mt-10 space-y-6">
        {ENGAGEMENTS.map((e) => (
          <div
            key={e.title}
            className="rounded-2xl border border-line bg-surface p-6 shadow-sm"
          >
            <h2 className="font-display text-xl font-semibold tracking-tight text-accent">
              {e.title}
            </h2>
            <p className="mt-1.5 font-display text-lg font-medium leading-snug">
              {e.hook}
            </p>
            <p className="mt-3 leading-relaxed text-content-muted">{e.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
