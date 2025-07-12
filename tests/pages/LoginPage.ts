import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(email: string, password: string) {
    await this.page.getByPlaceholder('name@company.com').fill(email);
    await this.page.getByPlaceholder('password').fill(password);
    await this.page.getByRole('button', { name: 'Log In' }).click();
  }
}