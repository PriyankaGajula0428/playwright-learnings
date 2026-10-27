import {test, expect} from '@playwright/test';

test('my first test', async({page}) => {

    await page.goto("https://www.google.com");
    await page.locator('//*[@id="ti6dpd"]').fill('Playwright')
    await page.keyboard.press('Enter');
})