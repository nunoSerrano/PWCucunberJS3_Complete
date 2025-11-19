import {Then} from '@cucumber/cucumber';
import {getPage} from './baseSteps.js';



Then('the user fills the account creation form', async function () {
    console.log("the user fills the account creation form");

    await getPage().locator('//input[@name="name"]').fill('Andre');
    await getPage().locator('//input[@name="surname"]').fill('Silva');
    await getPage().locator('//input[@name="email"]').fill('asilva@example.com');
    await getPage().locator('//input[@name="phone_number"]').fill('1234567890');
    await getPage().locator('//input[@name="street_address"]').fill('Rua do Ouro');
    await getPage().locator('//input[@name="postal_code"]').fill('1234-000');
    await getPage().locator('//input[@name="city"]').fill('Lisboa');
    await getPage().locator('//div[contains(@class,"indicatorContainer")]').click();
    //await getPage()\.getByRole('combobox', {name: 'Austria'}).click();

   

});