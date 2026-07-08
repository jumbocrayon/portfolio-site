import type { Experiment } from "./experiment";
import TryItBox from "@/demos/TryItBox";

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
