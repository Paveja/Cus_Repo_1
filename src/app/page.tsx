'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <section className="border-border bg-card w-full max-w-md rounded-[var(--radius-container)] border p-8 text-center shadow-[0_24px_60px_-32px_var(--shadow-color)] sm:p-12">
        <p className="text-primary mb-3 text-sm font-semibold tracking-[0.2em] uppercase">
          Counter
        </p>
        <h1 className="font-heading text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
          Keep count, keep moving.
        </h1>
        <p className="text-muted-foreground mx-auto mt-4 max-w-[32ch] text-base leading-6">
          A simple counter that stays right here in this session.
        </p>
        <output
          className="font-heading text-foreground mt-10 block text-7xl font-semibold tracking-tight tabular-nums sm:text-8xl"
          aria-live="polite"
          aria-label={`Current count: ${count}`}
        >
          {count}
        </output>
        <div className="mt-10 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="border-border bg-secondary text-secondary-foreground hover:bg-accent focus-visible:outline-ring min-h-12 rounded-[var(--radius-control)] border px-5 text-base font-semibold transition duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]"
            onClick={() => setCount((currentCount) => currentCount - 1)}
          >
            Decrement
          </button>
          <button
            type="button"
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-ring min-h-12 rounded-[var(--radius-control)] px-5 text-base font-semibold transition duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]"
            onClick={() => setCount((currentCount) => currentCount + 1)}
          >
            Increment
          </button>
        </div>
      </section>
    </main>
  );
}
