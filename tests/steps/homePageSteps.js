//homePageSteps.js
import { Given, When, Then} from '@cucumber/cucumber';
import { getPage } from '../../core/webDriverManager.js';
import HomePage from '../pages/homePage.js';

let homePage;


Given('HOMEPAGE - the user navigates to {string} page', async function (pageToNavigate) {
    
    homePage = new HomePage(await getPage());
    const baseUrl = this.getBaseUrl(); //reads from .env based on environment variable
    console.log(`Base URL is : ${baseUrl}`);
    await homePage.navigateToPage(baseUrl, pageToNavigate);
});

When('HOMEPAGE - the user cliks on {string} button', async function (button) {

    homePage = new HomePage(await getPage());
    await homePage.clickButton('Start your journey');
});
