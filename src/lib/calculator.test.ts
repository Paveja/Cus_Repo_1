import assert from "node:assert/strict";
import test from "node:test";
import { calculatorReducer, initialState } from "./calculator.ts";
import { handleCalculatorKey } from "./calculator-keyboard.ts";

const press = (...keys: string[]) =>
  keys.reduce(calculatorReducer, initialState);

for (const [key, expected] of [
  [".", "0."],
  ["2", "2"],
  ["DEL", "0"],
]) {
  test(`safely edits scientific notation with ${key}`, () => {
    const state = press(..."0.0000001", "%", key);
    assert.equal(state.display, expected);
    assert.equal(state.error, null);
    for (const unaryKey of ["+/−", "%"]) {
      const result = calculatorReducer(state, unaryKey);
      assert.equal(Number.isFinite(Number(result.display)), true);
      assert.equal(result.error, null);
    }
  });
}

test("Enter calculates even when the last clicked button is focused", () => {
  let state = press("5");
  let prevented = 0;
  for (const key of ["+", "2", "Enter"]) {
    const event = {
      key,
      target: { tagName: "BUTTON" },
      ctrlKey: false,
      metaKey: false,
      altKey: false,
      preventDefault: () => {
        prevented += 1;
      },
    };
    handleCalculatorKey(event, (action) => {
      state = calculatorReducer(state, action);
    });
  }
  assert.equal(state.display, "7");
  assert.equal(prevented, 3);
});

test("Space retains native button activation and modified shortcuts are ignored", () => {
  for (const [key, ctrlKey] of [
    [" ", false],
    ["Enter", true],
  ] as const) {
    let handled = false;
    handleCalculatorKey(
      {
        key,
        ctrlKey,
        metaKey: false,
        altKey: false,
        preventDefault: () => {
          handled = true;
        },
      },
      () => {
        handled = true;
      },
    );
    assert.equal(handled, false);
  }
});

test("supports all four arithmetic operations", () => {
  assert.equal(press("8", "+", "2", "=").display, "10");
  assert.equal(press("8", "−", "2", "=").display, "6");
  assert.equal(press("8", "×", "2", "=").display, "16");
  assert.equal(press("8", "÷", "2", "=").display, "4");
});
test("handles decimals without floating point noise", () => {
  assert.equal(press(".", "1", "+", ".", "2", "=").display, "0.3");
  assert.equal(press("1", ".", ".", "2").display, "1.2");
});
test("chains left to right and replaces pending operators", () => {
  assert.equal(press("2", "+", "3", "×", "4", "=").display, "20");
  assert.equal(press("2", "+", "×", "3", "=").display, "6");
});
test("supports clear, delete, sign, and percent", () => {
  assert.equal(press("1", "2", "DEL").display, "1");
  assert.deepEqual(press("1", "+", "AC"), initialState);
  assert.equal(press("5", "+/−").display, "-5");
  assert.equal(press("5", "0", "%").display, "0.5");
});
test("rejects division by zero and recovers with a digit", () => {
  assert.equal(press("8", "÷", "0", "=").error, "Cannot divide by zero");
  assert.equal(press("8", "÷", "0", "=", "3").display, "3");
  assert.equal(press("8", "÷", "0", "=", "3").error, null);
});
test("starts fresh after equals and limits input length", () => {
  assert.equal(press("2", "+", "3", "=", "7").display, "7");
  assert.equal(press(..."123456789012345").display, "123456789012");
  assert.equal(press("5", "=").display, "5");
});
