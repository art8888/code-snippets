import { test, expect, Page } from '@playwright/test';
import { Helpers } from '../helpers/helpers';
import { closeCookies, logStep } from '../helpers/test.helpers';

test.describe("Homepage", () => {
  
  test.beforeEach(async ({ page }) => {
   await closeCookies(page);
  });
  
  test('is open in new page', async ({ page }) => {
    const helpers = new Helpers(page);

    const newTabLink = page
      .getByRole('link', { name: 'playwright' })
      .first();

    await logStep('Open Playwright link', async () => {
      const newTab = await helpers.openLinkInNewTab(newTabLink);

      await expect(newTab).toHaveURL(/expected-url/, {
        timeout: 2000,
      });
    });
  });

  test('Excel export works', async ({ page }) => {
    const downloadPromise = page.waitForEvent('download');
  
    await page.locator('a[title="Excel"]').click();
    
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toMatch(/\.xlsx$/i);
  });

})

