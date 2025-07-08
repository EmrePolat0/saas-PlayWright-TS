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

  await newPage.getByPlaceholder('name@company.com').fill('test@example.com');
  await newPage.getByPlaceholder('password').fill('testPassword1.');
  await newPage.getByRole('button', { name: 'Log In' }).click();
  await newPage.getByText('Actions Library').click();

  await expect(newPage.getByText('Actions Library')).toBeVisible();
 // await expect(newPage).toHaveURL('/uibakery/');

  //await expect(newPage.locator('.name')).toHaveText('test@example');
  await newPage.locator('.CodeMirror-code');
  await page.keyboard.type('https://jsonplaceholder.typicode.com/posts');
  await newPage.locator('.text', { hasText: 'Execute action' }).click();

  const segmentValue = page.locator('span.segment-value', { hasText: 'userId: 1' });

  //await  expect(segmentValue).toContainText('userId: 1');

  //console.log(await page.locator('button[title="Dashboard"]').count());
  await page.locator('.nb-overlay-container').waitFor({ state: 'visible' });
  await page.getByText('Back to apps', { exact: true }).click();

});
