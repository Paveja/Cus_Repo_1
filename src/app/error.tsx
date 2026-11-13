"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">
        Something didn’t load.
      </h1>
      <p className="text-muted-foreground">
        Please try again to explore the lineup.
      </p>
      <button
        onClick={reset}
        className="rounded-full bg-primary px-6 py-3 text-background"
      >
        Try again
      </button>
    </main>
  );
}
