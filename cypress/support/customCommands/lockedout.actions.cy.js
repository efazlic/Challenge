Cypress.Commands.add('LaunchApp', () => {
    cy.visit('/')
})

Cypress.Commands.add('InsertLockedOutUsername', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.usernameField).should('exist').type(el.lockedUsername)
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


Cypress.Commands.add('VerifyErrorMessageLocked', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.errorMessage).should('exist').and('contain', 'Epic sadface: Sorry, this user has been locked out.')
    })
})