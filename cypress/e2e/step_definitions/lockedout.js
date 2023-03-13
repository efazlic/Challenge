import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 

Given(/^Locked Out user launches the SwagLab site$/, () => {
    cy.LaunchApp()
})

Then(/^Locked Out user inserts the locked out username$/, () => {
    cy.InsertLockedOutUsername()
})

Then(/^Locked Out user inserts the password$/, () => {
    cy.InsertPassword()
})

When(/^Locked Out user clicks the login button$/, () => {
    cy.ClickLogin()
})

Then(/^Locked Out user should see the error message$/, () => {
    cy.VerifyErrorMessageLocked()
})