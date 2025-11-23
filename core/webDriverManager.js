// core/webDriverManager.js
// Manages the browser and page instances for Cucumber tests
import { setDefaultTimeout , Before, After, BeforeAll, AfterAll, BeforeStep} from '@cucumber/cucumber';
import {chromium} from "playwright";
import path from "path"
import dotenv from 'dotenv';
 dotenv.config();// Load environment variables from .env file


let browser;
let page;
let context;

BeforeAll (async function () {

    console.log("Starting test suite - BeforeAll hook");

   
    setDefaultTimeout(parseInt(process.env.defaultTimeout)); //default timeout from .env file


    let browserype= process.env.browser; //browser type from .env file

    // Launch the browser based on the specified type
    switch (browserype.toLowerCase()) {

        case 'chrome_custom':
            console.log("Launching Chrome browser from custom path");
            const executablePath = path.resolve(process.env.chrome_custom_path); // Get the custom Chrome executable path from .env
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


Before (async function (scenario) {

    context = await browser.newContext({viewport: null, javaScriptEnabled: true}); // Create a new browser context and page for each scenario
    page = await context.newPage();  // Create a new page
    console.log(`---------${new Date().toISOString()} - ${scenario.pickle.name} ---------`); // Log scenario name in to reports

}); 

BeforeStep (async function (scenario) {
    console.log(`>> Starting step : ${scenario.pickleStep.text}`); // Log step name before each step
});

//uncoment if you want to close the page and context after each scenario
After(async function () {
    // await page.close();
    // await context.close();
});

//uncoment if you want to close the browser after all scenarios
AfterAll (async function () {
    //await browser.close();
});

export function getPage() {
    return page; // Function to get the current page instance
}