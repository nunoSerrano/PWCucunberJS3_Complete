//HomePage.js
import BasePage from './BasePage.js';
import dotenv from 'dotenv';

dotenv.config();

export default class HomePage extends BasePage {
  constructor(page) {
    super(page);
   
    // Define locators
    this.startJourneyButton = this.page.getByRole('link', { name: 'Start your journey' });
  }

    async navigateToPage(baseUrl, PageToNavigate) {
        console.log(`Navigating to : ${PageToNavigate}`);

    let url;
        switch (PageToNavigate) {
            case "Monetis": {
                url = baseUrl;
                break;
            }
            case "Monetis - Login": {
                url = baseUrl + '/login'; //reads from .env based on environment variable and adds /login
                break;
            }
            default: {
                throw new Error(`Page to navigate "${PageToNavigate}" not implemented`)
            };
        }

        console.log(`url : ${url}`);         
        await this.baseNavigateToPage(url);

    }

  async clickButton(button) {

      let locator = null;
      switch (button) {
          case "Start your journey": {
              locator = this.startJourneyButton;
              break;
          }
          default: {
              throw new Error(`Button "${button}" not implemented`)
          };
      }

      await this.baseClickButton(locator);
  }
}
