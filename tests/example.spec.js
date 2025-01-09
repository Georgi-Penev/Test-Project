// @ts-check
import { test, expect } from '@playwright/test';
const baseURL = 'http://127.0.0.1:5500/site.html'


test.describe('UI', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL);
  });

  test('correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Test');
  });
});
