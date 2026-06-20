import type { ExperimentStatus } from "@/content/experiment";

const STATUS_META: Record<
  ExperimentStatus,
  { label: string; dot: string; text: string }
> = {
  live: { label: "live", dot: "bg-grow", text: "text-grow" },
  "in-progress": { label: "in progress", dot: "bg-highlight", text: "text-ink-soft" },
  "spark-test": { label: "spark test", dot: "bg-marker", text: "text-marker" },
};

/**
 * Build-in-public affordance: a small, honest status pill.
 * The pulsing dot is the "this site is alive / experiments are running" signal.
 */
export default function AliveIndicator({
  status,
  updatedAt,
}: {
  status: ExperimentStatus;
  updatedAt?: string;
}) {
  const meta = STATUS_META[status];
  return (
    <span className="inline-flex items-center gap-2 text-xs">
      <span className="relative flex size-2.5">
        <span
          className={`absolute inline-flex size-full animate-ping rounded-full opacity-60 ${meta.dot}`}
          aria-hidden
        />
        <span className={`relative inline-flex size-2.5 rounded-full ${meta.dot}`} />
      </span>
      <span className={`font-hand ${meta.text}`}>{meta.label}</span>
      {updatedAt && (
        <span className="text-ink-soft/60">· updated {updatedAt}</span>
      )}
    </span>
  );
}
