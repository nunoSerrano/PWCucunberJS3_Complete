class CreateAccountPage {

    constructor(page) {
        this.page = page;
        this.nameField=this.page.locator('//input[@name="name"]');
        this.surnameField=this.page.locator('//input[@name="surname"]');
        this.emailField=this.page.locator('//input[@name="email"]');
        this.phoneField=this.page.locator('//input[@name="phone_number"]');
        this.postalField=this.page.locator('//input[@name="postal_code"]');
        this.addressField=this.page.locator('//input[@name="street_address"]');
        this.cityField=this.page.locator('//input[@name="city"]');
        this.countryDropDownArrow=this.page.locator('//div[contains(@class,"indicatorContainer")]');
        
};
  

async createAccountPageFillFields() {

    await this.nameField.fill('Andre')
    await this.surnameField.fill('Silva');
    await this.emailField.fill('asilva@example.com');
    await this.phoneField.fill('1234567890');
    await this.addressField.fill('Rua do Ouro');
    await this.postalField.fill('1234-000');
    await this.cityField.fill('Lisboa');
    await this.countryDropDownArrow.click();
    //await getPage()\.getByRole('combobox', {name: 'Austria'}).click();

}

}
export default CreateAccountPage;