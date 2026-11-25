import assert from 'node:assert/strict';
import test from 'node:test';
import { emptyBoard, getComputerMove, getWinner, playMove, type Board } from './game';

test('detects wins, draws, and unfinished boards', () => {
  const xWin: Board = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
  assert.deepEqual(getWinner(xWin), { result: 'X', line: [0, 1, 2] });
  const draw: Board = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
  assert.deepEqual(getWinner(draw), { result: 'draw', line: [] });
  assert.deepEqual(getWinner(emptyBoard()), { result: null, line: [] });
});

test('rejects occupied moves and only returns legal computer moves', () => {
  const board: Board = ['X', null, 'O', null, 'X', null, null, null, null];
  assert.equal(playMove(board, 0, 'O'), null);
  for (const difficulty of ['easy', 'medium', 'hard'] as const) {
    const move = getComputerMove(board, difficulty);
    assert.ok(move !== null && board[move] === null);
  }
});

test('hard AI takes a winning move', () => {
  const board: Board = ['O', 'O', null, 'X', 'X', null, null, null, null];
  assert.equal(getComputerMove(board, 'hard'), 2);
});

test('hard AI blocks an immediate loss', () => {
  const board: Board = ['X', 'X', null, 'O', null, null, null, null, null];
  assert.equal(getComputerMove(board, 'hard'), 2);
});
