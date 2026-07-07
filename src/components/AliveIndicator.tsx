import type { ExperimentStatus } from "@/content/experiment";

const STATUS_META: Record<
  ExperimentStatus,
  { label: string; dot: string; text: string }
> = {
  live: { label: "live", dot: "bg-status-live", text: "text-status-live" },
  "in-progress": {
    label: "in progress",
    dot: "bg-status-progress",
    text: "text-status-progress",
  },
  "spark-test": {
    label: "spark test",
    dot: "bg-status-spark",
    text: "text-status-spark",
  },
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
      <span className={`font-display font-medium ${meta.text}`}>{meta.label}</span>
      {updatedAt && (
        <span className="text-content-muted/70">· updated {updatedAt}</span>
      )}
    </span>
  );
}
