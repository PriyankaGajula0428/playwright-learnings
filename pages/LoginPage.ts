import {Page, Locator, expect} from '@playwright/test';

export class LoginPage{

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginbtn: Locator;

    constructor(page: Page){

        this.page =page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginbtn = page.locator('#login-button');
    }

    async goToLoginPage(){
         await this.page.goto('https://www.saucedemo.com/');
    }

    async loginvalidcredentials(uname: string, pwd: string){
        await this.username.fill(uname);
        await this.password.fill(pwd);
        await this.loginbtn.click();

    }

    async validLoginSucess(){
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
    }

}