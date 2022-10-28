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
    //jak masz admina lub wiecej rol to on
    cy.get('.user-roles > :nth-child(1)').click();
    cy.wait(1000);
  })

})
describe('E-dziennik', () => {
  beforeEach(()=>{
    cy.viewport(1920, 1080) 
  })
it("E-dziennik open",() => {
  cy.get(':nth-child(9) > .navigation-cell').click();
    
  })

  describe('Test Dziennik MEN', () => {
    
  it("Open dziennik MEN",() => {
    cy.wait(1000);
    cy.get('[test_id="regularListRow"]').eq(0).click();
    })
 
  it("Dodaj temat zajec",() => {
    cy.wait(1000);
    cy.get('[id="button-label"]').eq(2).click();
    //cy.get(':nth-child(3) > #selector-default').click();
    })
  it("Wybierz temat z dziennika edykacyjnego",() => {
    //cy.wait(3000)
    cy.get('.list-action').eq(0).click();
    })
  it("Podrecznik",() => {
    
    //cy.wait(2000)
    cy.get('.selector-container').eq(2).click();
    cy.get('[test_id="rowDisplay"]').eq(1).click();
    })  
  it("Krąg Tematyczny",() => {
    //cy.wait(1000)
    cy.get('.selector-container').eq(3).click();
    cy.get('[test_id="rowDisplay"]').eq(1).click();
    }) 
  it("Temat zajęć",() => {
    //cy.wait(1000)
    cy.get('.selector-container').eq(4).click();
    cy.get('[test_id="rowDisplay"]').eq(1).click();
    }) 
  it("Dodaj",() => {
    cy.get('[id="submit"]').click();
    }) 
  it("Zapisz",() => {
    cy.get('[id="save"]').click();
    })
  it("History",() => {
    cy.get('.-rounded').eq(1).click();
    cy.wait(1000)
    cy.get('[test_id="closeModal"]').click();
    })
  })
  describe('Podglad wszystkich dni', () => {

    it("Podglad wszystkich dni open",() => {
      cy.get('.men-list-tab').eq(1).click();
      cy.wait(1000)
      }) 
  })
  describe('Ramowy plan dnia', () => {

    it("Ramowy plan dnia open",() => {
      cy.get('.men-list-tab').eq(2).click();
      }) 
    it("Dodaj wydarzenie",() => {
      cy.wait(1000);
      cy.get('[id="button-label"]').eq(1).click();
      cy.get('.section-selector').eq(0).type(data.text);
      cy.get('[id="submit"]').click();
      cy.wait(1000)
      }) 
    
  })
  describe('Obecnosc', () => {

    it("Obecnosc open",() => {
      cy.get('.men-list-tab').eq(3).click();
      cy.wait(1000)
      }) 
    })
  describe('Tygodniowy plan', () => {

    it("Tygodniowy plan open",() => {
      cy.get('.men-list-tab').eq(4).click();
      
      }) 
     it("Dodaj plan tygodniowy",() => {
      cy.get('[id="button-label"]').eq(2).click();
      }) 
     it("Dodaj aktywnosc",() => {
      cy.get('[id="section-list-action-addActivity"]').eq(0).click();
      cy.get('.input-wrap').type(data.text);
      cy.wait(1000);
      cy.get('#submit').click();
      cy.wait(1000);
      }) 
    })
  describe('Wycieczki', () => {

    it("Wycieczki open",() => {
      cy.get('.men-list-tab').eq(5).click();
      cy.wait(1000)
      }) 
    it("Dodaj wydarzenie",() => {
      cy.get('[id="button-label"]').eq(2).click();
      cy.get('.section-selector').eq(0).type(data.text);
      cy.get('.section-selector').eq(2).type('2');
      cy.get('.section-selector').eq(3).type(data.text);
      cy.get('#submit').click();
      }) 
    
    })
  describe('Zebrania z rodzicami', () => {

    it("Zebrania z rodzicami open",() => {
      cy.get('.men-list-tab').eq(6).click();
      cy.wait(1000)
      }) 
    it("Dodaj wydarzenie",() => {
      cy.get('[id="button-label"]').eq(2).click();
      cy.get('.section-selector').eq(0).type(data.text);
      cy.get('.section-selector').eq(2).type(data.text);
      cy.get('#submit').click();
      }) 
    })
  describe('Wazne wydarzenia', () => {

    it("Wazne wydarzenia open",() => {
      cy.get('.men-list-tab').eq(7).click();
      cy.wait(1000)
      }) 
     it("Dodaj wydarzenie",() => {
      cy.get('[id="button-label"]').eq(2).click();
      cy.get('.section-selector').eq(0).type(data.text);
      cy.get('.section-selector').eq(2).type(data.text);
      cy.get('#submit').click();
      }) 
    })
  describe('Pomoc psychologiczna', () => {

    it("Pomoc psychologiczna open",() => {
      cy.get('.men-list-tab').eq(8).click();
      cy.wait(1000)
      }) 
    it("Dodaj wydarzenie",() => {
      cy.get('[id="button-label"]').eq(2).click();
      cy.get('.section-selector').eq(0).type(data.text);
      cy.get('.section-selector').eq(1).type(data.text);
      cy.get('.section-selector').eq(3).type(data.text);
      cy.get('#section-list-action-addKid').click()
      cy.get('.checkbox').eq(1).click();
      cy.get('#submit').click();
      cy.wait(1000);
      cy.get('#submit').click();
      }) 
    })
  describe('Konsultacje z rodzicami', () => {

    it("Konsultacje z rodzicami open",() => {
      cy.get('.men-list-tab').eq(9).click();
      cy.wait(1000)
      }) 
    it("Dodaj wydarzenie",() => {
      cy.get('[id="button-label"]').eq(2).click();
      cy.get('.section-selector').eq(0).type(data.text);
      cy.get('.section-selector').eq(1).type(data.text);
      cy.get('.tools-row').click()
      cy.get('.checkbox').eq(0).click();
      cy.get('#submit').click();
      cy.wait(1000);
      cy.get('#submit').click();
      }) 
    })
  describe('Kontrole E-dziennik', () => {

    it("Kontrole E-dziennik open",() => {
      cy.get('.men-list-tab').eq(10).click();
      cy.wait(1000)
      }) 
    it("Dodaj wydarzenie",() => {
      cy.get('[id="button-label"]').eq(2).click();
      cy.get('.section-selector').eq(1).type(data.text);
      cy.get('.section-selector').eq(2).type(data.text);
      cy.get('[test_id="modalSubmit"]').click();
      }) 
    })
  describe('Wydruk dziennika', () => {

    it("Wydruk dziennika open",() => {
      cy.get('.men-list-tab').eq(11).click();
      cy.wait(1000)
      cy.get('[id="button-label"]').eq(2).click();
      cy.wait(5000)
      cy.get('[test_id="accept"]').click();
      cy.wait(5000)
      }) 
    })
})
