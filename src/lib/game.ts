export type Mark = 'X' | 'O';
export type Cell = Mark | null;
export type Board = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
export type GameResult = 'X' | 'O' | 'draw' | null;
export type Difficulty = 'easy' | 'medium' | 'hard';

export const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
] as const;

export const emptyBoard = (): Board => [null, null, null, null, null, null, null, null, null];

export function getWinner(board: Board): { result: GameResult; line: number[] } {
  for (const [first, second, third] of WINNING_LINES) {
    const mark = board[first];
    if (mark && mark === board[second] && mark === board[third]) {
      return { result: mark, line: [first, second, third] };
    }
  }

  return board.every(Boolean) ? { result: 'draw', line: [] } : { result: null, line: [] };
}

export function getAvailableMoves(board: Board): number[] {
  return board.reduce<number[]>((moves, cell, index) => {
    if (!cell) moves.push(index);
    return moves;
  }, []);
}

export function playMove(board: Board, index: number, mark: Mark): Board | null {
  if (index < 0 || index > 8 || board[index] || getWinner(board).result) return null;
  const nextBoard = [...board] as Board;
  nextBoard[index] = mark;
  return nextBoard;
}

function findWinningMove(board: Board, mark: Mark): number | null {
  for (const index of getAvailableMoves(board)) {
    const nextBoard = playMove(board, index, mark);
    if (nextBoard && getWinner(nextBoard).result === mark) return index;
  }
  return null;
}

function minimax(board: Board, maximizing: boolean, computer: Mark, human: Mark): number {
  const outcome = getWinner(board).result;
  if (outcome === computer) return 10;
  if (outcome === human) return -10;
  if (outcome === 'draw') return 0;

  const moves = getAvailableMoves(board);
  const scores = moves.map((index) => {
    const nextBoard = playMove(board, index, maximizing ? computer : human);
    return nextBoard ? minimax(nextBoard, !maximizing, computer, human) : 0;
  });
  return maximizing ? Math.max(...scores) : Math.min(...scores);
}

export function getComputerMove(
  board: Board,
  difficulty: Difficulty,
  computer: Mark = 'O'
): number | null {
  const moves = getAvailableMoves(board);
  if (!moves.length) return null;
  const human: Mark = computer === 'X' ? 'O' : 'X';

  if (difficulty === 'easy') return moves[Math.floor(Math.random() * moves.length)] ?? null;

  const winningMove = findWinningMove(board, computer);
  if (winningMove !== null) return winningMove;
  const blockingMove = findWinningMove(board, human);
  if (blockingMove !== null) return blockingMove;

  if (difficulty === 'medium') {
    if (!board[4]) return 4;
    const corners = [0, 2, 6, 8].filter((index) => !board[index]);
    if (corners.length) return corners[Math.floor(Math.random() * corners.length)] ?? null;
    return moves[0] ?? null;
  }

  let bestScore = -Infinity;
  let bestMove = moves[0] ?? null;
  for (const index of moves) {
    const nextBoard = playMove(board, index, computer);
    if (!nextBoard) continue;
    const score = minimax(nextBoard, false, computer, human);
    if (score > bestScore) {
      bestScore = score;
      bestMove = index;
    }
  }
  return bestMove;
}
