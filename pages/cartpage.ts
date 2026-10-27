import { Page, Locator } from "@playwright/test";

export class CartPage{

    readonly checkoutbtn : Locator;

    constructor(page: Page){

        this.checkoutbtn = page.locator('#checkout');

    }

    async checkoutbtnclick(){
        await this.checkoutbtn.click();
    }

}