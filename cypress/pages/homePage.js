class HomePage {
    selectorsList () {
   /* const selectors = {
        buttonNext: "[data-test='user-onboarding-next']",
        bankNameField: "[data-test='bankaccount-bankName-input']",
        routingNumberField: "[data-test='bankaccount-routingNumber-input']",
        accountNumberField:"[data-test='bankaccount-accountNumber-input']",
        buttonSaveBank: "[data-test='bankaccount-submit']",
        buttonDone: "[data-test='user-onboarding-next']",
        amountBalance: "[data-test='sidenav-user-balance']",*/
         const selectors = {
                tabList: "[data-test='nav-transaction-tabs']",
                newTransactionButton: "[data-test='nav-top-new-transaction']",
                balanceAmount: "[data-test='sidenav-user-balance']",
                transactionList: "[data-test='transaction-list']",
                transactionItem: "[data-test='transaction-item-Ec6hHyL6SC2F']",
                transactionMessage: "[data-test='empty-list-header']",
                mineButton: "[data-test='nav-personal-tab']"
            }   

            return selectors;

          }


        checkBalance() {
            this.saldoAtual = 0;

            return cy.get(this.selectorsList().balanceAmount).invoke('text').then((text) => {
                // Remove símbolos e converte para número
                this.saldoAtual = parseFloat(text.replace(/[^0-9.-]+/g, ''));
                cy.log('Saldo atual: ' + this.saldoAtual);
                return this.saldoAtual;
            }); // Closing the invoke method
            } // Closing the checkBalance method
    
            transactionListShouldBeVisible() {
                cy.get(this.selectorsList().transactionList).should('be.visible');
            }  
    
            openFirstTransactionDetails() {
                cy.get(this.selectorsList().transactionItem).first().click();
            }
    
            shouldShowNoTransactionMessage() {
                cy.get(this.selectorsList().mineButton).click();
                cy.get(this.selectorsList().transactionMessage).should('be.visible').and('contain.text', 'No Transactions');
            }
        }

    
            
    /*}
    }

    return selectors
   
  }

  clickNext() {
    cy.get(this.selectorsList().buttonNext).click() 
}

  registerBank() {
    cy.get(this.selectorsList().bankNameField).type('Bank1')
    cy.get(this.selectorsList().routingNumberField).type('123456789')
    cy.get(this.selectorsList().accountNumberField).type('123456789')
    cy.get(this.selectorsList().buttonSaveBank).click({force:true})
    cy.get(this.selectorsList().buttonDone).click({force:true})
}
  
/*describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    // Implemente os passos do caso de teste aqui
  });
});

describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    // Implemente os passos do caso de teste aqui
  });
});*/


// Depois, você pode verificar outras interações ou estados que dependam desse valor
// cy.get('algum-outro-elemento').should('be.visible');
  //cy.get("[data-test='sidenav-user-balance']").type('value');
  //Limpar o valor
  //cy.get("[data-test='sidenav-user-balance']").clear();
 // cy.get(this.selectorsList().amountBalance).type('2000').should('be.visible')

export default HomePage