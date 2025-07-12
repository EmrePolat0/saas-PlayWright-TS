import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async clickActionsLibrary() {
    await expect(this.page.getByText('Actions Library')).toBeVisible();
    await this.page.getByText('Actions Library').click();
  }

  async fillAPIAndExecute(endpoint: string) {
    const codeEditor = this.page.locator('.CodeMirror-code');
    await codeEditor.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Delete');
    await this.page.keyboard.type(endpoint);
    await this.page.locator('.text', { hasText: 'Execute action' }).click();
  }

  async verifyResult() {
    const resultLocator = this.page.locator(
      'section.segment.segment-type-object.segment-depth-0:has(span.segment-value:has-text("userId: 1, id: 1"))'
    );
    await expect(resultLocator).toBeVisible();
  }
}