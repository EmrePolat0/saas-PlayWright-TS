import{test, expect, Page} from '@playwright/test'

async function addAndViewCart(page: Page){
  await test.step('add and view cart', async () => {
    await page.getByRole('button', { name: 'Add To Bag' }).click();
    await page.getByLabel('cart').click();
  }, { box: true }); // box: true will hide the implementation details of the step
}

test.describe('add to cart scenarios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://cloudtesting.contosotraders.com/')
  });

});
  test('add to cart from carousel', async ({ page }) => {
    await page.getByRole('button', { name: 'Buy Now' }).click();
    await addAndViewCart(page);
    await expect(page.getByText('Xbox Wireless Controller Lunar Shift Special Edition')).toBeVisible();
  });
