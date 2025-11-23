//BasePage.js
// A base page class that other page classes can extend
export default class BasePage {
pageName = "BasePage"
    constructor(page) {
        this.page = page;
    
    };


    async baseClickButton(locator) {

        await locator.waitFor({ state: 'visible', timeout: 5000 });
        await locator.click();

    }

     async baseNavigateToPage(url) {

        await this.page.goto(url);

    }

}