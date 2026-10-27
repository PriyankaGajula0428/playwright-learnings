import { Page, Locator } from "@playwright/test";

export class Checkoutpage{

    readonly fname: Locator;
    readonly lname: Locator;
    readonly zipcode: Locator;
    readonly continuebtn: Locator;

     constructor(page: Page){
         this.fname = page.locator('#first-name');
         this.lname = page.locator('#last-name');
         this.zipcode = page.locator('#postal-code');
         this.continuebtn = page.locator('#continue');

     }

     async checkout(Firstname: string, Lastname: string, Postalcode: string){
        await this.fname.fill(Firstname);
        await this.lname.fill(Lastname);
        await this.zipcode.fill(Postalcode);
        await this.continuebtn.click();

     }
}