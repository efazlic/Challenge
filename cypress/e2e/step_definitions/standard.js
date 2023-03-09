import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 

Given(/^Standard user launches the SwagLab site$/, () => {
    cy.LaunchApp()
})

Then(/^Standard user inserts the username$/, () => {
    cy.InsertStandardUsername()
})

Then(/^Standard user inserts the password$/, () => {
    cy.InsertPassword()
})

When(/^Standard user clicks the login button$/, () => {
    cy.ClickLogin()
})

Then(/^Standard user can see the first product name$/, () => {
    cy.VerifyFirstProductName()
})

Then(/^Standard user can see the first product price$/, () => {
    cy.VerifyFirstProductPrice()
})

Then(/^Standard user should see the Add To Cart button text$/, () => {
    cy.VerifyAddToCartButtonText()
})

Given(/^Standard user clicks on the Add To Cart button$/, () => {
    cy.ClickAddToCart()
})

Then(/^Standard user clicks on the cart$/, () => {
    cy.ClickOnCart()
})

Then(/^Standard user clicks the Continue Shopping button$/, () => {
    cy.ContinueShopping()
})

When(/^Standard user adds another product$/, () => {
    cy.AddAnotherProduct()
})

Then(/^Standard user removes the second product$/, () => {
    cy.Remove()
})

Then(/^Standard user clicks on the cart again$/, () => {
    cy.ClickOnCart()
})

Then(/^Standard user clicks on checkout button$/, () => {
    cy.Checkout()
})

Then(/^Standard user enters the first name$/, () => {
    cy.InsertFirstName()
})

Then(/^Standard user enters the last name$/, () => {
    cy.InsertLastName()
})

Then(/^Standard user enters the zip code$/, () => {
    cy.InsertZipCode()
})

Then(/^Standard user clicks the Continue button$/, () => {
    cy.Continue()
})

Then(/^Standard user should see the item total value$/, () => {
    cy.VerifyItemTotalValue()
})

Then(/^Standard user should see the tax value$/, () => {
    cy.VerifyTaxValue()
})

Then(/^Standard user should see correct total value$/, () => {
    cy.VerifyTotalValue()
})

Then(/^Standard user clicks the Finish button$/, () => {
    cy.Finish()
})

Then(/^Standard user can see the final message$/, () => {
    cy.VerifyFinalMessage()
})

Then(/^Standard user clicks Back Home button$/, () => {
    cy.BackToProducts()
})

Then(/^Standard user filters the product prices$/, () => {
    cy.ClickOnFilterButton()
})

Then(/^Values from the page will be written into .txt file$/, () => {
    cy.WriteIntoCSVFile()
})