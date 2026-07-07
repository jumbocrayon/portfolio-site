import { useState } from "react";
import { motion } from "motion/react";

/**
 * The trivial interactive that proves the DemoSlot drop-in flow.
 *
 * It does one thing: you give it a turn, it responds and reveals a tiny truth.
 * That is the whimsy-with-intent rule in miniature, the playful element actually
 * does something. Replace this with any real demo; the contract is the same.
 */
const REACTIONS = [
  "there it is. the site responds.",
  "small thing, but it's really running.",
  "every interaction is a tiny hypothesis.",
  "this is the simplest demo here, on purpose.",
  "touchable beats described. that's the whole idea.",
];

export default function TryItBox() {
  const [turns, setTurns] = useState(0);
  const reaction = turns === 0 ? "go on, give it a turn" : REACTIONS[(turns - 1) % REACTIONS.length];

  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <motion.button
        type="button"
        onClick={() => setTurns((n) => n + 1)}
        whileTap={{ scale: 0.92 }}
        animate={turns > 0 ? { rotate: [0, -2, 2, 0] } : undefined}
        transition={{ duration: 0.3 }}
        className="rounded-xl bg-accent px-6 py-3.5 font-display text-lg font-semibold text-accent-contrast shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page"
        aria-label="Give it a turn"
      >
        try it
      </motion.button>
      <p className="min-h-6 font-display text-content-muted" aria-live="polite">
        {reaction}
      </p>
      {turns > 0 && (
        <p className="text-xs text-content-muted/70">
          {turns} {turns === 1 ? "turn" : "turns"} so far
        </p>
      )}
    </div>
  );
}
