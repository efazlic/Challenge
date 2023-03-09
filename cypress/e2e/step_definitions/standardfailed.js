import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 

Given(/^Standard user opens the SwagLab site$/, () => {
    cy.LaunchApp()
})

Then(/^Standard user enters the wrong username$/, () => {
    cy.InsertWrongUsername()
})

Then(/^Standard user enters the wrong password$/, () => {
    cy.InsertWrongPassword()
})

When(/^Standard user clicks the login button to log in the app$/, () => {
    cy.ClickLogin()
})

Then(/^Standard user should see correct error message$/, () => {
    cy.VerifyStandardErrorMessage()
})