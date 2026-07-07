import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="font-display text-6xl font-bold tracking-tight">404</h1>
      <p className="mt-3 text-lg text-content-muted">
        This experiment isn't on the workbench. Maybe it's still an idea.
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
