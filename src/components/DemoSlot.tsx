import { Suspense } from "react";
import type { DemoComponent } from "@/content/experiment";

interface DemoSlotProps {
  /** The interactive component to embed. Optional — slot shows a placeholder. */
  demo?: DemoComponent;
  /** Label for the placeholder state (e.g. "Comic-vignette engine"). */
  placeholderLabel?: string;
}

/**
 * DemoSlot — the extensibility primitive.
 *
 * It wraps an arbitrary interactive React component in consistent framing so
 * new demos drop in without special-casing. Pass `demo` to embed; omit it to
 * get the "coming alive" placeholder (used by the centerpiece slot for now).
 *
 * Suspense is here so future demos can lazy-load heavy bundles (e.g. the
 * real-time animation engine) without changing this contract.
 */
export default function DemoSlot({ demo: Demo, placeholderLabel }: DemoSlotProps) {
  return (
    <div className="relative rounded-2xl border-2 border-dashed border-ink/30 bg-paper-deep/40 p-4">
      {Demo ? (
        <Suspense fallback={<SlotFallback label="warming up…" />}>
          <Demo />
        </Suspense>
      ) : (
        <ComingAlive label={placeholderLabel} />
      )}
    </div>
  );
}

function SlotFallback({ label }: { label: string }) {
  return (
    <p className="py-8 text-center font-hand text-ink-soft">{label}</p>
  );
}

function ComingAlive({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-2 py-10 text-center">
      <span
        className="inline-block size-3 animate-pulse rounded-full bg-grow"
        aria-hidden
      />
      <p className="font-hand text-lg text-ink-soft">
        {label ?? "this experiment"} is coming alive
      </p>
      <p className="text-xs text-ink-soft/70">a demo will live in this slot</p>
    </div>
  );
}
