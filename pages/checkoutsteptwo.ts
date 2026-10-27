import { Page, Locator } from "@playwright/test";

export class Checkoutpagetwo{

    readonly finishbtn: Locator;

    constructor(page: Page){

        this.finishbtn = page.locator('#finish');
    }

    async checkoutpage2(){

        await this.finishbtn.click();
    }
}