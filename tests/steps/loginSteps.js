import { Given, When, Then } from '@cucumber/cucumber';
import {chromium} from "playwright";
import path from "path"


Given('The user navigates to the page', async function () {
    console.log("The user navigates to the page");

// Prefer env var; fall back to your hardcoded path (you can remove the fallback).
    const executablePath =
      process.env.CHROMIUM_PATH ||
      path.resolve('C:\\Users\\nsilvase\\AppData\\Local\\ms-playwright\\chrome\\win64-142.0.7444.61\\chrome-win64\\chrome.exe');


    this.browser = await chromium.launch({
        headless: false,
        ...(executablePath ? { executablePath } : {})
    })
     
     
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});



When('The user logs in', function () {
    console.log("The user logs in");
});



Then('A home is displayed', function () {
    console.log("A home is displayed");
});