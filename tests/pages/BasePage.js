//BasePage.js
// A base page class that other page classes can extend
export default class BasePage {

    constructor(page) {
        this.page = page;
        if (!page) {
            throw new Error(`[BasePage] constructed without a page`);
        }
    };


    async baseClickButton(locator) {

        await locator.waitFor({ state: 'visible', timeout: 5000 });
        await locator.click();

    }

     async baseNavigateToPage(url) {

        await this.page.goto(url);

    }

}