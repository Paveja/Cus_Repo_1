import assert from 'node:assert/strict';
import test from 'node:test';
import { calculatorReducer, initialState, keyboardKey } from './calculator';

function press(...keys: string[]) {
  return keys.reduce(calculatorReducer, initialState);
}

test('supports all four operations and immediate chained evaluation', () => {
  assert.equal(press('8', '+', '2', '=').display, '10');
  assert.equal(press('8', '−', '2', '=').display, '6');
  assert.equal(press('8', '×', '2', '=').display, '16');
  assert.equal(press('8', '÷', '2', '=').display, '4');
  assert.equal(press('2', '+', '3', '×', '4', '=').display, '20');
});

test('handles decimals, sign, percentage and floating point rounding', () => {
  assert.equal(press('.', '1', '.', '+', '.', '2', '=').display, '0.3');
  assert.equal(press('5', '±').display, '-5');
  assert.equal(press('5', '0', '%').display, '0.5');
});

test('replaces operators and begins a fresh number after equals', () => {
  assert.equal(press('5', '+', '×', '2', '=').display, '10');
  assert.equal(press('5', '+', '2', '=', '4').display, '4');
});

test('reports division by zero and permits recovery', () => {
  assert.equal(press('8', '÷', '0', '=').display, 'Error');
  assert.equal(press('8', '÷', '0', '=', '3').display, '3');
  assert.deepEqual(press('8', '÷', '0', '=', 'AC'), initialState);
});

test('supports backspace, clear, input limit and keyboard mapping', () => {
  assert.equal(press('1', '2', 'Backspace').display, '1');
  assert.deepEqual(press('1', 'Escape'), initialState);
  assert.equal(press(...'1234567890123').display, '123456789012');
  assert.equal(keyboardKey('Enter'), '=');
  assert.equal(keyboardKey('*'), '×');
  assert.equal(keyboardKey('/'), '÷');
});
