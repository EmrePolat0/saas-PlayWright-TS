import { test, expect } from '@playwright/test';

test('SaaS Dashboard: Login and execute action', async ({ page, context }) => {
  // Step 1: Navigate to the dashboard template page
  await page.goto('https://uibakery.io/templates/saas-dashboard');

  // Step 2: Click 'Log in' and handle new tab opening
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Log in' }).click(),
  ]);

  // Step 3: Wait for the new tab to load and validate URL
  await newPage.waitForLoadState('load');
  expect(newPage.url()).toContain('uibakery');

  // Step 4: Fill in login credentials and submit
  await newPage.getByPlaceholder('name@company.com').fill('test@example.com');
  await newPage.getByPlaceholder('password').fill('testPassword1.');
  await newPage.getByRole('button', { name: 'Log In' }).click();

  // Step 5: Wait for and click 'Actions Library'
  await expect(newPage.getByText('Actions Library')).toBeVisible();
  await newPage.getByText('Actions Library').click();

  // Step 6: Fill API endpoint in CodeMirror editor
  const codeEditor = newPage.locator('.CodeMirror-code');
  await codeEditor.click();
  await newPage.keyboard.press('Control+A');
  await newPage.keyboard.press('Delete');
  await newPage.keyboard.type('https://jsonplaceholder.typicode.com/posts');

  // Step 7: Click 'Execute action' button
  await newPage.locator('.text', { hasText: 'Execute action' }).click();

  // Step 8: Verify JSON result contains the expected object
  const resultLocator = newPage.locator(
    'section.segment.segment-type-object.segment-depth-0:has(span.segment-value:has-text("userId: 1, id: 1"))'
  );
  await expect(resultLocator).toBeVisible();
});