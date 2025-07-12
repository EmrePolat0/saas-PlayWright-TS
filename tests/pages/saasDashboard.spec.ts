import { test, expect } from '@playwright/test';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashboardPage';

test('SaaS Dashboard: Login and execute action', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  const newPage = await homePage.clickLoginLink();
  const loginPage = new LoginPage(newPage);
  await loginPage.login('test@example.com', 'testPassword1.');

  const dashboardPage = new DashboardPage(newPage);
  await dashboardPage.clickActionsLibrary();
  await dashboardPage.fillAPIAndExecute('https://jsonplaceholder.typicode.com/posts');
  await dashboardPage.verifyResult();
});