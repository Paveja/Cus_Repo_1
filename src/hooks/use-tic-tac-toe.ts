'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  getComputerMove,
  getWinner,
  emptyBoard,
  playMove,
  type Board,
  type Difficulty,
  type GameResult,
  type Mark,
} from '@/lib/game';
import { playDrawSound, playInvalidSound, playMoveSound, playWinSound } from '@/lib/sound';
import { useGameStats } from '@/hooks/use-game-stats';
export type Mode = 'pvp' | 'computer';

export function useTicTacToe() {
  const [board, setBoard] = useState<Board>(emptyBoard);
  const [turn, setTurn] = useState<Mark>('X');
  const [mode, setMode] = useState<Mode>('computer');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [result, setResult] = useState<GameResult>(null);
  const [winningLine, setWinningLine] = useState<number[]>([]);
  const { stats, statsError, saveResult } = useGameStats(mode);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const isComputerTurn = mode === 'computer' && turn === 'O' && !result;
  const computerThinking = isComputerTurn;

  const startRound = useCallback(() => {
    setBoard(emptyBoard());
    setTurn('X');
    setResult(null);
    setWinningLine([]);
  }, []);

  const finishMove = useCallback(
    (nextBoard: Board, mark: Mark) => {
      setBoard(nextBoard);
      const outcome = getWinner(nextBoard);
      if (outcome.result) {
        setResult(outcome.result);
        setWinningLine(outcome.line);
        if (soundEnabled) {
          if (outcome.result === 'draw') playDrawSound();
          else playWinSound();
        }
        void saveResult(outcome.result);
        return;
      }
      setTurn(mark === 'X' ? 'O' : 'X');
    },
    [saveResult, soundEnabled]
  );

  const selectCell = useCallback(
    (index: number) => {
      if (result || isComputerTurn) return;
      const nextBoard = playMove(board, index, turn);
      if (!nextBoard) {
        if (soundEnabled) playInvalidSound();
        return;
      }
      if (soundEnabled) playMoveSound();
      finishMove(nextBoard, turn);
    },
    [board, finishMove, isComputerTurn, result, soundEnabled, turn]
  );

  useEffect(() => {
    if (!isComputerTurn) return;
    const timer = window.setTimeout(() => {
      const index = getComputerMove(board, difficulty);
      if (index !== null) {
        const nextBoard = playMove(board, index, 'O');
        if (nextBoard) {
          if (soundEnabled) playMoveSound();
          finishMove(nextBoard, 'O');
        }
      }
    }, 420);
    return () => window.clearTimeout(timer);
  }, [board, difficulty, finishMove, isComputerTurn, soundEnabled]);

  const status = useMemo(() => {
    if (result === 'draw')
      return { label: 'Round draw', detail: 'A clean board. Take another shot.' };
    if (result)
      return {
        label: `${result} wins`,
        detail:
          mode === 'computer' && result === 'O'
            ? 'The computer found the line.'
            : 'That was a decisive line.',
      };
    if (computerThinking)
      return { label: 'Computer thinking', detail: 'Looking for the best move…' };
    return {
      label: `${turn}'s turn`,
      detail:
        mode === 'computer' && turn === 'X'
          ? 'You are X. Make your move.'
          : 'Choose an open cell to play.',
    };
  }, [computerThinking, mode, result, turn]);

  return {
    board,
    turn,
    mode,
    difficulty,
    result,
    winningLine,
    stats,
    statsError,
    soundEnabled,
    computerThinking,
    status,
    setDifficulty,
    setSoundEnabled,
    selectCell,
    startRound,
    setMode: (nextMode: Mode) => {
      setMode(nextMode);
      startRound();
    },
  };
}
