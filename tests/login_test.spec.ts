import {test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Inventory } from '../pages/inventory';
import { CartPage } from '../pages/cartpage';
import { Checkoutpage } from '../pages/checkoutpage';
import { Checkoutpagetwo } from '../pages/checkoutsteptwo';
import { CheckoutPageComplete } from '../pages/checkoutpagecomplete';

test('login test', async({page}) => {

    const loginpage = new LoginPage(page);
    await loginpage.goToLoginPage();
    await loginpage.loginvalidcredentials('standard_user', 'secret_sauce');
    await loginpage.validLoginSucess(); 
    
    const addtocartbtn = new Inventory(page);
    await addtocartbtn.addtocartbtnclick();

    const checkoutbtnclk = new CartPage(page);
    await checkoutbtnclk.checkoutbtnclick();

    const checkoutpageprocess = new Checkoutpage(page);
    await checkoutpageprocess.checkout('Priya', 'Akiri', '520001');

    const checkoutpage_two = new Checkoutpagetwo(page);
    await checkoutpage_two.checkoutpage2();
   
    const checkoutpagecomplete = new CheckoutPageComplete(page);
    await checkoutpagecomplete.checkoutcomplete();
});