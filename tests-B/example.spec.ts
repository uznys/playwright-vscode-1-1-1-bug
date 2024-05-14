import { test, expect } from '@playwright/test';

test('correct config', async ({ page }) => {
  expect(process.env.CONFIG_NAME).toEqual('Config for tests-B');
});
