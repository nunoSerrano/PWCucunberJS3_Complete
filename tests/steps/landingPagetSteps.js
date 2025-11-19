import { Given, When, Then} from '@cucumber/cucumber';
import { getPage } from './baseSteps.js';



Given('the user navigates to Monetis page', async function () {
    console.log("the user navigates to Monetis page"); 

    await getPage().goto("https://monetis-delta.vercel.app")
});

When('the user cliks on Start your journey button', async function () {
    console.log("the user cliks on Start your journey button");
    const startJourneyButton = getPage().getByRole('link', { name: 'Start your journey' });
    await startJourneyButton.click();
    
});
