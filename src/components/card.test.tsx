import { test, expect } from 'bun:test';

// We just test that the module exports correctly since we're in a non-DOM environment.
// Visual behavior is verified manually in the browser.
test('Card exports a function component', async () => {
  const mod = await import('./card');
  expect(typeof mod.Card).toBe('function');
});
