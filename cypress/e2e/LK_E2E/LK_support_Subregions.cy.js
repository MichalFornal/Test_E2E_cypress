/// <reference types="cypress" />

import  data  from '../../fixtures/liveRC.json'
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
  //cy.visit('https://rc.app.livekid.pl/')
  //Prod
  cy.visit('https://app.livekid.com/?lang=pl')
  })
  it('wpisz login', () => {
    cy.get('[data-cy="login"]').type(data.support)
  })
  it('wpisz haslo', () => {
    cy.get('[data-cy="password"]').type(data.pass_support)
  })
})
describe('Logowanie', () => {
  beforeEach(()=>{
    cy.viewport(1920, 1080) 
  })
  it("Login subregion pl0",() => {
    cy.get('[data-cy="loginButton"]').click();
    cy.get('.user-role-icon').eq(0).click();
    cy.wait(1000);
  })
})
describe('Wyszukaj placówki', () => {
  beforeEach(()=>{
    cy.viewport(1920, 1080) 
  })
  it("wpisz id placówki",() => {
    cy.get('[placeholder="Search..."]').type(data.PL0_ID);
    cy.wait(1000);
  })
  it("kliknij na placówkę",() => {
    cy.get('.grid-content').click();
    cy.wait(1000);
  })
  it("wygeneruj kod placówki",() => {
    cy.get('.icon-button').eq(0).click()
  })
  it("Wyjdz z dodania konta",() => {
    cy.get('.popup-content-header > .material-icons').click()
    cy.wait(1000);
  })
  describe('Subregion PL1', () => {
    it("Subregion PL1 open",() => {
      cy.get('.user-role-icon').eq(1).click();
      cy.wait(1000);
    })
    it("wpisz id placówki",() => {
      cy.get('[placeholder="Search..."]').type(data.PL1_ID)
      cy.wait(1000);
    })
    it("kliknij na placówkę",() => {
      cy.get('.grid-content').click();
      cy.wait(1000);
    })
    it("wygeneruj kod placówki",() => {
      cy.get('.icon-button').eq(0).click()
    })
    it("Wyjdz z dodania konta",() => {
      cy.get('.popup-content-header > .material-icons').click()
      cy.wait(1000);
    })   
  })

  describe('Subregion PL2', () => {
    it("Subregion PL2 open",() => {
      cy.get('.user-role-icon').eq(2).click();
      cy.wait(1000);
    })
    it("wpisz id placówki",() => {
      cy.get('[placeholder="Search..."]').type(data.PL2_ID)
      cy.wait(1000);
    })
    it("kliknij na placówkę",() => {
      cy.get('.grid-content').click();
      cy.wait(1000);
    })
    it("wygeneruj kod placówki",() => {
      cy.get('.icon-button').eq(0).click()
    })
    it("Wyjdz z dodania konta",() => {
      cy.get('.popup-content-header > .material-icons').click()
      cy.wait(1000);
    })   
  })
  describe('Subregion PL3', () => {
    it("Subregion PL3 open",() => {
      cy.get('.user-role-icon').eq(3).click();
      cy.wait(1000);
    })
    it("wpisz id placówki",() => {
      cy.get('[placeholder="Search..."]').type(data.PL3_ID);
      cy.wait(1000);
    })
    it("kliknij na placówkę",() => {
      cy.get('.grid-content').click();
      cy.wait(1000);
    })
    it("wygeneruj kod placówki",() => {
      cy.get('.icon-button').eq(0).click()
    })
    it("Wyjdz z dodania konta",() => {
      cy.get('.popup-content-header > .material-icons').click()
      cy.wait(1000);
    })   
  })
  describe('Subregion PL4', () => {
    it("Subregion PL4 open",() => {
      cy.get('.user-role-icon').eq(4).click();
      cy.wait(1000);
    })
    it("wpisz id placówki",() => {
      cy.get('[placeholder="Search..."]').type(data.PL4_ID)
      cy.wait(1000);
    })
    it("kliknij na placówkę",() => {
      cy.get('.grid-content').click();
      cy.wait(1000);
    })
    it("wygeneruj kod placówki",() => {
      cy.get('.icon-button').eq(0).click()
    })
    it("Wyjdz z dodania konta",() => {
      cy.get('.popup-content-header > .material-icons').click()
      cy.wait(1000);
    })   
  })
  describe('Subregion PL5', () => {
    it("Subregion PL5 open",() => {
      cy.get('.user-role-icon').eq(5).click();
      cy.wait(1000);
    })
    it("wpisz id placówki",() => {
      cy.get('[placeholder="Search..."]').type(data.PL5_ID)
      cy.wait(1000);
    })
    it("kliknij na placówkę",() => {
      cy.get('.grid-content').click();
      cy.wait(1000);
    })
    it("wygeneruj kod placówki",() => {
      cy.get('.icon-button').eq(0).click()
    })
    it("Wyjdz z dodania konta",() => {
      cy.get('.popup-content-header > .material-icons').click()
      cy.wait(1000);
    })   
  })
  describe('Subregion PL6', () => {
    it("Subregion PL6 open",() => {
      cy.get('.user-role-icon').eq(6).click();
      cy.wait(1000);
    })
    it("wpisz id placówki",() => {
      cy.get('[placeholder="Search..."]').type(data.PL6_ID)
      cy.wait(1000);
    })
    it("kliknij na placówkę",() => {
      cy.get('.grid-content').click();
      cy.wait(1000);
    })
    it("wygeneruj kod placówki",() => {
      cy.get('.icon-button').eq(0).click()
    })
    it("Wyjdz z dodania konta",() => {
      cy.get('.popup-content-header > .material-icons').click()
      cy.wait(1000);
    })   
  })
  describe('Subregion PL7', () => {
    it("Subregion PL7 open",() => {
      cy.get('.user-role-icon').eq(7).click();
      cy.wait(1000);
    })
    it("wpisz id placówki",() => {
      cy.get('[placeholder="Search..."]').type(data.PL7_ID)
      cy.wait(1000);
    })
    it("kliknij na placówkę",() => {
      cy.get('.grid-content').click();
      cy.wait(1000);
    })
    it("wygeneruj kod placówki",() => {
      cy.get('.icon-button').eq(0).click()
    })
    it("Wyjdz z dodania konta",() => {
      cy.get('.popup-content-header > .material-icons').click()
      cy.wait(1000);
    })   
  })
  describe('Subregion PL8', () => {
    it("Subregion PL8 open",() => {
      cy.get('.user-role-icon').eq(8).click();
      cy.wait(1000);
    })
    it("wpisz id placówki",() => {
      cy.get('[placeholder="Search..."]').type(data.PL8_ID)
      cy.wait(1000);
    })
    it("kliknij na placówkę",() => {
      cy.get('.grid-content').click();
      cy.wait(1000);
    })
    it("wygeneruj kod placówki",() => {
      cy.get('.icon-button').eq(0).click()
    })
    it("Wyjdz z dodania konta",() => {
      cy.get('.popup-content-header > .material-icons').click()
      cy.wait(1000);
    })   
  })
  describe('Subregion PL9', () => {
    it("Subregion PL9 open",() => {
      cy.get('.user-role-icon').eq(9).click();
      cy.wait(1000);
    })
    it("wpisz id placówki",() => {
      cy.get('[placeholder="Search..."]').type(data.PL9_ID)
      cy.wait(1000);
    })
    it("kliknij na placówkę",() => {
      cy.get('.grid-content').click();
      cy.wait(1000);
    })
    it("wygeneruj kod placówki",() => {
      cy.get('.icon-button').eq(0).click()
    })
    it("Wyjdz z dodania konta",() => {
      cy.get('.popup-content-header > .material-icons').click()
      cy.wait(1000);
    })   
  })
})
