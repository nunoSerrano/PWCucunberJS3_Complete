import { Given, When, Then, setDefaultTimeout , Before, After} from '@cucumber/cucumber';
import {chromium} from "playwright";
import path from "path"

setDefaultTimeout(60 * 1000);

let browser;
let page;
let context;

Before (async function () {


// Prefer env var; fall back to your hardcoded path (you can remove the fallback).
    const executablePath =
      process.env.CHROMIUM_PATH ||
      path.resolve('C:\\Users\\nsilvase\\AppData\\Local\\ms-playwright\\chrome\\win64-142.0.7444.61\\chrome-win64\\chrome.exe');

    browser = await chromium.launch({
        headless: false,
        ...(executablePath ? { executablePath } : {}),
        args:['--start-maximized']

    })

    context = await browser.newContext({viewport: null, javaScriptEnabled: true});
    page = await context.newPage();
}); 


After(async function () {
    await page.close();
    await context.close();
    await browser.close()
});


Given('The user navigates to the page', async function () {
    console.log("The user navigates to the page"); 

    context = await browser.newContext({viewport: null, javaScriptEnabled: true});
    page = await context.newPage();

    await page.goto("https://monetis-delta.vercel.app")
});


When('The user logs in', async function () {
    console.log("The user logs in");
    const startJourneyButton = page.getByRole('link', { name: 'Start your journey' });
    await startJourneyButton.click();
    
});

Then('A home is displayed', async function () {
    console.log("A home is displayed");

    await page.locator('//input[@name="name"]').fill('Andre');
    await page.locator('//input[@name="surname"]').fill('Silva');
    await page.locator('//input[@name="email"]').fill('asilva@example.com');
    await page.locator('//input[@name="phone_number"]').fill('1234567890');
    await page.locator('//input[@name="street_address"]').fill('Rua do Ouro');
    await page.locator('//input[@name="postal_code"]').fill('1234-000');
    await page.locator('//input[@name="city"]').fill('Lisboa');
    await page.locator('//div[contains(@class,"indicatorContainer")]').click();
    //await page.getByRole('combobox', {name: 'Austria'}).click();

   

});