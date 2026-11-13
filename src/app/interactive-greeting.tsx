"use client";

import { useState } from "react";

const greetingColors = [
  "text-primary",
  "text-greeting-violet",
  "text-greeting-rose",
  "text-greeting-teal",
] as const;

export default function InteractiveGreeting() {
  const [activationCount, setActivationCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h1 className="font-heading text-4xl font-semibold leading-10 tracking-tight sm:text-5xl sm:leading-[52px]">
        <button
          type="button"
          aria-describedby="greeting-hint"
          onClick={() => setActivationCount((count) => count + 1)}
          className={`cursor-pointer rounded-control px-4 py-3 transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring active:scale-95 motion-reduce:transform-none motion-reduce:transition-none ${greetingColors[activationCount % greetingColors.length]}`}
        >
          <span
            key={activationCount}
            className={`inline-block text-balance ${activationCount > 0 ? "motion-safe:animate-greeting-pop" : ""}`}
          >
            Hello, world!
          </span>
        </button>
      </h1>
      <p id="greeting-hint" className="text-base leading-6">
        Click the greeting for a little color.
      </p>
    </div>
  );
}
