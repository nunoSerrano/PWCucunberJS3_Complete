Feature: Create Account

  @CreateAccount
  Scenario: Create account
    Given HOMEPAGE - the user navigates to "Monetis" page
    And HOMEPAGE - the user cliks on "Start your journey" button
    When CREATE_ACCOUNT - the user fills the account creation form
      | firstName | lastName | email              | phone      | adress      | postal   | city   | country | password | confirmPassword |
      | Alice     | Silva    | asilva@example.com | 1234567890 | Rua do Ouro | 1234-000 | Lisboa | Austria | retewrt  | retewrt         |
    And CREATE_ACCOUNT - the user clicks on "Sign up" button
  # Then CREATE_ACCOUNT - the account is created successfully
