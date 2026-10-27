import { Page, Locator } from "@playwright/test";
 export class Inventory{

    readonly addtocart: Locator;
    readonly carticon: Locator;

    constructor(page: Page){
        this.addtocart = page.locator('#add-to-cart-sauce-labs-backpack');
        this.carticon = page.locator('.shopping_cart_link');
    }

    async addtocartbtnclick(){

        await this.addtocart.click();
        await this.carticon.click();

    }

 }