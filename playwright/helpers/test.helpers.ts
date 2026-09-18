import { Page, test } from '@playwright/test';

export async function logStep(
  title: string,
  action: () => Promise<void>,
): Promise<void> {
  await test.step(title, action);
}

export async function closeCookies(page: Page) {
  const cookieConsent = page.getByRole("link", {
    name: "accept all cookies",
  });

  if (await cookieConsent.isVisible().catch(() => false)) {
    await cookieConsent.click();
  }
}

 