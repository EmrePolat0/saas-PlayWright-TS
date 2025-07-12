import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://uibakery.io/templates/saas-dashboard');
  }

  async clickLoginLink() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.getByRole('link', { name: 'Log in' }).click(),
    ]);
    await newPage.waitForLoadState('load');
    return newPage;
  }
}