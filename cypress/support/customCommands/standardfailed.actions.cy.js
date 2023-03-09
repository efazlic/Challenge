Cypress.Commands.add('LaunchApp', () => {
    cy.visit('/')
})

Cypress.Commands.add('InsertWrongUsername', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.usernameField).should('exist').type(el.wrongUsername)
    })
})

Cypress.Commands.add('InsertWrongPassword', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.passwordField).should('exist').type(el.wrongPassword)
    })
})

Cypress.Commands.add('ClickLogin', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.loginButton).should('exist').click()
    })
})

Cypress.Commands.add('VerifyStandardErrorMessage', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.errorMessage).should('exist').and('contain', 'Username and password are not correct.')
    })
})