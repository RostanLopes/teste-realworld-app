class LoginPage {
    selectorsList () {
    const selectors = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        loginSubmit: "[data-test='signin-submit']",
        loginError: "[data-test='login-error']",
        buttonSignUp: "[data-test='signup']",
        userPage: "[data-test='sidenav']",
    }

    return selectors
  } 

  accessPageInicial() {
    cy.visit('http://localhost:3000/')
  }
  
  accessLoginPage() {
    cy.visit('http://localhost:3000/signin');
  }

  loginWithAnyUser(username,password) {
    cy.get(this.selectorsList().usernameField).type(username)
    cy.get(this.selectorsList().passwordField).type(password)
  }

  buttonRegister() {
    cy.get(this.selectorsList().buttonSignUp).click()
  }

  buttonLogin() {
   cy.get(this.selectorsList().loginSubmit).click()
  }

  checkLoginErrorMessage() {
    cy.get(this.selectorsList().loginError).should('be.visible');
  }
  checkUserPage() {
    cy.get(this.selectorsList().userPage).should('be.visible')
  }
}

export default LoginPage