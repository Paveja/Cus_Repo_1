import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const gameStats = sqliteTable('game_stats', {
  id: integer('id').primaryKey(),
  gamesPlayed: integer('games_played').notNull().default(0),
  xWins: integer('x_wins').notNull().default(0),
  oWins: integer('o_wins').notNull().default(0),
  draws: integer('draws').notNull().default(0),
  playerWins: integer('player_wins').notNull().default(0),
  computerWins: integer('computer_wins').notNull().default(0),
  pvpGames: integer('pvp_games').notNull().default(0),
  computerGames: integer('computer_games').notNull().default(0),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().default(new Date()),
});

export type GameStats = typeof gameStats.$inferSelect;
