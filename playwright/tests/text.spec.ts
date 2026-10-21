import { test, expect, Page } from '@playwright/test';
import { Helpers } from '../helpers/helpers';
import { closeCookies, logStep } from '../helpers/test.helpers';

test.describe("Text snippets", () => {

  test('contains any text in class', async ({ page }) => {
    await expect(page.locator('.feedback')).toHaveText(/.+/);
  });

  test('contains specific text in class', async ({ page }) => {
    await expect(page.locator('.invalid-feedback')).toContainText(['Important']);
  });
  
})

