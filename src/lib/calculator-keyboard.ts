const keyboard: Record<string, string> = {
  "*": "×",
  "/": "÷",
  "-": "−",
  Enter: "=",
  Escape: "AC",
  Backspace: "DEL",
  Delete: "AC",
};

type CalculatorKeyEvent = Pick<
  KeyboardEvent,
  "key" | "ctrlKey" | "metaKey" | "altKey" | "preventDefault"
>;

export function handleCalculatorKey(
  event: CalculatorKeyEvent,
  dispatch: (key: string) => void,
): void {
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  const key = keyboard[event.key] ?? event.key;
  if (
    /^[0-9.]$/.test(key) ||
    ["+", "−", "×", "÷", "=", "%", "AC", "DEL"].includes(key)
  ) {
    event.preventDefault();
    dispatch(key);
  }
}
