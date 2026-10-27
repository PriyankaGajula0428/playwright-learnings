import { Page, Locator, expect } from "@playwright/test";

export class CheckoutPageComplete{

    readonly page: Page;
    readonly generatepdf: Locator;

    constructor(page: Page){

        this.page = page;
        this.generatepdf = page.locator('#generate-pdf-order');
    }

    async checkoutcomplete(){

        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
        await expect(this.page.getByRole('heading')).toHaveText('Thank you for your order!');
        await this.generatepdf.click();

    }
}