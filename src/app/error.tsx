"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-background p-6 text-foreground">
      <h1 className="text-2xl font-semibold">The calculator couldn’t load</h1>
      <button
        onClick={reset}
        className="min-h-12 rounded-control bg-primary px-6 py-3 text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        Try again
      </button>
    </main>
  );
}
