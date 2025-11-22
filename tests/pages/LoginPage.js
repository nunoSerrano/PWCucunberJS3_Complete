//LoginPage.js
import BasePage from './BasePage.js';

export default class LoginPage extends BasePage {

    constructor(page) {
    super(page);
    this.loginButton = this.page.getByRole('button', { name: 'Log in' });
    this.emailField = this.page.getByRole('textbox', { name: 'Email' });
    this.passwordField = this.page.getByRole('textbox', { name: 'Password' });
  } 



    async fillLoginFields() {  
        await this.emailField.fill('asilva@example.com');
        await this.passwordField.fill('A234567$');
    }


 async clickButton(button) {

      let locator;
      switch (button) {
          case "Login": {
              locator = this.loginButton;
              break;
          }
          default: {
              throw new Error(`Button "${button}" not implemented`)
          };
      }


      await this.baseClickButton(locator);

  }


}

