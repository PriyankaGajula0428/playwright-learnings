import { test, expect } from '@playwright/test';

test('Get by text', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByRole('button', { name: 'Primary Action' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Priyanka');

    await page.getByRole('checkbox', { name: 'Accept terms' }).click();

    const alertmessage = page.getByRole('alert');
    await expect(alertmessage).toHaveText('This is an important alert message!')

    const locatetext = page.getByText('Locate elements by their text content.', { exact: true });
    await expect(locatetext).toBeVisible();

    const list = page.getByText('List item 1');
    await expect(list).toBeVisible();

    const submitbutton = page.getByRole('button', { name: 'Submit Form' });
    await expect(submitbutton).toBeVisible();
    await submitbutton.click();

    const email = page.getByLabel('Email Address:');
    await expect(email).toBeVisible();
    await email.fill('priya@gmail.com');

    const expressradiobtn = page.getByRole('radio', { name: 'Express' });
    await expressradiobtn.click();

    const phonenum = page.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
    await expect(phonenum).toBeVisible();
    await phonenum.fill('9398506820');

    await expect(page.getByAltText('logo image')).toBeVisible();

    await expect(page.getByTitle('Home page link')).toBeVisible();

    await expect(page.getByTestId('product-card-1')).toBeVisible();
    const editprofilebtn = page.getByTestId('edit-profile-btn');
    await editprofilebtn.click();
    const productslink = page.getByTestId('nav-products');
    await productslink.click();


})