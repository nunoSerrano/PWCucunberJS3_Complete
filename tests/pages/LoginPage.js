//LoginPage.js
import BasePage from './BasePage.js';
import dotenv from 'dotenv';
dotenv.config();




export default class LoginPage extends BasePage {

    constructor(page) {
    super(page);
  
    // Define locators
    this.loginButton = this.page.getByRole('button', { name: 'Log in' });
    this.emailField = this.page.getByRole('textbox', { name: 'Email' });
    this.passwordField = this.page.getByRole('textbox', { name: 'Password' });
  } 


    async fillLoginFields() { 
        let userEmail = process.env.USER_EMAIL;
        let userPassword = process.env.USER_PASSWORD;
         
        await this.emailField.fill(userEmail);
        await this.passwordField.fill(userPassword);
     
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

