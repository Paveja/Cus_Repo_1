export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-label="Loading watch showcase"
      className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 lg:px-8"
    >
      <span className="sr-only" role="status">
        Loading watch showcase…
      </span>
      <div aria-hidden="true" className="space-y-8 self-center">
        <div className="rounded-control bg-muted h-24 w-3/4" />
        <div className="rounded-control bg-muted h-24 w-full" />
        <div className="rounded-control bg-muted h-12 w-48" />
      </div>
      <div
        aria-hidden="true"
        className="rounded-control bg-muted aspect-4/5 motion-safe:animate-pulse"
      />
    </main>
  );
}
