
import {When, Then} from '@cucumber/cucumber';
import {getPage} from '../../core/webDriverManager.js';
import LoginPage from '../pages/loginPage.js';
import { Console } from 'console';

let loginPage

When('LOGIN - the user inserts valid credentials', async function () {
           loginPage= new LoginPage(await getPage());
           await loginPage.fillLoginFields();
         });

When('LOGIN - the user clicks on {string} button', async function (string) {
    loginPage= new LoginPage(await getPage());
    await loginPage.clickButton(string);
});


Then('LOGIN - the user is logged in successfully', function () {
    Console.log("the user is logged in successfully");
});