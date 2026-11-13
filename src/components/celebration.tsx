"use client";

import { useEffect, useRef, useState } from "react";
import Confetti, { colors, makeParticles, type Particle } from "./confetti";
import PartyIllustration from "./party-illustration";

export default function Celebration() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [celebrating, setCelebrating] = useState(false);
  const cleanupTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (cleanupTimer.current) clearTimeout(cleanupTimer.current);
    },
    [],
  );

  function celebrate() {
    if (cleanupTimer.current) clearTimeout(cleanupTimer.current);
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setParticles(reducedMotion ? [] : makeParticles());
    setCelebrating(true);
    cleanupTimer.current = setTimeout(() => {
      setParticles([]);
      setCelebrating(false);
    }, 4000);
  }

  return (
    <main
      className="relative flex min-h-svh cursor-default flex-col items-center justify-center overflow-hidden px-6 py-16 text-center"
      onClick={celebrate}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {[12, 28, 72, 88].map((position, index) => (
          <span
            key={position}
            className="absolute h-4 w-2 rounded-sm opacity-60"
            style={{
              left: `${position}%`,
              top: `${index % 2 === 0 ? 23 : 72}%`,
              transform: `rotate(${position * 3}deg)`,
              backgroundColor: `var(--color-${colors[index]})`,
            }}
          />
        ))}
      </div>
      <section className="relative flex max-w-xl animate-enter flex-col items-center motion-reduce:animate-none">
        <PartyIllustration />
        <h1 className="font-heading text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl">
          A little click.
          <br />A lot of <span className="text-primary">happy.</span>
        </h1>
        <p className="mt-6 max-w-sm text-lg leading-7 text-pretty text-muted-foreground">
          Big wins. Small wins. Just because.
          <br />
          There’s always a reason to celebrate.
        </p>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            celebrate();
          }}
          className="mt-8 inline-flex min-h-14 cursor-pointer items-center gap-3 rounded-control bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition duration-150 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring active:translate-y-0 active:scale-95"
        >
          Make it rain <span aria-hidden="true">↗</span>
        </button>
        <p className="mt-6 text-base text-muted-foreground">
          Or click anywhere. This moment is yours.
        </p>
        <p
          className="mt-8 min-h-6 text-base font-semibold text-primary"
          role="status"
          aria-live="polite"
        >
          {celebrating ? "Here’s to you. Let’s celebrate!" : ""}
        </p>
      </section>
      <Confetti particles={particles} />
    </main>
  );
}
