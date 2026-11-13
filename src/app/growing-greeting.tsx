"use client";

import { useState } from "react";

export default function GrowingGreeting() {
  const [sizeMultiplier, setSizeMultiplier] = useState(1);

  return (
    <h1 className="text-balance text-center font-heading text-4xl font-semibold leading-10 tracking-tight sm:text-5xl sm:leading-[52px]">
      <button
        type="button"
        aria-label="Hello, world! Click to make the text bigger"
        onClick={() => setSizeMultiplier((currentSize) => currentSize * 1.1)}
        style={{ fontSize: `${sizeMultiplier}em` }}
        className="cursor-pointer rounded-control leading-normal [overflow-wrap:anywhere] hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        Hello, world<span className="text-primary">!</span>
      </button>
    </h1>
  );
}
