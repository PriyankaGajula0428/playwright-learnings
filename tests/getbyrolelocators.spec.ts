import { test, expect } from '@playwright/test';

test('Get by role locators', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByRole('button', { name: 'Primary Action' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Priyanka');

    await page.getByRole('checkbox', { name: 'Accept terms' }).click();

    const alertmessage = page.getByRole('alert');
    await expect(alertmessage).toHaveText('This is an important alert message!')


})