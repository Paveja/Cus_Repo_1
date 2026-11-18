"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col items-start justify-center gap-6 px-6 py-16">
      <h1 className="font-heading text-4xl font-normal">
        A moment out of time.
      </h1>
      <p role="alert" className="text-muted-foreground text-pretty">
        We couldn’t load the watch showcase. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-control bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-ring min-h-12 px-6 py-3 font-medium transition duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-[0.98]"
      >
        Try again
      </button>
    </main>
  );
}
