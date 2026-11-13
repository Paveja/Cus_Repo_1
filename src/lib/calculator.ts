export type CalculatorState = {
  display: string;
  stored: number | null;
  operator: string | null;
  replace: boolean;
  expression: string;
};

export const initialState: CalculatorState = {
  display: '0',
  stored: null,
  operator: null,
  replace: false,
  expression: '',
};

function calculate(left: number, right: number, operator: string): string {
  const result =
    operator === '+'
      ? left + right
      : operator === '−'
        ? left - right
        : operator === '×'
          ? left * right
          : left / right;
  return Number.isFinite(result) ? String(Number(result.toPrecision(12))) : 'Error';
}

export function calculatorReducer(state: CalculatorState, key: string): CalculatorState {
  if (key === 'AC' || key === 'Escape') return initialState;
  if (/^[0-9.]$/.test(key)) {
    const reset = state.replace || state.display === 'Error';
    const current = reset ? '0' : state.display;
    if (key === '.' && current.includes('.')) return state;
    const display = key === '.' ? `${current}.` : current === '0' ? key : `${current}${key}`;
    if (display.replace(/[-.]/g, '').length > 12) return state;
    return {
      ...state,
      display,
      replace: false,
      expression: reset && !state.operator ? '' : state.expression,
    };
  }
  if (state.display === 'Error') return state;
  if (key === 'Backspace') {
    if (state.replace) return state;
    const display = state.display.slice(0, -1);
    return { ...state, display: display && display !== '-' ? display : '0' };
  }
  if (key === '±' || key === '%') {
    const value = Number(state.display);
    return { ...state, display: String(key === '±' ? -value : value / 100) };
  }
  if (['+', '−', '×', '÷', '='].includes(key)) {
    const pending = state.operator && state.stored !== null;
    const display =
      pending && !state.replace
        ? calculate(state.stored!, Number(state.display), state.operator!)
        : state.display;
    if (display === 'Error')
      return { ...initialState, display, expression: 'Cannot divide by zero', replace: true };
    if (key === '=') {
      return {
        ...initialState,
        display,
        replace: true,
        expression: pending
          ? `${state.stored} ${state.operator} ${state.display} =`
          : state.expression,
      };
    }
    return {
      display,
      stored: Number(display),
      operator: key,
      replace: true,
      expression: `${display} ${key}`,
    };
  }
  return state;
}

export function keyboardKey(key: string): string {
  return (
    ({ '*': '×', '/': '÷', '-': '−', Enter: '=', Delete: 'AC' } as Record<string, string>)[key] ??
    key
  );
}
