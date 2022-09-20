/// <reference types="cypress" />

import  data  from '../fixtures/liveRC.json'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
Cypress.Cy.prototype.onUncaughtException = ()=>{}   
describe('logowanie', () => {
  beforeEach(()=>{
    cy.viewport(1920, 1080) 
  })
  it('Home page login', () => {
  //Stage
  //cy.visit('https://stage.app.livekid.pl/') 
  //RC
  cy.visit('https://rc.app.livekid.pl/')
  //Prod
  //cy.visit('https://app.livekid.com/?lang=pl')
  })
  it('wpisz login', () => {
    cy.get('[data-cy="login"]').type(data.user)
  })
  it('wpisz haslo', () => {
    cy.get('[data-cy="password"]').type(data.pass)
  })
})
describe('Logowanie', () => {
  beforeEach(()=>{
    cy.viewport(1920, 1080) 
  })
  it("Login",() => {
    cy.get('[data-cy="loginButton"]').click();
    cy.get('.user-roles > :nth-child(1)').click();
    cy.wait(1000);
  })

})
describe('Ustawienia', () => {
  beforeEach(()=>{
    cy.viewport(1920, 1080) 
  })
it("Ustawienia open",() => {
  cy.get('[href="/school/settings"] > .material-icons').click();
  })

  describe('Dzieci', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Dzieci open",() => {
    cy.get(':nth-child(2) > .navigation-cell').click();
    })
   it("Dzieci dodaj dziecko",() => {
    cy.get('#add-kid').click();
    cy.get(':nth-child(1) > .row-input > .section-selector > input').type(data.ChildName);
    cy.get(':nth-child(2) > .row-input > .section-selector > input').type(data.ChildSurname);
    cy.get('[test_id="kidGroup"]').eq(13).click();
    cy.get('.body-row').eq(2).click();
    cy.get(':nth-child(3) > .row-input > [data-v-cfeab80a=""] > #selector-default > .section-selector > .selector-container').click();
    cy.get(':nth-child(4) > .row-display').click();
    cy.get(':nth-child(4) > .row-input > [data-v-cfeab80a=""] > #selector-default > .section-selector > .selector-container').click();
    cy.get(':nth-child(3) > .row-display').click();
    cy.get('#submit').click();
    cy.wait(1000);
    cy.reload()
    
    })
  })
})
  describe('Rozliczenia', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })


  it("Rozliczenia open",() => {
    cy.get('[href="/school/payments"] > .material-icons').click();
    cy.wait(1000);
  }) 
  it("Wystaw rozliczenie",() => {
    cy.get('[id="button-label"]').eq(4).click();
    cy.wait(1000);
    cy.get(':nth-child(2) > .filter-wrap > [test_id=""] > #selector-default > .navigation-filter > .filter-selector').click();
    cy.wait(1000);
    cy.get('.filter-row > #checkbox-default > .material-icons').click();
    cy.wait(1000);
    cy.get('.filter-click-area').click();
    cy.wait(1000);
    cy.get('[id="checkbox-default"]').eq(1).click();
    cy.wait(1000);
    cy.get('.flex-row').eq(0).click();
    cy.get('#submitBill').click();
    cy.wait(1000);
    cy.get('.back-button').click();
  }) 
  it("Generuj Fakture VAT",() => {
    cy.wait(1000);
    cy.get('[id="button-label"]').eq(3).click();
    cy.wait(1000);
    cy.get('[test_id="regularListRow"]').eq(0).click();
    cy.wait(1000);
    cy.get('[id="button-label"]').eq(4).click();
    cy.wait(1000);
  })
  it("Wystaw Fakture",() => {
    cy.get('[id="[object Object]"]').eq(0).click();
    cy.wait(1000);
    cy.get('[id="section-list-action-settleBalance"]').click();
    cy.wait(1000);
  }) 
  it("Pobierz Fakture",() => {
    cy.get('[id="button-label"]').eq(4).click();
    cy.wait(3000);
    cy.get('[id="button-label"]').eq(3).click(); 
  }) 
  it("Pobierz rozliczenie",() => {
    cy.wait(3000);
    cy.get('[id="close"]').click();
    cy.reload()
    cy.wait(1000);
  
  })  
})  
  describe('Usuwanie dziecka', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })  
it("Ustawienia open",() => {
  cy.get('[href="/school/settings"] > .material-icons').click();
  })

  
  it("Dzieci open",() => {
    cy.wait(1000);
    cy.get(':nth-child(2) > .navigation-cell').click();
    })
  
  it("Usun dziecko",() => {
    cy.get('[id="regular-list-cell-ChildSurname ChildName"]').click();
    cy.get(':nth-child(2) > #selector-default > button').click();
    cy.get('[test_id="accept"]').click();
    cy.wait(1000);
  })
})
