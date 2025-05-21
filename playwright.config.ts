import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: false, // disable fully parallel for easier debugging
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    baseURL: 'https://uibakery.io/templates/saas-dashboard',
    headless: false,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
  projects: [
    {
      name: 'Desktop Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment later when ready
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 13'] },
    // },
    // {
    //   name: 'API Tests',
    //   use: { baseURL: 'https://uibakery.io/templates/saas-dashboard' },
    // },
  ],
});