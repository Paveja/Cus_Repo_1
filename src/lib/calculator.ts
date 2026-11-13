export type CalculatorState = {
  display: string;
  stored: number | null;
  operator: string | null;
  fresh: boolean;
  expression: string;
  error: string;
};
export const initialState: CalculatorState = {
  display: "0",
  stored: null,
  operator: null,
  fresh: false,
  expression: "",
  error: "",
};
function calculate(left: number, right: number, operator: string) {
  if (operator === "+") return left + right;
  if (operator === "−") return left - right;
  if (operator === "×") return left * right;
  return right === 0 ? NaN : left / right;
}
export function calculatorReducer(
  state: CalculatorState,
  key: string,
): CalculatorState {
  if (key === "AC") return initialState;
  if (/^[0-9.]$/.test(key)) {
    const base = state.fresh || state.error ? "0" : state.display;
    if (key === "." && base.includes(".")) return state;
    if (base.replace(/[-.]/g, "").length >= 12) return state;
    const display = key === "." ? base + "." : base === "0" ? key : base + key;
    return {
      ...(state.error ? initialState : state),
      display,
      fresh: false,
      error: "",
      expression: state.fresh && !state.operator ? "" : state.expression,
    };
  }
  if (state.error) return state;
  if (key === "DEL")
    return {
      ...state,
      display: state.fresh
        ? "0"
        : state.display.slice(0, -1).replace(/^-$|^$/, "0"),
      fresh: false,
    };
  if (key === "±")
    return {
      ...state,
      display: state.display.startsWith("-")
        ? state.display.slice(1)
        : "-" + state.display,
    };
  if (!["+", "−", "×", "÷", "="].includes(key)) return state;
  const value = Number(state.display);
  if (key === "=" && (!state.operator || state.stored === null || state.fresh))
    return state;
  const shouldCalculate =
    state.operator && state.stored !== null && !state.fresh;
  const result = shouldCalculate
    ? calculate(state.stored!, value, state.operator!)
    : value;
  if (!Number.isFinite(result))
    return {
      ...state,
      error:
        value === 0 && state.operator === "÷"
          ? "Cannot divide by zero"
          : "Result is too large",
      fresh: true,
    };
  const display = String(Number(result.toPrecision(12)));
  return {
    display,
    stored: key === "=" ? null : result,
    operator: key === "=" ? null : key,
    fresh: true,
    error: "",
    expression:
      key === "="
        ? `${state.stored} ${state.operator} ${state.display} =`
        : `${display} ${key}`,
  };
}
