'use client';

import { useCallback, useEffect, useState } from 'react';
import type { GameResult } from '@/lib/game';
import type { GameMode, Stats } from '@/lib/stats';

const initialStats: Stats = {
  id: 1,
  gamesPlayed: 0,
  xWins: 0,
  oWins: 0,
  draws: 0,
  playerWins: 0,
  computerWins: 0,
  pvpGames: 0,
  computerGames: 0,
  updatedAt: new Date(),
};

export function useGameStats(mode: GameMode) {
  const [stats, setStats] = useState<Stats>(initialStats);
  const [statsError, setStatsError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetch('/api/stats')
      .then(async (response) => {
        if (!response.ok) throw new Error('Unable to load statistics');
        return (await response.json()) as Stats;
      })
      .then((loadedStats) => {
        if (active) setStats(loadedStats);
      })
      .catch(() => {
        if (active) setStatsError('Stats will be available after the first saved game.');
      });
    return () => {
      active = false;
    };
  }, []);

  const saveResult = useCallback(
    async (outcome: Exclude<GameResult, null>) => {
      try {
        const response = await fetch('/api/stats', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ outcome, mode }),
        });
        if (!response.ok) throw new Error('Unable to save');
        setStats((await response.json()) as Stats);
        setStatsError(null);
      } catch {
        setStatsError('This result could not be saved, but you can keep playing.');
      }
    },
    [mode]
  );

  return { stats, statsError, saveResult };
}
