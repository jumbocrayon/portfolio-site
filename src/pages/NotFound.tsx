import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="font-hand text-5xl">404</h1>
      <p className="mt-3 text-lg text-ink-soft">
        This experiment isn't on the workbench. Maybe it's still an idea.
      </p>
      <Link to="/" className="mt-6 inline-block font-hand text-marker">
        ← back to the workbench
      </Link>
    </div>
  );
}
