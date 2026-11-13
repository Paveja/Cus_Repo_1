"use client";
import { useEffect, useReducer } from "react";
import { calculatorReducer, initialState } from "../lib/calculator";
const keys = [
  "AC",
  "±",
  "DEL",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "−",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
const labels: Record<string, string> = {
  AC: "Clear all",
  "±": "Toggle sign",
  DEL: "Delete last digit",
  "÷": "Divide",
  "×": "Multiply",
  "−": "Subtract",
  "+": "Add",
  "=": "Equals",
  ".": "Decimal point",
};
export function Calculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      const mapped: Record<string, string> = {
        "*": "×",
        "/": "÷",
        "-": "−",
        Enter: "=",
        Escape: "AC",
        Backspace: "DEL",
        Delete: "AC",
      };
      const key = mapped[event.key] ?? event.key;
      if (keys.includes(key)) {
        event.preventDefault();
        dispatch(key);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  return (
    <section
      aria-labelledby="calculator-title"
      className="w-full max-w-sm rounded-container border border-border bg-card p-6 shadow-sm motion-safe:animate-enter"
    >
      <h1
        id="calculator-title"
        className="font-heading text-2xl font-semibold tracking-tight"
      >
        Calculator
      </h1>
      <div className="my-6 rounded-control border border-border bg-background px-4 py-6 text-right">
        <p
          className="min-h-6 break-all text-base text-muted-foreground"
          aria-label="Expression"
        >
          {state.expression || "\u00a0"}
        </p>
        <output
          aria-label="Result"
          aria-live="polite"
          className="mt-2 block overflow-x-auto font-mono text-4xl leading-tight tabular-nums"
        >
          {state.display}
        </output>
        <p
          role={state.error ? "alert" : undefined}
          className="mt-2 min-h-6 text-base text-destructive"
        >
          {state.error || "\u00a0"}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {keys.map((key) => {
          const operator = ["÷", "×", "−", "+"].includes(key);
          return (
            <button
              key={key}
              type="button"
              aria-label={labels[key] ?? key}
              aria-pressed={operator ? state.operator === key : undefined}
              onClick={() => dispatch(key)}
              className={[
                "min-h-16 rounded-control text-xl font-medium transition duration-150",
                "focus-visible:outline-2 focus-visible:outline-offset-2",
                "focus-visible:outline-ring active:scale-95",
                key === "0" ? "col-span-2" : "",
                key === "="
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : operator && state.operator === key
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-border",
              ].join(" ")}
            >
              {key}
            </button>
          );
        })}
      </div>
      <p className="mt-6 text-center text-base text-muted-foreground">
        Use your keyboard, too. Enter to calculate.
        <br />
        Esc to clear.
      </p>
    </section>
  );
}
