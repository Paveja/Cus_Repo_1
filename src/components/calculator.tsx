"use client";

import { useState, type FormEvent } from "react";
import { addNumbers, formatSum, type AdditionResult } from "../lib/add-numbers";

export default function Calculator() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [result, setResult] = useState<AdditionResult | null>(null);
  const error = result && !result.success ? result.error : null;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(addNumbers(first, second));
  }

  return (
    <section
      className="w-full max-w-lg rounded-container border border-border border-t-4
        border-t-primary bg-card p-6 text-card-foreground shadow-sm sm:p-8"
      aria-labelledby="calculator-title"
    >
      <h1
        id="calculator-title"
        className="text-balance text-3xl font-semibold tracking-tight"
      >
        Add two numbers
      </h1>
      <p className="mt-3 text-pretty text-base leading-6 text-muted-foreground">
        Enter your numbers and find their sum.
      </p>
      <form onSubmit={submit} noValidate className="mt-8 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-number"
              className="mb-2 block text-base font-medium"
            >
              First number
            </label>
            <input
              id="first-number"
              name="first"
              type="number"
              inputMode="decimal"
              step="any"
              required
              value={first}
              onChange={(event) => {
                setFirst(event.target.value);
                setResult(null);
              }}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "addition-error" : undefined}
              placeholder="e.g. 12.5"
              className="min-h-12 w-full min-w-0 rounded-control border border-border
                bg-background px-4 py-3 text-base tabular-nums transition-colors duration-150
                placeholder:text-muted-foreground hover:border-primary focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-ring"
            />
          </div>
          <div>
            <label
              htmlFor="second-number"
              className="mb-2 block text-base font-medium"
            >
              Second number
            </label>
            <input
              id="second-number"
              name="second"
              type="number"
              inputMode="decimal"
              step="any"
              required
              value={second}
              onChange={(event) => {
                setSecond(event.target.value);
                setResult(null);
              }}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "addition-error" : undefined}
              placeholder="e.g. 7.5"
              className="min-h-12 w-full min-w-0 rounded-control border border-border
                bg-background px-4 py-3 text-base tabular-nums transition-colors duration-150
                placeholder:text-muted-foreground hover:border-primary focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-ring"
            />
          </div>
        </div>
        {error && (
          <p
            id="addition-error"
            role="alert"
            className="text-base text-destructive"
          >
            {error}
          </p>
        )}
        <button
          type="submit"
          className="min-h-12 w-full rounded-control bg-primary px-6 py-3 text-base
            font-semibold text-primary-foreground transition duration-150 hover:bg-primary-hover
            focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring
            active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none"
        >
          Add numbers
        </button>
      </form>
      <div className="mt-8 rounded-control bg-muted p-6">
        <p
          id="result-label"
          className="text-base font-medium text-muted-foreground"
        >
          Result
        </p>
        <output
          aria-labelledby="result-label"
          aria-live="polite"
          aria-atomic="true"
          className="mt-2 block break-words text-3xl font-semibold tabular-nums leading-10"
        >
          {result?.success ? (
            formatSum(result.value)
          ) : (
            <span className="text-base font-normal text-muted-foreground">
              Your sum will appear here.
            </span>
          )}
        </output>
      </div>
    </section>
  );
}
