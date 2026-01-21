// core/webDriverManager.js
// Manages the browser and hooks instances for Cucumber tests
import { setDefaultTimeout , Before, After, BeforeAll, AfterAll, BeforeStep} from '@cucumber/cucumber';
import {chromium} from "playwright";
import path from "path"
import dotenv from 'dotenv';

 dotenv.config();// Load environment variables from .env file

let browser;
let page;
let context;


export async function initBrowser() {
  console.log('Starting test suite - initBrowser');

   const timeout = Number(process.env.defaultTimeout) || 60000; //default timeout or from .env file
   setDefaultTimeout(timeout);
     

    const browsertype= process.env.browser; //browser type from .env file

    // Launch the browser based on the specified type
    switch (browsertype.toLowerCase()) {

        case 'chrome_custom':
            
            const chromeCustomPath = process.env.chrome_custom_path?.trim();

            // Build options conditionally
            const launchOptions = {
                headless: false,
                args: ['--start-maximized'],
            };

            if (chromeCustomPath) {
                console.log("→ Using custom Chrome path:", chromeCustomPath);
                launchOptions.executablePath = path.resolve(process.env.chrome_custom_path);
            } else {
                console.log("→ No custom path provided — using Playwright built-in Chromium");
            }

            browser = await chromium.launch(launchOptions);

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
}

export async function createScenarioContext() {
    if (!browser) {
        throw new Error('Browser not initialized. Call initBrowser() first.');
    }
    context = await browser.newContext({
        viewport: null,
        javaScriptEnabled: true,
    });

     page = await context.newPage();
}

export async function closeScenarioContext() {

    if (page) await page.close();
    if (context) await context.close();
}

export async function closeBrowser() {
    if (browser) {
        await browser.close();
        browser = undefined;
    }
}


// Function to get the current page instance
export function getPage() {
    return page;
} 
