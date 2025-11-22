Feature: Login

@Regression
Scenario: Create account

Given HOMEPAGE - the user navigates to "Monetis - Login" page
When LOGIN - the user inserts valid credentials
And LOGIN - the user clicks on "Login" button
Then LOGIN - the user is logged in successfully