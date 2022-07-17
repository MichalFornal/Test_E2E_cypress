import  data  from '../fixtures/liveRC.json'

Cypress.Cy.prototype.onUncaughtException = ()=>{}   
describe('logowanie', () => {
  beforeEach(()=>{
    
  })


  it('wejdz na strone', () => {
    cy.visit('https://rc.app.livekid.pl/')
  })
  it('wpisz login', () => {
    cy.get('[data-cy="login"]').type(data.user)
  })
  it('wpisz haslo', () => {
    cy.get('[data-cy="password"]').type(data.pass)
  })
})
describe('sprawdzenie dziennika', () => {
  beforeEach(()=>{
    cy.viewport(1920, 1080) 
  })
  it("Przeklikaj caly dziennik",() => {
    cy.get('[data-cy="loginButton"]').click();
    cy.get('.user-roles > :nth-child(1)').click();
    cy.get(':nth-child(2) > .navigation-cell > .navigation-cell-text').click();

  })

describe('Rozliczenia', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Rozliczenia open",() => {
    cy.get('[href="/school/payments"] > .material-icons').click();
    cy.wait(1000)
    })
    describe('Raporty', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Raporty open",() => {
      cy.get(':nth-child(2) > .navigation-cell').click();
      cy.wait(2000)
      })
      
    }) 
    describe('Wpłaty', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Wpłaty open",() => {
      cy.get(':nth-child(3) > .navigation-cell').click();
      cy.wait(2000)
      })
      
    }) 
    describe('Faktury VAT', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Faktury VAT open",() => {
      cy.get(':nth-child(4) > .navigation-cell').click();
      cy.wait(2000)
      })
      
    }) 
    describe('Rachunki', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Rachunki open",() => {
      cy.get(':nth-child(1) > .navigation-cell').click();
      cy.wait(2000)
      })
      
    }) 
    
  }) 
  
}) 