"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto max-w-xl px-6 py-24">
      <h1 className="font-heading text-4xl">We lost our place.</h1>
      <p className="my-6 text-muted-foreground">
        Something went wrong while opening this chapter. Please try again.
      </p>
      <button
        onClick={reset}
        className="min-h-12 rounded-full bg-primary px-6 py-3 text-primary-foreground hover:brightness-110"
      >
        Try again
      </button>
    </main>
  );
}
