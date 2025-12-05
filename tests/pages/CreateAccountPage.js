
//CreateAccountPage.js
import BasePage from './BasePage.js';

export default class CreateAccountPage extends BasePage {

    constructor(page) {
        super(page);
     
        // Define locators
        this.nameField=this.page.locator('//input[@name="name"]');
        this.surnameField=this.page.locator('//input[@name="surname"]');
        this.emailField=this.page.locator('//input[@name="email"]');
        this.phoneField=this.page.locator('//input[@name="phone_number"]');
        this.postalField=this.page.locator('//input[@name="postal_code"]');
        this.addressField=this.page.locator('//input[@name="street_address"]');
        this.cityField=this.page.locator('//input[@name="city"]');
        this.countryDropDownArrow=this.page.locator('//div[contains(@class,"indicatorContainer")]');
        this.signUpButton=this.page.locator('//button[@type="submit"]');
};
  

async fillAccountForm(data) {
    const {
      firstName,
      lastName,
      email,
      phone,
      adress,   // keep same key as table OR map before calling
      postal,
      city,
      country,
      password,
      confirmPassword,
    } = data;

    await this.nameField.fill(firstName)
    await this.surnameField.fill(lastName);
    await this.emailField.fill(email);
    await this.phoneField.fill(phone);
    await this.addressField.fill(adress);
    await this.postalField.fill(postal);
    await this.cityField.fill(city);
    await this.countryDropDownArrow.click();
    //to be improved
    await this.page.getByRole('option', { name: country }).click();
    await this.page.getByRole('textbox', { name: 'Password', exact: true }).fill(password);
    await this.page.getByRole('textbox', { name: 'Confirm password' }).fill(confirmPassword);
    await this.page.getByRole('checkbox', { name: 'You agree to our Terms of' }).check();
}

async clickButton(button) {

      let locator = null;
      switch (button) {
          case "Sign up": {
              locator = this.signUpButton;
              break;
          }
          default: {
              throw new Error(`Button "${button}" not implemented`)
          };
      }

      await this.baseClickButton(locator);
  }

  // // row is an object: { firstName: 'John', lastName: 'Doe', ... }
  // async fillCreateAccountForm(row) {
  //   // Fill text inputs
  //   if (row.nameField) await this.fill(this.selectors.firstName, row.firstName);
  //   if (row.surnameField) await this.fill(this.selectors.lastName, row.lastName);
  //   if (row.email) await this.fill(this.selectors.email, row.email);
  //   if (row.password) await this.fill(this.selectors.password, row.password);
  //   if (row.confirmPassword) await this.fill(this.selectors.confirmPassword, row.confirmPassword);

  //   // Date of birth: accept different formats (YYYY-MM-DD or dd/MM/yyyy)
  //   if (row.dob) {
  //     // If the input is type="date", ensure value is in yyyy-MM-dd
  //     const dobValue = this._normalizeDateForInput(row.dob);
  //     await this.fill(this.selectors.dob, dobValue);
  //   }

  //   // Phone
  //   if (row.phone) await this.fill(this.selectors.phone, row.phone);

  //   // Country select
  //   if (row.country) {
  //     await this.page.selectOption(this.selectors.country, { label: row.country }).catch(async () => {
  //       // fallback: try by value
  //       await this.page.selectOption(this.selectors.country, row.country);
  //     });
  //   }
  // }


}