import { test, expect } from '@playwright/test';

test('Get by role locators', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByRole('button', { name: 'Primary Action' }).click();

    const username = page.getByRole('textbox', { name: 'Username' });
    await username.fill('Priyanka');
    await expect(username).toHaveValue('Priyanka');

    const acceptTerms = page.getByRole('checkbox', { name: 'Accept terms' });
    await acceptTerms.check();
    await expect(acceptTerms).toBeChecked();

    const alertmessage = page.getByRole('alert');
    await expect(alertmessage).toHaveText('This is an important alert message!');
});