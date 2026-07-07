import { Link, useParams } from "react-router-dom";
import { getExperiment } from "@/content/experiments";
import ExperimentDetail from "@/components/ExperimentDetail";

/** Route wrapper: resolves the slug to an Experiment and renders the template. */
export default function ExperimentPage() {
  const { slug } = useParams<{ slug: string }>();
  const experiment = slug ? getExperiment(slug) : undefined;

  if (!experiment) {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight">No experiment here (yet).</h1>
        <p className="mt-3 text-content-muted">
          This slot is empty — maybe it's still on the workbench.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block font-display font-medium text-accent hover:text-accent-hover"
        >
          ← back to the workbench
        </Link>
      </div>
    );
  }

  return (
    <>
      <Link
        to="/"
        className="mb-6 inline-block font-display font-medium text-accent hover:text-accent-hover"
      >
        ← back to the workbench
      </Link>
      <ExperimentDetail experiment={experiment} />
    </>
  );
}
