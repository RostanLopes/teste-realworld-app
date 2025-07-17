class HomePage {  //ainda não foi concluida, já apaguei e refiz algumas vezes
    selectorsList () {
    const selectors = {
        buttonNext: "[data-test='user-onboarding-next']",
        bankNameField: "[data-test='bankaccount-bankName-input']",
        routingNumberField: "[data-test='bankaccount-routingNumber-input']",
        accountNumberField:"[data-test='bankaccount-accountNumber-input']",
        buttonSaveBank: "[data-test='bankaccount-submit']",
        buttonDone: "[data-test='user-onboarding-next']",
        amountBalance: "[data-test='sidenav-user-balance']",
        
    };
    return selectors;
  }

  clickNext() {
    cy.get(this.selectorsList().buttonNext).click({force:true}) 
    
}

  registerBank() {
    cy.get(this.selectorsList().bankNameField).type('Bank1')
    cy.get(this.selectorsList().routingNumberField).type('123456789')
    cy.get(this.selectorsList().accountNumberField).type('123456789')
    cy.get(this.selectorsList().buttonSaveBank).click({force:true})
    cy.get(this.selectorsList().buttonDone).click({force:true})
  }
}

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    // Implemente os passos do caso de teste aqui
  });
});

describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    // Implemente os passos do caso de teste aqui
  });
});

export default HomePage