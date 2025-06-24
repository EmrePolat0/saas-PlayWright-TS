import { test, expect } from '@playwright/test';

test('handle login opening new tab', async ({ page, context }) => {
  await page.goto('https://uibakery.io/templates/saas-dashboard');

  // Wait for the new tab to open on the browser context
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),  
    page.getByRole('link', { name: 'Log in' }).click(),  // click triggers new tab
  ]);

  await newPage.waitForLoadState('load');
  expect(newPage.url()).toContain('uibakery');

  await page.fill('#input-email', 'test@example.com');

});