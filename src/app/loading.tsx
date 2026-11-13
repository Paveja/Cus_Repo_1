export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-label="Loading showcase"
      className="mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-8 px-6 pt-24"
    >
      <span className="sr-only">Loading the product showcase</span>
      <div className="h-4 w-32 rounded-full bg-muted motion-safe:animate-pulse" />
      <div className="h-16 w-64 rounded-full bg-muted motion-safe:animate-pulse" />
      <div className="h-96 w-full rounded-3xl bg-card motion-safe:animate-pulse" />
    </main>
  );
}
