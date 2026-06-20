/**
 * About / Operating values.
 *
 * The character read — expressed through how I work, not a bio dump. The three
 * values map 1:1 onto how the site behaves, because they're the same
 * commitments: the medium is the message.
 */
const VALUES = [
  {
    name: "Whimsy",
    behavior: "so I lead with play.",
    body: "Curiosity is the cheapest way to learn something true. I poke at things, in public, before the stakes get high — and I keep the playfulness in service of the work, never as decoration. If a thing isn't a little fun to make, it usually isn't worth making yet.",
  },
  {
    name: "Depth",
    behavior: "so I go all the way down.",
    body: "Under every playful surface there's real systems thinking. I think in systems and communicate in human terms — the depth is always there for whoever wants it, and never forced on whoever doesn't.",
  },
  {
    name: "Relationship",
    behavior: "so I build trust through values.",
    body: "How I get somewhere matters as much as getting there. Clever without being arrogant, compassionate without being soft. I'd rather show you who you'd be working with than tell you.",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="font-hand text-4xl leading-tight">How I work</h1>
      <p className="mt-4 text-lg text-ink-soft">
        Applied curiosity, plus caring about how creative groups use the resources
        they have, lands art and science in unimaginably cool places. I curate
        those spaces — I set the technical foundations where curiosity and magic
        can happen later. This whole site is built that way on purpose. The medium
        is the message.
      </p>

      <div className="mt-10 space-y-6">
        {VALUES.map((v) => (
          <div
            key={v.name}
            className="rounded-2xl border-2 border-ink/15 bg-paper p-6 shadow-[3px_3px_0_0_rgba(43,38,34,0.08)]"
          >
            <h2 className="font-hand text-2xl">
              I value <span className="text-marker">{v.name}</span> — {v.behavior}
            </h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{v.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
