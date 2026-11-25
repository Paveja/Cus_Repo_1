import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { gameStats } from '@/db/schema';

export type GameOutcome = 'X' | 'O' | 'draw';
export type GameMode = 'pvp' | 'computer';
export type Stats = typeof gameStats.$inferSelect;

export async function getStats(): Promise<Stats> {
  const existing = await db.select().from(gameStats).where(eq(gameStats.id, 1)).get();
  if (existing) return existing;

  const [created] = await db.insert(gameStats).values({ id: 1 }).returning();
  if (!created) throw new Error('Unable to initialize game statistics');
  return created;
}

export async function recordGame(outcome: GameOutcome, mode: GameMode): Promise<Stats> {
  const current = await getStats();
  const isComputerMode = mode === 'computer';
  const isXWin = outcome === 'X';
  const isOWin = outcome === 'O';
  const isDraw = outcome === 'draw';

  const [updated] = await db
    .update(gameStats)
    .set({
      gamesPlayed: current.gamesPlayed + 1,
      xWins: current.xWins + Number(isXWin),
      oWins: current.oWins + Number(isOWin),
      draws: current.draws + Number(isDraw),
      playerWins: current.playerWins + Number(isXWin || (isComputerMode && isOWin)),
      computerWins: current.computerWins + Number(isComputerMode && isXWin),
      pvpGames: current.pvpGames + Number(!isComputerMode),
      computerGames: current.computerGames + Number(isComputerMode),
      updatedAt: new Date(),
    })
    .where(eq(gameStats.id, 1))
    .returning();

  if (!updated) throw new Error('Unable to record game statistics');
  return updated;
}
