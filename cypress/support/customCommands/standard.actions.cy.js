Cypress.Commands.add('LaunchApp', () => {
    cy.visit('/')
})

Cypress.Commands.add('InsertStandardUsername', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.usernameField).should('exist').type(el.username)
    })
})

Cypress.Commands.add('InsertPassword', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.passwordField).should('exist').type(el.password)
    })
})

Cypress.Commands.add('ClickLogin', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.loginButton).should('exist').click()
    })
})

Cypress.Commands.add('VerifyFirstProductName', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.firstProduct).should('exist').and('contain', 'Sauce Labs Backpack')
    })
})

Cypress.Commands.add('VerifyFirstProductPrice', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.firstProductPrice).should('exist').and('contain', '$29.99')
    })
})

Cypress.Commands.add('VerifyAddToCartButtonText', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.addToCartButton).should('exist').and('contain', 'Add to cart')
    })
})

Cypress.Commands.add('ClickAddToCart', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.addToCartButton).should('exist').click()
    })
})

Cypress.Commands.add('ClickOnCart', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.shoppingCart).should('exist').click()
    })
})

Cypress.Commands.add('ContinueShopping', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.continueShopping).should('exist').click()
    })
})

Cypress.Commands.add('AddAnotherProduct', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.anotherProduct).should('exist').click()
    })
})

Cypress.Commands.add('Remove', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.remove).should('exist').click()
    })
})

Cypress.Commands.add('Checkout', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.checkoutButton).should('exist').click()
    })
})

Cypress.Commands.add('InsertFirstName', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.firstNameField).should('exist').type(el.firstName).should('have.value', el.firstName)
    })
})

Cypress.Commands.add('InsertLastName', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.lastNameField).should('exist').type(el.lastName).should('have.value', el.lastName)
    })
})

Cypress.Commands.add('InsertZipCode', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.zipCodeField).should('exist').type(el.zipCode).should('have.value', el.zipCode)
    })
})

Cypress.Commands.add('Continue', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.continueButton).should('exist').click()
    })
})

Cypress.Commands.add('VerifyItemTotalValue', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.itemTotal).should('exist').and('contain', 'Item total: $29.99')
    })
})

Cypress.Commands.add('VerifyTaxValue', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.tax).should('exist').and('contain', 'Tax: $2.40')
    })
})

Cypress.Commands.add('VerifyTotalValue', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.total).should('exist').and('contain', 'Total: $32.39')
    })
})

Cypress.Commands.add('Finish', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.finishButton).should('exist').click()
    })
})

Cypress.Commands.add('VerifyFinalMessage', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.finalMessage).should('exist').and('contain', 'Thank you for your order')
    })
})

Cypress.Commands.add('BackToProducts', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.backHomeButton).should('exist').click()
    })
})

Cypress.Commands.add('ClickOnFilterButton', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.filterButton).should('exist').select("Price (high to low)")
    })
})

Cypress.Commands.add('WriteIntoCSVFile', () => {
    cy.writeFile('data.txt', {
        prod1: 'Sauce Labs Fleece Jacket',
        value1: '$49.99',
        prod2: 'Sauce Labs Backpack',
        value2: '$29.99',
        prod3: 'Sauce Labs Bolt T-Shirt',
        value3: '$15.99',
        prod4: 'Test.allTheThings() T-Shirt (Red)',
        value4: '$15.99', 
        prod5: 'Sauce Labs Bike Light', 
        value5: '$9.99',
        prod6: 'Sauce Labs Onesie',
        value6: '$7.99'
    })
})

