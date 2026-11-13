"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-3xl font-bold">The celebration hit a little snag.</h1>
      <p className="text-muted-foreground">Let’s give it another try.</p>
      <button
        type="button"
        onClick={reset}
        className="min-h-12 rounded-control bg-primary px-6 py-3 font-bold text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        Try again
      </button>
    </main>
  );
}
