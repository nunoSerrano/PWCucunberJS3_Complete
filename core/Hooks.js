// core/webDriverManager.js
// Manages the hooks instances for Cucumber tests
import { Before, After, BeforeAll, AfterAll, BeforeStep} from '@cucumber/cucumber';
import {initBrowser,createScenarioContext, closeScenarioContext, closeBrowser } from './webDriverManager.js';
import dotenv from 'dotenv';
 dotenv.config();// Load environment variables from .env file



BeforeAll(async function () {

    console.log("Starting test suite - BeforeAll hook");

    //intialize the browser before all tests
    await initBrowser();

});

// Initialize a new browser context and page before each scenario
Before(async function (scenario) {

    console.log(`---------${new Date().toISOString()} - ${scenario.pickle.name} ---------`); // Log scenario name

    await createScenarioContext();

});

// Log step name before each step
BeforeStep(async function (scenario) {
    console.log(`>> Starting step : ${scenario.pickleStep.text}`); // Log step name before each step
});

// Close the page and context after each scenario
After(async function (scenario) {
    console.log(`---------Scenario status: ${scenario.result.status} ---------`); // Log end of scenario

    await closeScenarioContext();

});

// Close the browser after all tests are done
AfterAll(async function () {

    // comment in order to keep the browser open after tests
    await closeBrowser();
});