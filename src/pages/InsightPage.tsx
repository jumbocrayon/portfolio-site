import { Link, useParams } from "react-router-dom";
import { getInsight } from "@/content/insights";
import InsightDetail from "@/components/InsightDetail";

/** Route wrapper: resolves the slug to an Insight and renders the template. */
export default function InsightPage() {
  const { slug } = useParams<{ slug: string }>();
  const insight = slug ? getInsight(slug) : undefined;

  if (!insight) {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight">
          Nothing written here (yet).
        </h1>
        <p className="mt-3 text-content-muted">
          This piece may still be in the working notes.
        </p>
        <Link
          to="/insights"
          className="mt-6 inline-block font-display font-medium text-accent hover:text-accent-hover"
        >
          ← back to Insights
        </Link>
      </div>
    );
  }

  return (
    <>
      <Link
        to="/insights"
        className="mb-6 inline-block font-display font-medium text-accent hover:text-accent-hover"
      >
        ← back to Insights
      </Link>
      <InsightDetail insight={insight} />
    </>
  );
}
