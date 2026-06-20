import { useState } from "react";
import { motion } from "motion/react";

/**
 * The trivial interactive that proves the DemoSlot drop-in flow.
 *
 * It does one thing — you poke it, it reacts and reveals a tiny truth — which
 * is exactly the whimsy-with-intent rule in miniature: the playful element
 * *does* something. Replace this with any real demo; the contract is the same.
 */
const REACTIONS = [
  "ow! (kidding — do it again)",
  "see? the site is alive.",
  "every poke is a tiny experiment.",
  "you found the cheapest demo on the site.",
  "this is what 'touchable, not described' means.",
];

export default function PokeMeBox() {
  const [pokes, setPokes] = useState(0);
  const reaction = pokes === 0 ? "go on, poke me" : REACTIONS[(pokes - 1) % REACTIONS.length];

  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <motion.button
        type="button"
        onClick={() => setPokes((n) => n + 1)}
        whileTap={{ scale: 0.88, rotate: -4 }}
        animate={pokes > 0 ? { rotate: [0, -3, 3, 0] } : undefined}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border-2 border-ink bg-marker px-6 py-4 font-hand text-lg text-paper shadow-[3px_3px_0_0_var(--color-ink)] active:shadow-[1px_1px_0_0_var(--color-ink)]"
        style={{ rotate: "var(--rotate-tilt)" }}
        aria-label="Poke the box"
      >
        poke me
      </motion.button>
      <p className="min-h-6 font-hand text-ink-soft" aria-live="polite">
        {reaction}
      </p>
      {pokes > 0 && (
        <p className="text-xs text-ink-soft/70">
          poked {pokes} {pokes === 1 ? "time" : "times"}
        </p>
      )}
    </div>
  );
}
