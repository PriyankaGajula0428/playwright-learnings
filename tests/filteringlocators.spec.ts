import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://sdetqa.vercel.app/filters_practice');
})

test.afterEach(async ({ page }) => {
    await page.close();
})

test('Verify "Add to cart" for Product 2', async ({ page }) => {

    const addtocartprod2 = page.getByRole('listitem').filter({ hasText: 'Product 2' }).getByRole('button', { name: 'Add to cart' });
    await expect(addtocartprod2).toBeVisible();
})

test('Count items not having "Out of stock"', async ({ page }) => {

    const instockitems = page.locator('.demo-list').nth(1).getByRole('listitem').filter({ hasNotText: 'Out of stock' });
    await expect(instockitems).toHaveCount(3);

})

test('Find items with "In stock"', async ({ page }) => {

    const instock = await page.getByRole('listitem').filter({ hasText: 'In stock' }).count();
    console.log('Total instock items:', instock);
})

test('Find items with "Out of stock" ', async ({ page }) => {

    const outofstock = await page.getByRole('listitem').filter({ hasText: 'Out of stock' }).count();
    console.log('Total outofstock items:', outofstock);
})

test('Verify elements using data-testid', async ({ page }) => {
    const apple = page.getByTestId('apple');
    const banana = page.getByTestId('banana');
    const orange = page.getByTestId('orange');

    await expect(apple).toBeVisible();
    await expect(banana).toBeVisible();
    await expect(orange).toBeVisible();

    await expect(apple).toContainText('apple');
    await expect(banana).toContainText('banana');
    await expect(orange).toContainText('orange');
})

test('Count all elements with test ids', async ({ page }) => {
    const alltestids = await page.locator('[data-testid]').count();
    console.log('Total test ids:', alltestids);
})