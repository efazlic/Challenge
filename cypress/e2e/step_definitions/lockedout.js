import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 

Given(/^Locked Out user launches the SwagLab site$/, () => {
    cy.LaunchApp()
})

Then(/^I insert the locked out username$/, () => {
    cy.InsertLockedOutUsername()
})

Then(/^I insert the password$/, () => {
    cy.InsertPassword()
})

When(/^I click the login button$/, () => {
    cy.ClickLogin()
})

Then(/^I should see the error message$/, () => {
    cy.VerifyErrorMessageLocked()
})