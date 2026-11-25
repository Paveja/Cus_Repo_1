'use client';

import { GameBoard } from '@/components/game-board';
import { GameControls } from '@/components/game-controls';
import { useTicTacToe } from '@/hooks/use-tic-tac-toe';

export function TicTacToe() {
  const game = useTicTacToe();
  const { stats, mode, result, winningLine, board, computerThinking, status, statsError } = game;
  return (
    <main id="main-content" className="min-h-screen px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <section className="animate-fade-up space-y-8">
          <header className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-accent mb-3 text-xs font-semibold tracking-[0.25em] uppercase">
                Local play / 01
              </p>
              <h1 className="font-heading text-4xl tracking-tight text-balance sm:text-5xl">
                Tic Tac Toe
              </h1>
              <p className="text-muted-foreground mt-3 max-w-xl text-base leading-6">
                A quick match, a sharp mind, and one clean line to victory.
              </p>
            </div>
            <div className="border-border bg-card text-muted-foreground rounded-full border px-4 py-2 text-sm font-semibold">
              {stats.gamesPlayed} {stats.gamesPlayed === 1 ? 'game' : 'games'} played
            </div>
          </header>
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_16rem] xl:items-center">
            <div
              className={[
                'border-border bg-card rounded-[var(--radius-container)] border p-5',
                'shadow-[0_18px_50px_rgb(0_0_0_/_0.18)] sm:p-8',
              ].join(' ')}
            >
              <div
                className="border-accent mb-6 flex items-center justify-between gap-4 border-l-4 pl-4"
                aria-live="polite"
              >
                <div>
                  <p className="font-heading text-foreground text-xl">{status.label}</p>
                  <p className="text-muted-foreground mt-1 text-sm">{status.detail}</p>
                </div>
                <div className="bg-muted text-foreground rounded-lg px-3 py-2 text-sm font-bold">
                  {mode === 'computer' ? game.difficulty : 'PVP'}
                </div>
              </div>
              <GameBoard
                board={board}
                winningLine={winningLine}
                disabled={Boolean(result) || computerThinking}
                onSelect={game.selectCell}
              />
              {statsError && (
                <p role="status" className="text-warning mt-5 text-center text-sm">
                  {statsError}
                </p>
              )}
            </div>
            <div className="grid grid-cols-3 gap-2 xl:grid-cols-1 xl:gap-3">
              <ScoreCard
                label="You / X"
                value={mode === 'computer' ? stats.playerWins : stats.xWins}
                tone="primary"
              />
              <ScoreCard
                label={mode === 'computer' ? 'Computer / O' : 'O wins'}
                value={mode === 'computer' ? stats.computerWins : stats.oWins}
                tone="accent"
              />
              <ScoreCard label="Draws" value={stats.draws} tone="muted" />
            </div>
          </div>
        </section>
        <aside
          className={[
            'animate-fade-up border-border bg-card rounded-[var(--radius-container)] border p-5',
            'shadow-[0_18px_50px_rgb(0_0_0_/_0.18)] sm:p-6',
          ].join(' ')}
          style={{ animationDelay: '80ms' }}
        >
          <div className="mb-6">
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.18em] uppercase">
              Match setup
            </p>
            <h2 className="font-heading mt-2 text-2xl">Set the pace</h2>
          </div>
          <GameControls
            mode={mode}
            difficulty={game.difficulty}
            soundEnabled={game.soundEnabled}
            onModeChange={game.setMode}
            onDifficultyChange={(next) => {
              game.setDifficulty(next);
              game.startRound();
            }}
            onSoundToggle={() => game.setSoundEnabled((enabled) => !enabled)}
            onNewGame={game.startRound}
            onRestart={game.startRound}
          />
          <div className="border-border text-muted-foreground mt-8 border-t pt-5 text-sm">
            <div className="flex justify-between gap-4">
              <span>PVP rounds</span>
              <strong className="text-foreground">{stats.pvpGames}</strong>
            </div>
            <div className="mt-3 flex justify-between gap-4">
              <span>Computer rounds</span>
              <strong className="text-foreground">{stats.computerGames}</strong>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function ScoreCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: 'primary' | 'accent' | 'muted';
}) {
  const toneClass = {
    primary: 'text-primary',
    accent: 'text-accent',
    muted: 'text-muted-foreground',
  }[tone];
  return (
    <div className="border-border bg-muted/50 rounded-xl border p-3 sm:p-4 xl:p-5">
      <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">{label}</p>
      <p className={`font-heading mt-2 text-3xl ${toneClass}`}>{value}</p>
    </div>
  );
}
