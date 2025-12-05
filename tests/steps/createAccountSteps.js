import { When, Then} from '@cucumber/cucumber';
import {getPage} from '../../core/webDriverManager.js';
import CreateAccountPage from '../pages/createAccountPage.js';
import { Console } from 'console';



let createAccountPage;

// When('CREATE_ACCOUNT - the user fills the account creation form', async function () {

//     this.createAccountPage = new CreateAccountPage(await getPage());
    
//     await this.createAccountPage.FillNewAccountFields();

//     const rows = dataTable.hashes(); // array of objects
//   // If you expect a single row, use rows[0]
//   for (const row of rows) {
//     // Ensure this.pages.account exists (hook should attach it)
//     if (!this.pages || !this.pages.account) {
//       throw new Error('AccountPage not instantiated on World (this.pages.account)');
//     }
//     // The page object fills the form using the provided row object
//     await this.pages.account.fillCreateAccountForm(row);
//   }

// });


When(
  'CREATE_ACCOUNT - the user fills the account creation form',
  async function (dataTable) {
    const [data] = dataTable.hashes();
    createAccountPage = new CreateAccountPage(await getPage());

    await createAccountPage.fillAccountForm(data);
    // If creation should be part of this step:
    // await accountPage.submit();
  }
);

When('CREATE_ACCOUNT - the user clicks on {string} button', async function (string) {
  createAccountPage = new CreateAccountPage(await getPage());
  await createAccountPage.clickButton(string);
});



Then('CREATE_ACCOUNT - the account is created successfully', function () {
  Console.log("the account is created successfully");
});
