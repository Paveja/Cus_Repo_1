export default function Loading() {
  return (
    <main aria-busy="true" className="mx-auto max-w-7xl px-6 py-24">
      <p role="status" className="font-heading text-3xl">
        Opening a new chapter…
      </p>
      <div className="mt-8 h-64 rounded-2xl bg-muted motion-safe:animate-pulse" />
    </main>
  );
}
