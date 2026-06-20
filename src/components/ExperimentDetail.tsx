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
        <h1 className="mt-3 font-hand text-4xl leading-tight">{experiment.title}</h1>
        <p className="mt-3 text-lg text-ink-soft">{experiment.hook}</p>
      </header>

      <section className="mb-10">
        <DemoSlot demo={experiment.demo} placeholderLabel={experiment.title} />
        {experiment.shareableArtifact && (
          <p className="mt-3 text-center text-xs text-ink-soft/70">
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
  /** The deepest layer (systems) gets the teal "depth" cue. */
  accent?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`overflow-hidden rounded-xl border-2 ${
        accent ? "border-sky/50 bg-sky/5" : "border-ink/15 bg-paper"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-5 py-3 text-left font-hand text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-marker"
      >
        <span className={accent ? "text-sky" : ""}>{title}</span>
        <motion.span animate={{ rotate: open ? 90 : 0 }} className="text-marker">
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
            <p className="px-5 pb-4 leading-relaxed text-ink-soft">{children}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
