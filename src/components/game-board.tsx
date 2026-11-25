'use client';

import type { Board, Mark } from '@/lib/game';

type GameBoardProps = {
  board: Board;
  winningLine: number[];
  disabled: boolean;
  onSelect: (index: number) => void;
};

export function GameBoard({ board, winningLine, disabled, onSelect }: GameBoardProps) {
  return (
    <div
      className="grid w-full max-w-[31rem] grid-cols-3 gap-3 sm:gap-4"
      aria-label="Tic Tac Toe board"
    >
      {board.map((cell, index) => {
        const isWinner = winningLine.includes(index);
        return (
          <button
            key={`cell-${index}`}
            type="button"
            aria-label={`Cell ${index + 1}${cell ? `, ${cell}` : ', empty'}`}
            disabled={disabled || Boolean(cell)}
            onClick={() => onSelect(index)}
            className={`group bg-card font-heading focus-visible:ring-ring focus-visible:ring-offset-background relative aspect-square rounded-[var(--radius-control)] border text-5xl transition-colors transition-transform duration-150 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:text-7xl ${
              isWinner
                ? 'border-accent bg-accent/15 text-accent shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_30%,transparent)]'
                : 'border-border/80 text-foreground hover:border-primary/70 hover:bg-primary/10 hover:-translate-y-0.5 disabled:cursor-default disabled:hover:translate-y-0'
            }`}
          >
            <span className={cell === 'X' ? 'text-primary' : 'text-accent'}>{cell}</span>
            {!cell && !disabled && (
              <span className="text-muted-foreground/20 pointer-events-none absolute inset-0 grid place-items-center text-2xl opacity-0 transition-opacity group-hover:opacity-100 sm:text-3xl">
                {((index % 3) + 1).toString()}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export const MarkGlyph = ({ mark }: { mark: Mark }) => (
  <span className={mark === 'X' ? 'text-primary' : 'text-accent'}>{mark}</span>
);
