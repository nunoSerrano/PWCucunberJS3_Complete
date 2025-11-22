//homePageSteps.js
import { Given, When, Then} from '@cucumber/cucumber';
import { getPage } from '../../core/webDriverManager.js';
import HomePage from '../pages/homePage.js';

let homePage;


Given('HOMEPAGE - the user navigates to {string} page', async function (pageToNavigate) {
    console.log(`the user navigates to ${pageToNavigate} page`);
    homePage = new HomePage(await getPage());
    await homePage.navigateToPage(pageToNavigate);
});

When('HOMEPAGE - the user cliks on {string} button', async function (button) {
    console.log("the user cliks on Start your journey button");
    homePage = new HomePage(await getPage());
    await homePage.clickButton('Start your journey');
});
