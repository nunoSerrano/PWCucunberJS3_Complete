//BasePage.js
export default class BasePage {

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