export type Operation = "+" | "−" | "×" | "÷";
export type CalculatorState = {
  display: string;
  stored: number | null;
  operation: Operation | null;
  replace: boolean;
  expression: string;
  error: string | null;
};

export const initialState: CalculatorState = {
  display: "0",
  stored: null,
  operation: null,
  replace: false,
  expression: "",
  error: null,
};

function compute(left: number, right: number, operation: Operation): number {
  if (operation === "+") return left + right;
  if (operation === "−") return left - right;
  if (operation === "×") return left * right;
  if (right === 0) throw new Error("Cannot divide by zero");
  return left / right;
}

function format(value: number): string {
  if (!Number.isFinite(value)) throw new Error("Result is too large");
  return String(Number(value.toPrecision(12)));
}

export function calculatorReducer(
  state: CalculatorState,
  key: string,
): CalculatorState {
  if (key === "AC") return initialState;
  if (/^[0-9.]$/.test(key)) {
    const fresh =
      state.replace || Boolean(state.error) || /e/i.test(state.display);
    const current = fresh ? "0" : state.display;
    if (key === "." && current.includes(".")) return state;
    if (current.replace(/[^0-9]/g, "").length >= 12 && !fresh) return state;
    const display =
      key === "." ? `${current}.` : current === "0" ? key : current + key;
    return {
      ...(state.error ? initialState : state),
      display,
      replace: false,
      error: null,
    };
  }
  if (state.error) return state;
  if (key === "DEL") {
    if (state.replace) return state;
    const shortened = /e/i.test(state.display)
      ? "0"
      : state.display.slice(0, -1);
    return {
      ...state,
      display: shortened && shortened !== "-" ? shortened : "0",
    };
  }
  if (key === "+/−")
    return { ...state, display: format(-Number(state.display)) };
  if (key === "%")
    return { ...state, display: format(Number(state.display) / 100) };
  const isOperation = ["+", "−", "×", "÷"].includes(key);
  if (!isOperation && key !== "=") return state;
  try {
    let result = Number(state.display);
    if (state.operation && state.stored !== null && !state.replace) {
      result = compute(state.stored, result, state.operation);
    }
    const display = format(result);
    if (key === "=") {
      if (!state.operation || state.replace) return state;
      return {
        ...initialState,
        display,
        replace: true,
        expression: `${state.stored} ${state.operation} ${state.display} =`,
      };
    }
    return {
      ...state,
      display,
      stored: result,
      operation: key as Operation,
      replace: true,
      expression: `${display} ${key}`,
    };
  } catch (error) {
    return {
      ...initialState,
      error: error instanceof Error ? error.message : "Unable to calculate",
    };
  }
}
