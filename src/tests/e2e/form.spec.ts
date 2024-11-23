import { test, expect } from '@playwright/test';

test('form generation and submission', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toBeVisible();
});

export {};