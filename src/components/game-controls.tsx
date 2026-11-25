'use client';

import type { Difficulty } from '@/lib/game';

type GameControlsProps = {
  mode: 'pvp' | 'computer';
  difficulty: Difficulty;
  soundEnabled: boolean;
  onModeChange: (mode: 'pvp' | 'computer') => void;
  onDifficultyChange: (difficulty: Difficulty) => void;
  onSoundToggle: () => void;
  onNewGame: () => void;
  onRestart: () => void;
};

const controlClass = [
  'min-h-11 rounded-lg border px-4 text-sm font-semibold transition',
  'hover:border-primary/70 focus-visible:outline-none focus-visible:ring-2',
  'focus-visible:ring-ring active:scale-[0.98]',
].join(' ');

export function GameControls({
  mode,
  difficulty,
  soundEnabled,
  onModeChange,
  onDifficultyChange,
  onSoundToggle,
  onNewGame,
  onRestart,
}: GameControlsProps) {
  return (
    <section className="space-y-6" aria-label="Game settings">
      <div>
        <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-[0.18em] uppercase">
          Game mode
        </p>
        <div className="bg-muted/60 grid grid-cols-2 gap-2 rounded-xl p-1">
          {(['pvp', 'computer'] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onModeChange(option)}
              className={[
                'focus-visible:ring-ring min-h-11 rounded-lg px-3 text-sm font-semibold transition',
                'focus-visible:ring-2 focus-visible:outline-none',
                mode === option
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              ].join(' ')}
              aria-pressed={mode === option}
            >
              {option === 'pvp' ? 'Player vs Player' : 'vs Computer'}
            </button>
          ))}
        </div>
      </div>

      {mode === 'computer' && (
        <div className="animate-fade-up">
          <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-[0.18em] uppercase">
            AI difficulty
          </p>
          <div className="grid grid-cols-3 gap-2">
            {(['easy', 'medium', 'hard'] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onDifficultyChange(option)}
                className={[
                  'focus-visible:ring-ring min-h-11 rounded-lg border px-2 text-sm',
                  'font-semibold capitalize transition focus-visible:ring-2 focus-visible:outline-none',
                  difficulty === option
                    ? 'border-accent bg-accent/15 text-accent'
                    : 'border-border text-muted-foreground hover:border-accent/60 hover:text-foreground',
                ].join(' ')}
                aria-pressed={difficulty === option}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={onRestart}
          className={`${controlClass} border-border bg-card text-foreground`}
        >
          Restart round
        </button>
        <button
          type="button"
          onClick={onNewGame}
          className={`${controlClass} border-primary bg-primary text-primary-foreground`}
        >
          New game
        </button>
      </div>

      <button
        type="button"
        onClick={onSoundToggle}
        className={[
          'border-border bg-card text-muted-foreground flex min-h-11 w-full',
          'items-center justify-between rounded-lg border px-4 text-sm font-semibold transition',
          'hover:border-primary/70 hover:text-foreground focus-visible:ring-2',
          'focus-visible:ring-ring focus-visible:outline-none',
        ].join(' ')}
      >
        <span>Sound effects</span>
        <span className={soundEnabled ? 'text-success' : 'text-muted-foreground'}>
          {soundEnabled ? 'On' : 'Off'}
        </span>
      </button>
    </section>
  );
}
