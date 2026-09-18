import { Locator, Page, test } from "@playwright/test";

export class Helpers {
  constructor(private readonly page: Page) {}

  async openLinkInNewTab(link: Locator): Promise<Page> {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
      link.click(),
    ]);

    await newPage.waitForLoadState();

    return newPage;
  }
}
