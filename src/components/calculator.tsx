"use client";

import { useEffect, useReducer } from "react";
import { calculatorReducer, initialState } from "@/lib/calculator";
import { handleCalculatorKey } from "@/lib/calculator-keyboard";

const keys = [
  { text: "AC", label: "Clear all", kind: "utility" },
  { text: "+/−", label: "Change sign", kind: "utility" },
  { text: "%", label: "Percent", kind: "utility" },
  { text: "÷", label: "Divide", kind: "operator" },
  ...["7", "8", "9"].map((text) => ({ text, label: text, kind: "number" })),
  { text: "×", label: "Multiply", kind: "operator" },
  ...["4", "5", "6"].map((text) => ({ text, label: text, kind: "number" })),
  { text: "−", label: "Subtract", kind: "operator" },
  ...["1", "2", "3"].map((text) => ({ text, label: text, kind: "number" })),
  { text: "+", label: "Add", kind: "operator" },
  { text: "DEL", label: "Delete last digit", kind: "utility" },
  { text: "0", label: "0", kind: "number" },
  { text: ".", label: "Decimal point", kind: "number" },
  { text: "=", label: "Equals", kind: "equals" },
];

export default function Calculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      handleCalculatorKey(event, dispatch);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section
      aria-label="Calculator"
      className="w-full max-w-sm rounded-container border border-border
        bg-card p-6 shadow-sm motion-safe:animate-enter sm:p-8"
    >
      <div className="mb-8 min-w-0 border-b border-border pb-8 text-right">
        <p
          className="mb-4 h-6 truncate text-base text-muted-foreground"
          aria-label="Expression"
        >
          {state.error
            ? "Try another calculation"
            : state.expression || "\u00A0"}
        </p>
        <output
          aria-live="polite"
          aria-atomic="true"
          className={`block overflow-x-auto py-1 font-heading text-5xl
            font-medium leading-tight tracking-tight tabular-nums ${
              state.error ? "text-destructive" : "text-foreground"
            }`}
        >
          {state.error ? "Error" : state.display}
        </output>
        {state.error && (
          <p role="alert" className="mt-4 text-base text-destructive">
            {state.error}
          </p>
        )}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {keys.map(({ text, label, kind }) => {
          const selected = kind === "operator" && state.operation === text;
          const color =
            kind === "equals" || selected
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : kind === "operator"
                ? "bg-primary/10 text-primary hover:bg-primary/20"
                : kind === "utility"
                  ? "bg-muted text-muted-foreground hover:bg-border"
                  : "bg-background text-foreground hover:bg-muted";
          return (
            <button
              key={text}
              type="button"
              aria-label={label}
              aria-pressed={kind === "operator" ? selected : undefined}
              onClick={() => dispatch(text)}
              className={`flex h-16 min-w-0 items-center justify-center
                rounded-control font-medium transition duration-150
                focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-ring active:scale-95 motion-reduce:transition-none
                ${text === "DEL" ? "text-base" : "text-2xl"} ${color}`}
            >
              {text}
            </button>
          );
        })}
      </div>
    </section>
  );
}
