import type { ComponentType } from "react";

/**
 * The Experiment content type.
 *
 * This is the spine of the whole site: everything on the Workbench is an
 * Experiment, and the detail template reads exclusively from this shape.
 * Adding a new interactive demo = adding one entry here (+ a component for
 * its DemoSlot). No rearchitecting required — that's the whole point.
 */

/** Where an experiment sits in its life. Drives the build-in-public surface. */
export type ExperimentStatus = "live" | "in-progress" | "spark-test";

/**
 * A demo component drops into a <DemoSlot>. Kept prop-light on purpose: a
 * demo owns its own state and chrome. The slot only provides framing.
 */
export type DemoComponent = ComponentType<Record<string, never>>;

/**
 * Progressive-disclosure depth. The visitor meets `whatItIs` first, can open
 * `howItWorks`, and only falls all the way to `systems` if they want to.
 * Each section is optional so a spark-test can ship with just a surface.
 */
export interface DepthSections {
  /** Plain-language: what is this thing? (always shown when expanded) */
  whatItIs?: string;
  /** The mechanism: how does it actually work? (one level deeper) */
  howItWorks?: string;
  /** The systems-level thinking + analysis. The proof, for those who dig. */
  systems?: string;
}

export interface Experiment {
  /** URL slug, also the stable id. e.g. "comic-vignette-engine" */
  slug: string;
  /** Display title. */
  title: string;
  /** The whimsy hook — one playful line that makes you want to poke it. */
  hook: string;
  /** Life stage; controls the alive/in-progress affordances. */
  status: ExperimentStatus;
  /** Freeform tags for scent + future filtering. */
  tags: string[];
  /** ISO date string; powers the "updated-at" build-in-public signal. */
  updatedAt: string;

  /** Progressive-disclosure copy. */
  depth: DepthSections;

  /**
   * Optional interactive surface shown on the card AND/OR the detail page.
   * This is the drop-in primitive: any React component, embedded via DemoSlot.
   */
  demo?: DemoComponent;

  /**
   * Optional one-liner describing a shareable artifact this experiment can
   * produce. Surfaced as a hint now; wired up when the demo is real.
   */
  shareableArtifact?: string;
}
