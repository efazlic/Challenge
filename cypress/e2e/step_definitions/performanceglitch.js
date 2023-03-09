import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 

Given(/^Performance Glitch user launches the SwagLab site$/, () => {
    cy.LaunchApp()
})

Then(/^Performance Glitch user inserts the username$/, () => {
    cy.InsertPerformanceUsername()
})

Then(/^Performance Glitch user inserts the incorrect password$/, () => {
    cy.InsertIncorrectPassword()
})

When(/^Performance Glitch user clicks the login button$/, () => {
    cy.ClickLogin()
})

Then(/^Performance Glitch user should see the error message$/, () => {
    cy.VerifyErrorMessage()
})