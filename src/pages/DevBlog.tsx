/**
 * Dev blog — STUB ONLY.
 *
 * Per scope: the route/placement is reserved, but the blog system is a separate,
 * later content stream. Do not build it here. This page exists so the nav slot
 * and URL are real and the "coming alive" ethos is honest about what's next.
 */
export default function DevBlog() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-block size-3 animate-pulse rounded-full bg-status-live" aria-hidden />
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight">Dev blog, warming up</h1>
      <p className="mt-4 text-lg text-content-muted">
        Short Familiar dev-blog episodes will live here. Each one doubles as
        first-pass feature code, one build wearing three hats. The stream isn't
        open yet; this slot is reserved on purpose.
      </p>
    </div>
  );
}
