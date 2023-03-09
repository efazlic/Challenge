Cypress.Commands.add('LaunchApp', () => {
    cy.visit('/')
})

Cypress.Commands.add('InsertPerformanceUsername', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.usernameField).should('exist').type(el.performanceGlitchUsername)
    })
})

Cypress.Commands.add('InsertIncorrectPassword', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.passwordField).should('exist').type(el.incorrectPassword)
    })
})

Cypress.Commands.add('ClickLogin', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.loginButton).should('exist').click()
    })
})

Cypress.Commands.add('VerifyErrorMessage', () => {
    cy.fixture("elements").then((el)=>{
        cy.get(el.errorMessage).should('exist').and('contain', 'Epic sadface: Username and password do not match any user in this service')
    })
})