//HomePage.js
import BasePage from './BasePage.js';

export default class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.startJourneyButton = this.page.getByRole('link', { name: 'Start your journey' });
    this.monetisUrl = 'https://monetis-delta.vercel.app'
    this.monetisLoginUrl = 'https://monetis-delta.vercel.app/login'
  }


  async navigateToPage(pageToNavigate) {
    console.log(`Navigating to URL: ${pageToNavigate}`);
    
     let url = null;

     switch (pageToNavigate) {
          case "Monetis": {
              url= this.monetisUrl;
              break;
          }
          case "Monetis - Login": {
              url= this.monetisLoginUrl;
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
