import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getStats, recordGame } from '@/lib/stats';

const gameSchema = z.object({
  outcome: z.enum(['X', 'O', 'draw']),
  mode: z.enum(['pvp', 'computer']),
});

export async function GET() {
  try {
    return NextResponse.json(await getStats());
  } catch (error) {
    console.error('Failed to load game statistics', error);
    return NextResponse.json({ error: 'Statistics are unavailable right now.' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const parsed = gameSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'A valid game outcome and mode are required.' },
      { status: 400 }
    );
  }

  try {
    return NextResponse.json(await recordGame(parsed.data.outcome, parsed.data.mode));
  } catch (error) {
    console.error('Failed to record game statistics', error);
    return NextResponse.json({ error: 'The game could not be saved.' }, { status: 500 });
  }
}
