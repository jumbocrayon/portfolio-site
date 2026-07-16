import type { Experiment } from "./experiment";
import TryItBox from "@/demos/TryItBox";
import FamiliarCarousel from "@/demos/FamiliarCarousel";

/**
 * The seeded Workbench.
 *
 * Two entries for v0, both rendering through the real Experiment type and
 * components. The pre-mortem worksheet borrows the trivial TryItBox demo for
 * now purely to prove the DemoSlot drop-in flow end to end; the centerpiece
 * intentionally has no demo so it renders the "coming alive" placeholder.
 */
export const experiments: Experiment[] = [
  {
    slug: "comic-vignette-engine",
    title: "Comic-vignette engine",
    hook: "Tell it one moment. Watch it become a tiny animated comic you can share.",
    status: "in-progress",
    tags: ["centerpiece", "real-time AI", "animation", "art × science"],
    updatedAt: "2026-06-18",
    shareableArtifact: "a cute, customizable, shareable animated comic of a single told moment",
    depth: {
      whatItIs:
        "The flagship. A human-defined art style meets real-time AI animation: you give it a single told moment, and it turns it into a customizable, shareable animated comic. It's 'art meets science, made touchable,' the whole thesis in one demo.",
      howItWorks:
        "A told moment is parsed into a beat, a cast, and a camera. The art direction stays human-defined (my hand sets the style); the AI fills the in-betweens in real time against those constraints. It originates as a Familiar feature, where a playthrough's story becomes a shareable vignette.",
      systems:
        "The interesting problem isn't the model, it's the guardrails: how do you let AI animate freely while keeping a consistent, human-authored style? The answer is a constraint layer that treats art direction as a first-class input, not a post-hoc filter. The same build wears three hats: feature, demo, and an Insights episode.",
    },
    // No demo yet — renders the centerpiece "coming alive" placeholder.
  },
  {
    slug: "familiar",
    title: "Familiar",
    hook: "You're not the hero. You're the animal at their side, and the only power you have is knowing them well enough to nudge.",
    status: "in-progress",
    tags: ["game design", "systems design", "tactical RPG", "content pipeline", "iOS"],
    updatedAt: "2026-07-01",
    shareableArtifact: "A mobile game about building a relationship during scattered moments of someone else's quest",
    depth: {
      whatItIs:
        "A tactical RPG for iOS where you play the familiar, not the adventurer. You can't speak, cast, or swing a sword. You can only influence the person you're bonding with, and only as well as you actually know them. Bond deepens from Stranger to Familiar across a run; the closer you get, the more power you have to influence their choices.",
      howItWorks:
        "Every run is one relationship. A party of three is generated fresh; you pick a familiar and a person to follow. Encounters alternate tactical grid combat and narrative skill checks round by round, and your influence actions (Embolden, Soothe, Observe, Distract, Aid, Undercut) shift the odds rather than dictate the outcome. Familiarity is a single 0–100 scale that gates everything: hidden stats reveal one at a time as you cross thresholds, and unlocking the ability to redirect a choice comes with trust.",
      systems:
        "The challenge is making a relative lack of narrative agency fun for the player. The adventurer chooses what to do and when to do it, not the player! That meant one honest constraint everywhere: information and agency are both gated behind the bond. The content is data, not code: JSON packs loaded at runtime into plain C# objects, each type guarded by its own validator, with player-facing text kept out of the content entirely and routed through a localization ledger. It began as an overengineered content pipeline, a love letter to the challenges that always made me shake my head (and sometimes my fist) while working on mobile games professionally.",
    },
    // A screenshot reel stands in until a live playable slice is ready.
    demo: FamiliarCarousel,
  },
  {
    slug: "pre-mortem-worksheet",
    title: "Pre-mortem worksheet",
    hook: "Name the villain that kills your launch, before it gets the chance.",
    status: "spark-test",
    tags: ["satellite", "facilitation", "risk", "PS5-launch expertise"],
    updatedAt: "2026-06-12",
    shareableArtifact: "a filled-in 'villain of the week' pre-mortem card",
    depth: {
      whatItIs:
        "An interactive 'villain of the week' pre-mortem tool, distilled from PS5-launch expertise. You imagine the launch has already failed, then name and stat-block the villain that did it, so you can plan against it while it's still cheap to learn.",
      howItWorks:
        "Prompts walk a group from 'it failed' backwards to the specific, nameable cause. The toy demo below is a stand-in proving the drop-in flow; the real worksheet will capture, rank, and export the villains.",
      systems:
        "Pre-mortems work because they invert the question: instead of 'what could go wrong,' you assume it did and reverse-engineer why. That sidesteps optimism bias and surfaces the risks a status update would bury. Take risks when it's cheap to learn; this is that, as a tool.",
    },
    demo: TryItBox,
  },
];

/** Lookup by slug for the detail route. */
export function getExperiment(slug: string): Experiment | undefined {
  return experiments.find((e) => e.slug === slug);
}
