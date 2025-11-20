//homePageSteps.js
import { Given, When, Then} from '@cucumber/cucumber';
import { getPage } from '../../core/coreLib.js';
import HomePage from '../pages/homePage.js';

let homePage;


Given('the user navigates to Monetis page', async function () {
    console.log("the user navigates to Monetis page");
    homePage = new HomePage(await getPage());
    await homePage.navigateToMonetisPage();
});

When('the user cliks on Start your journey button', async function () {
    console.log("the user cliks on Start your journey button");
    homePage = new HomePage(await getPage());
    await homePage.clickStartYourJourneyButton();
});
