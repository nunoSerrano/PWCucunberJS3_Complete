// File: tests/steps/basePage.js
import { setDefaultTimeout , Before, After, BeforeAll, AfterAll} from '@cucumber/cucumber';
import {chromium} from "playwright";
import path from "path"
import dotenv from 'dotenv';
 dotenv.config();


let browser;
let page;
let context;

BeforeAll (async function () {

    console.log("Starting test suite - BeforeAll hook");

   
    setDefaultTimeout(parseInt(process.env.defaultTimeout));


    let browserype= process.env.browser;

    switch (browserype.toLowerCase()) {

        case 'chrome_custom':
            console.log("Launching Chrome browser from custom path");
            const executablePath = path.resolve(process.env.chrome_custom_path);
            browser = await chromium.launch({ headless: false, ...(executablePath ? { executablePath } : {}), args: ['--start-maximized'] });
            break;
        case 'chrome':
            console.log("Launching Chrome browser");
            browser = await chromium.launch({ headless: false, channel: 'chrome', args: ['--start-maximized'] });
            break;
        case 'edge':
        case 'msedge':
            console.log("Launching Edge browser");
            browser = await chromium.launch({ headless: false, channel: 'edge', args: ['--start-maximized'] });
            break;
        case 'firefox':
        case 'ff':
            console.log("Launching Firefox browser");
            browser = await firefox.launch({ headless: false, args: ['--start-maximized'] });
            break;
        default:
            throw new Error(`Browser type "${browserype}" is not supported.`);
    }

});


Before (async function () {
    context = await browser.newContext({viewport: null, javaScriptEnabled: true});
    page = await context.newPage();
}); 


After(async function () {
    // await page.close();
    // await context.close();
});

AfterAll (async function () {
    //await browser.close();
});

export function getPage() {
    return page;
}

//export { browser, page, context, getPage };