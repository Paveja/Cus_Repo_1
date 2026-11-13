"use client";

import { useState } from "react";

export default function GrowingGreeting() {
  const [sizeMultiplier, setSizeMultiplier] = useState(1);

  return (
    <h1 className="min-w-0 text-balance text-center font-heading text-4xl font-semibold leading-10 tracking-tight sm:text-5xl sm:leading-[52px]">
      <button
        type="button"
        aria-label="Hello, world! Click to make the text bigger"
        className="min-h-12 max-w-full cursor-pointer rounded-control bg-transparent leading-[1.1] [overflow-wrap:anywhere] hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        style={{ fontSize: `${sizeMultiplier}em` }}
        onClick={() => setSizeMultiplier((currentSize) => currentSize * 1.1)}
      >
        Hello, world<span className="text-primary">!</span>
      </button>
    </h1>
  );
}
