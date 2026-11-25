import assert from 'node:assert/strict';
import test from 'node:test';
import { POST } from './route';

test('rejects invalid game payloads through the stats route', async () => {
  const request = new Request('http://localhost/api/stats', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ outcome: 'invalid', mode: 'computer' }),
  });

  const response = await POST(request);

  assert.equal(response.status, 400);
  assert.deepEqual(await response.json(), {
    error: 'A valid game outcome and mode are required.',
  });
});
