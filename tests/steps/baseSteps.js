// File: tests/steps/basePage.js
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

export function getPage() {
    return page;
}

//export { browser, page, context, getPage };