import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 

Given(/^Problem user launches the SwagLab site$/, () => {
    cy.LaunchApp()
})

Then(/^Problem user inserts the username$/, () => {
    cy.InsertProblemUsername()
})

Then(/^Problem user inserts the incorrect password$/, () => {
    cy.InsertIncorrectPassword()
})

When(/^Problem user clicks the login button$/, () => {
    cy.ClickLogin()
})

Then(/^Problem user should see the error message$/, () => {
    cy.VerifyErrorMessage()
})