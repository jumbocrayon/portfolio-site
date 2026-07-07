import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Experiment } from "@/content/experiment";
import AliveIndicator from "./AliveIndicator";
import DemoSlot from "./DemoSlot";

/**
 * ExperimentDetail — the progressive-disclosure template.
 *
 * The whole site's altitude rule lives here: surface (hook + touchable demo)
 * stays light and inviting; depth is reachable but never forced. "What it is"
 * opens first; "how it works" and "systems" fall away below for those who dig.
 * Every demo uses this one template — it is the workhorse.
 */
export default function ExperimentDetail({ experiment }: { experiment: Experiment }) {
  return (
    <article className="mx-auto max-w-2xl">
      {/* Surface: status, title, hook, the touchable thing. */}
      <header className="mb-8">
        <AliveIndicator status={experiment.status} updatedAt={experiment.updatedAt} />
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-balance">
          {experiment.title}
        </h1>
        <p className="mt-3 text-lg text-content-muted">{experiment.hook}</p>
      </header>

      <section className="mb-10">
        <DemoSlot demo={experiment.demo} placeholderLabel={experiment.title} />
        {experiment.shareableArtifact && (
          <p className="mt-3 text-center text-xs text-content-muted/80">
            produces: {experiment.shareableArtifact}
          </p>
        )}
      </section>

      {/* Depth, on demand. */}
      <div className="space-y-3">
        {experiment.depth.whatItIs && (
          <DepthSection title="What it is" defaultOpen>
            {experiment.depth.whatItIs}
          </DepthSection>
        )}
        {experiment.depth.howItWorks && (
          <DepthSection title="How it works">{experiment.depth.howItWorks}</DepthSection>
        )}
        {experiment.depth.systems && (
          <DepthSection title="Systems & analysis" accent>
            {experiment.depth.systems}
          </DepthSection>
        )}
      </div>
    </article>
  );
}

function DepthSection({
  title,
  children,
  defaultOpen = false,
  accent = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  /** The deepest layer (systems) gets the purple "depth" cue. */
  accent?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`overflow-hidden rounded-xl border bg-surface ${
        accent ? "border-accent/40" : "border-line"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-5 py-3.5 text-left font-display text-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span className={accent ? "text-accent" : ""}>{title}</span>
        <motion.span animate={{ rotate: open ? 90 : 0 }} className="text-accent">
          →
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="px-5 pb-4 leading-relaxed text-content-muted">{children}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
