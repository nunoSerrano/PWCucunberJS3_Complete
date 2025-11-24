
import {When, Then} from '@cucumber/cucumber';
import {getPage} from '../../core/webDriverManager.js';
import LoginPage from '../pages/LoginPage.js';

let loginPage

When('LOGIN - the user inserts valid credentials', async function () {
    loginPage = new LoginPage(await getPage());
    await loginPage.fillLoginFields();
});


When('LOGIN - the user clicks on {string} button', async function (string) {
    loginPage= new LoginPage(await getPage());
    await loginPage.clickButton(string);
});


Then('LOGIN - the user is logged in successfully', async function () {
    loginPage = new LoginPage(await getPage());
    console.log("the user is logged in successfully");
});