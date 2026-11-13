'use client';

import { useEffect, useReducer } from 'react';
import { calculatorReducer, initialState, keyboardKey } from '@/lib/calculator';

const keys = [
  'AC',
  '±',
  '%',
  '÷',
  '7',
  '8',
  '9',
  '×',
  '4',
  '5',
  '6',
  '−',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];
const labels: Record<string, string> = {
  AC: 'All clear',
  '±': 'Toggle sign',
  '%': 'Percent',
  '÷': 'Divide',
  '×': 'Multiply',
  '−': 'Subtract',
  '+': 'Add',
  '=': 'Equals',
  '.': 'Decimal point',
};

export default function Calculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      if (event.key === 'Enter' && event.target instanceof HTMLButtonElement) return;
      const key = keyboardKey(event.key);
      if (keys.includes(key) || ['Backspace', 'Escape'].includes(key)) {
        event.preventDefault();
        dispatch(key);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <main className="bg-background text-foreground flex min-h-dvh items-center justify-center px-4 py-8 font-sans">
      <section
        aria-labelledby="calculator-title"
        className="w-full max-w-sm motion-safe:animate-[enter_220ms_ease-out]"
      >
        <h1
          id="calculator-title"
          className="mb-8 text-center text-2xl font-semibold tracking-tight"
        >
          Calculator
        </h1>
        <div className="border-border bg-card shadow-foreground/5 overflow-hidden rounded-3xl border p-4 shadow-xl sm:p-6">
          <div className="bg-muted mb-6 flex min-h-40 flex-col justify-end overflow-hidden rounded-2xl p-6 text-right">
            <div className="text-muted-foreground min-h-6 truncate text-base">
              {state.expression || '\u00a0'}
            </div>
            <output
              aria-live="polite"
              aria-atomic="true"
              aria-label="Result"
              className={`mt-2 block overflow-x-auto text-5xl leading-tight font-medium tracking-tight tabular-nums ${state.display === 'Error' ? 'text-destructive' : ''}`}
            >
              {state.display}
            </output>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {keys.map((key) => {
              const operator = ['÷', '×', '−', '+'].includes(key);
              const active = operator && state.operator === key;
              const colors =
                key === '='
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : active
                    ? 'bg-primary text-primary-foreground'
                    : operator
                      ? 'bg-primary/10 text-primary hover:bg-primary/20'
                      : ['AC', '±', '%'].includes(key)
                        ? 'bg-muted text-muted-foreground hover:bg-border'
                        : 'bg-card text-foreground ring-1 ring-border hover:bg-muted';
              return (
                <button
                  key={key}
                  type="button"
                  aria-label={labels[key] ?? key}
                  aria-pressed={operator ? active : undefined}
                  onClick={() => dispatch(key)}
                  className={`focus-visible:outline-ring min-h-16 cursor-pointer rounded-xl text-2xl font-medium transition duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-95 motion-reduce:transition-none ${key === '0' ? 'col-span-2' : ''} ${colors}`}
                >
                  {key}
                </button>
              );
            })}
          </div>
        </div>
        <p className="text-muted-foreground mt-6 text-center text-sm">
          Use your keyboard, too. Enter to calculate · Esc to clear
        </p>
      </section>
    </main>
  );
}
