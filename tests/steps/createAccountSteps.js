import {Then} from '@cucumber/cucumber';
import {getPage} from '../../core/webDriverManager.js';
import CreateAccountPage from '../pages/createAccountPage.js';





Then('CREATE_ACCOUNT - the user fills the account creation form', async function () {

    this.createAccountPage = new CreateAccountPage(await getPage());
    
    await this.createAccountPage.FillNewAccountFields();

});