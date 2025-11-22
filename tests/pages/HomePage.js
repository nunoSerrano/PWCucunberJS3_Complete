//HomePage.js
import BasePage from './BasePage.js';
import dotenv from 'dotenv';
dotenv.config();

export default class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.startJourneyButton = this.page.getByRole('link', { name: 'Start your journey' });
  }

  async navigateToPage(pageToNavigate) {
    console.log(`Navigating to URL: ${pageToNavigate}`);
    
     let url = null;

     switch (pageToNavigate) {
          case "Monetis": {
              url= process.env.MONETIS_URL;
              break;
          }
          case "Monetis - Login": {
              url= process.env.MONETIS_LOGIN_URL;
              break;
          }
          default: {
              throw new Error(`Page to navigate "${pageToNavigate}" not implemented`)
          };
      }
      
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
