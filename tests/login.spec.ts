import {test, expect, Locator} from '@playwright/test';

test('Login valid credentials', async({page}) => {
    
    await page.goto("https://www.saucedemo.com/");

    const username: Locator = await page.locator('#user-name');
    const password: Locator = await page.locator('#password');
    const loginbtn : Locator = await page.locator('#login-button');
    
    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginbtn.click();

    //assertions
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    const title: Locator = await page.locator('.title');
    await expect(title).toHaveText('Products') 
})