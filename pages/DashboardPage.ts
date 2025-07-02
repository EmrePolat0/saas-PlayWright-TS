import {Page, Locator} from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly userStatsCard: Locator;
  readonly salesChart: Locator;
  readonly notificationsPanel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userStatsCard = page.locator('text=Users Statistics');
    this.salesChart = page.locator('canvas'); // Assuming there’s a chart
    this.notificationsPanel = page.locator('text=Notifications');
  }

  async goto() {
    await this.page.goto('https://uibakery.io/templates/saas-dashboard');
  }

  async isUserStatsVisible() {
    return this.userStatsCard.isVisible();
  }

  async isSalesChartVisible() {
    return this.salesChart.isVisible();
  }

  async isNotificationsVisible() {
    return this.notificationsPanel.isVisible();

  }
}
