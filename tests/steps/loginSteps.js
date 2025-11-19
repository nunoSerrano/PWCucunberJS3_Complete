import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import {chromium} from "playwright";
import path from "path"

setDefaultTimeout(60 * 1000);

Given('The user navigates to the page', async function () {
    console.log("The user navigates to the page");

// Prefer env var; fall back to your hardcoded path (you can remove the fallback).
    const executablePath =
      process.env.CHROMIUM_PATH ||
      path.resolve('C:\\Users\\nsilvase\\AppData\\Local\\ms-playwright\\chrome\\win64-142.0.7444.61\\chrome-win64\\chrome.exe');


    this.browser = await chromium.launch({
        headless: false,
        ...(executablePath ? { executablePath } : {}),
        args:['--start-maximized']

    })
     
     
    this.context = await this.browser.newContext({viewport: null, javaScriptEnabled: true});
    this.page = await this.context.newPage();

    await this.page.goto("https://monetis-delta.vercel.app")
});


When('The user logs in', async function () {
    console.log("The user logs in");
    const startJourneyButton = this.page.getByRole('link', { name: 'Start your journey' });
    await startJourneyButton.click();
    
});

Then('A home is displayed', async function () {
    console.log("A home is displayed");

    await this.page.locator('//input[@name="name"]').fill('Andre');
    await this.page.locator('//input[@name="surname"]').fill('Silva');
    await this.page.locator('//input[@name="email"]').fill('asilva@example.com');
    await this.page.locator('//input[@name="phone_number"]').fill('1234567890');
    await this.page.locator('//input[@name="street_address"]').fill('Rua do Ouro');
    await this.page.locator('//input[@name="postal_code"]').fill('1234-000');
    await this.page.locator('//input[@name="city"]').fill('Lisboa');
    await this.page.locator('//div[contains(@class,"indicatorContainer")]').click();
    //await this.page.getByRole('combobox', {name: 'Austria'}).click();
});