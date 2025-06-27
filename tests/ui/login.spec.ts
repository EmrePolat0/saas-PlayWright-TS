// import { test, expect, Browser, Page, chromium } from '@playwright/test';


// test('login test', async()=>{
//   const browser:Browser = await chromium.launch({headless:false});
//   const page:Page = await browser.newPage();
//   await page.goto("https://demoqa.com/");
  

// })

// test('handle login opening new tab', async ({ page, context }) => {
//   await page.goto('https://uibakery.io/templates/saas-dashboard');

//   // Wait for the new tab to open on the browser context
//   const [newPage] = await Promise.all([
//     context.waitForEvent('page'),   
//     page.getByRole('link', { name: 'Log in' }).click(),  // click triggers new tab
//   ]);

//   await newPage.waitForLoadState('load');
//   expect(newPage.url()).toContain('uibakery');
// });