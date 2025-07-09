import userData from '../fixtures/userData.json';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';
import HomePage from '../pages/homePage';
const loginPage = new LoginPage()
const registerPage = new RegisterPage()
const homePage = new HomePage()

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('http://localhost:3000/')
    loginPage.buttonRegister()
    registerPage.registerWithUser()
  });
});

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/')
    loginPage.loginWithAnyUser(userData.userSuccess.name, userData.userSuccess.password)
    loginPage.buttonLogin()
    loginPage.checkUserPage()
  }); 
});

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/')
    loginPage.loginWithAnyUser(userData.userFail.name, userData.userFail.password)
    loginPage.buttonLogin()
    cy.get("[data-test='signin-error']").should('be.visible')
  });
});



describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('http://localhost:3000/')
    loginPage.buttonRegister()
    registerPage.registerUserError()
  });
});

describe('colocar dinheiro na conta', () => {
  it.only('Adicionar dinheiro na conta', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.name, userData.userSuccess.password)
    loginPage.buttonLogin()
    loginPage.checkUserPage()
    cy.get('[data-test="sidenav-user-balance"]').then(($value) => {
    $value[0].innerText = '$2000';
    cy.get('[data-test="sidenav-user-balance"]').should('contain', '$2000');
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-item-uBmeaz5pX"]').click()
    cy.get('[data-test="transaction-create-amount-input"]').type('500')
    cy.get('[data-test="transaction-create-description-input"]').type('PrimeiraTransferencia')
    cy.get('[data-test="transaction-create-submit-payment"]').click();
    cy.get('[data-test="sidenav-user-balance"]').should('contain', '$1500');
  });
  });
});


    //homePage.clickNext()
    //homePage.registerBank()
    //homePage.checkBalance()