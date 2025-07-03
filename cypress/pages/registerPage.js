class RegisterPage {
    selectorsList() {
        const selectors = {
            firstNameField: "#firstName",
            lastNameField: "#lastName",
            usernameField: "#username",
            passwordField: "#password",
            confirmPassField: "#confirmPassword",
            buttonSubmitRegister: "[data-test='signup-submit']",
            checkFieldVoid: ".MuiFormHelperText-root",
            checkPageSignIn: ".SignInForm-paper",
        }
        return selectors
    }

    registerWithUser() {
        cy.get(this.selectorsList().firstNameField).type('joao')
        cy.get(this.selectorsList().lastNameField).type('silva')
        cy.get(this.selectorsList().usernameField).type('joao.silva')
        cy.get(this.selectorsList().passwordField).type('123456789')
        cy.get(this.selectorsList().confirmPassField).type('123456789')
        cy.get(this.selectorsList().buttonSubmitRegister).click()
        cy.get(this.selectorsList().checkPageSignIn).should('be.visible')

    }

    registerUserError() {
        cy.get(this.selectorsList().firstNameField).type('jonas')
        cy.get(this.selectorsList().lastNameField).type('silva')
        cy.get(this.selectorsList().usernameField).click()
        cy.get(this.selectorsList().passwordField).type('123456789')
        cy.get(this.selectorsList().confirmPassField).click()
        cy.get('.App-root').click()
        cy.get(this.selectorsList().checkFieldVoid).should('be.visible')

        
    }
    
}
export default RegisterPage