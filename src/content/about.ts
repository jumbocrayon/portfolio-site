/**
 * The About content model.
 *
 * About is the home / front door: the story that argues the site's thesis
 * before any demo does. Like the Experiment type, the copy lives in data so
 * sections are cheap to edit and reorder, and the page component stays a dumb
 * renderer. This is the spine of the narrative arc, not a bio dump.
 *
 * The arc (builder who protects the craft):
 *   hook (AI enthusiast*) -> the caveat the asterisk carries -> a career of
 *   empowering human creatives -> the value that tension creates.
 * Credibility is shown through specific highlights reached by choice, never
 * recited. Per the voice guide: demonstrate, don't assert; one quiet anchor.
 */

/**
 * A credibility highlight. Anchors the story in something specific and earned.
 * `metric` is the one quiet number; `body` is the human-terms read of why it
 * matters to the thesis. `status` lets a highlight ship as a placeholder
 * (Indie projects, Consulting) with an honest build-in-public surface, exactly
 * like an in-progress Experiment.
 */
export type HighlightStatus = "detailed" | "coming-soon";

export interface Highlight {
  /** Stable id / anchor slug. e.g. "console-launch" */
  id: string;
  /** Short display title. */
  title: string;
  /** The one quiet anchor: a single specific proof point. Optional for stubs. */
  metric?: string;
  /** Human-terms read: why this matters to the "protect the craft" thesis. */
  body: string;
  /** Ship a stub honestly, or show the full read. */
  status: HighlightStatus;
}

/**
 * A single number pulled from the CV, shown in the horizontal stat row.
 * `value` is the big quiet figure; `label` is the plain-terms read. Kept
 * data-driven so the row is a drop-in: add a stat = add an entry.
 */
export interface Stat {
  /** The headline figure, e.g. "24M+". */
  value: string;
  /** What the figure counts, e.g. "players, zero downtime". */
  label: string;
}

export interface AboutContent {
  /** Display name for the story header. */
  name: string;
  /** The role/tagline anchor. Carries the thesis in a few words. */
  roleLine: string;
  /**
   * The "AI enthusiast*" motif. `label` is the playful self-label; `caveat` is
   * what the asterisk reveals: the discipline that makes the enthusiasm
   * trustworthy. NOTE: not rendered in the About hero — it reads as "where I am
   * now," not the headline. The thought-work now lives as the "AI strategy for
   * creative teams" card on /how-i-play. This field is parked for possible reuse
   * as the interactive asterisk device on a future Workbench item. Keep the
   * copy; don't delete it as dead code.
   */
  asterisk: { label: string; caveat: string };
  /** Opening paragraphs of the arc, in order. Plain prose, playful-precise. */
  intro: string[];
  /**
   * The pull-quote that punctuates the story, in display styling. The thesis
   * compressed to one line: applied systems-thinking, curiosity-led imagination.
   */
  tagline: string;
  /** CV figures shown in a horizontal row beneath the tagline. */
  stats: Stat[];
  /** The credibility anchors, in narrative order. */
  highlights: Highlight[];
  /**
   * The closing turn: the value the "excited AND protective" tension creates.
   * The page ends here on the work, with no summary line naming the character.
   */
  closing: string[];
}

export const about: AboutContent = {
  name: "Jess Loeb",
  roleLine: "Curious content, thoughtful experiments.",
  asterisk: {
    label: "AI enthusiast*",
    caveat:
      "The easy part is that anyone can build almost anything now. The premium is building something imaginative that doesn't oversell what it can actually do. I spend my time on the what, the why, and the how, so the tools amplify the people using them instead of replacing the judgment that makes the work good.",
  },
  intro: [
    "Interactive media keeps getting more ambitious: the systems are more complex, audiences expect more than they did a year ago, and the tools underneath change faster than anyone can fully keep up with. I find that genuinely exciting. I'm also protective of what gets flattened in the rush: the taste, the discipline, and the human judgment that separate a real creative work from a convincing-looking one.",
    "That tension is most of my job. I've spent close to twenty years setting technical foundations for creative teams, from a generation-defining console launch to studios built from nothing, and the pattern holds. The magic shows up when someone does the unglamorous work of understanding the problem first, then builds a plan that empowers the people doing the creative work.",
  ],
  tagline: "Applied systems-thinking, curiosity-led imagination.",
  stats: [
    { value: "24M+", label: "players launched, zero downtime" },
    { value: "2.5 yrs", label: "of dev time saved for partners" },
    { value: "2 → 30", label: "grown from a two-person team" },
    { value: "~20 yrs", label: "across engineering and business" },
  ],
  highlights: [
    {
      id: "console-launch",
      title: "Console launch at scale",
      metric: "24M+ players, 25 titles, zero downtime",
      body: "I ran launch readiness for a generation-defining console: wargaming the failure modes with a global workforce until the ways it could break were boring. Scale is the easy part to quote. The real work was making a very high-stakes moment feel calm for everyone downstream of it.",
      status: "detailed",
    },
    {
      id: "sdk-patent",
      title: "Developer experience & a patent",
      metric: "2.5 years saved · U.S. Patent 11,789,846",
      body: "I build the foundations other people build on: SDKs, observability, and tooling that saved studio partners a self-reported 2.5 years of cumulative development time, plus a patent for triaging bugs across microservices. Good infrastructure is invisible. It gives the creative team back the time they'd have spent fighting the plumbing.",
      status: "detailed",
    },
    {
      id: "org-from-zero",
      title: "Teams & studios from zero",
      metric: "2 → 30 people · a studio stood up abroad",
      body: "I've grown a two-person initiative into a thirty-person department and stood up a studio in an emerging talent market. Building the team is the same craft as building the system: clear expectations, real support, and enough safety for people to stretch, fail, and come back stronger.",
      status: "detailed",
    },
    {
      id: "range",
      title: "Range: technical, business, change",
      metric: "Wharton MBA · Cornell CS · ~20 years",
      body: "A CS degree, an MBA in organizational effectiveness, and close to twenty years moving between the engineering and the business of creative products. It means I can translate: complex systems into plain language for partners, and a business goal into an architecture that actually serves it. Most of my value is being fluent in both rooms and helping them change together.",
      status: "detailed",
    },
    {
      id: "indie-projects",
      title: "Indie projects",
      body: "Smaller, stranger things I build to test an idea in my own hands. Writing these up soon.",
      status: "coming-soon",
    },
    {
      id: "consulting",
      title: "Consulting",
      body: "Recent partner work. Details as I get the ok to share them.",
      status: "coming-soon",
    },
  ],
  closing: [
    "So that's the shape of it. I'm less interested in whether a new tool will change everything or nothing, and more interested in figuring out, carefully, what it can genuinely do for the specific creative work in front of us, then building the foundation where that becomes real.",
    "The Workbench is where I test those ideas in the open. Some are finished, some still have their working notes left in. Go as deep as you're curious to.",
  ],
};
