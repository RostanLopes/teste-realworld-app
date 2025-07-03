import userData from '../fixtures/userData.json';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';

const loginPage = new LoginPage()
const registerPage = new RegisterPage()

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
