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
  describe('Ustawienia', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Ustawienia open",() => {
    cy.get('[href="/school/settings"] > .material-icons').click();
    
    cy.wait(2000)
    })
    describe('Dzieci', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Dzieci open",() => {
      cy.get(':nth-child(2) > .navigation-cell').click();
      cy.wait(2000)
      })
    }) 
    describe('Grupy', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Grupy open",() => {
      cy.get(':nth-child(3) > .navigation-cell').click();
      cy.wait(2000)
      })
    })
    describe('Nauczyciele', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Nauczyciele open",() => {
      cy.get(':nth-child(4) > .navigation-cell').click();
      cy.wait(2000)
      })
    }) 
    describe('Placówka', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Placówka open",() => {
      cy.get(':nth-child(5) > .navigation-cell').click();
      cy.wait(2000)
      })
    }) 
    describe('Rekrutacja', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Rekrutacja open",() => {
      cy.get(':nth-child(6) > .navigation-cell').click();
      cy.wait(2000)
      })
    }) 
    describe('Uprawnienia', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Uprawnienia open",() => {
      cy.get(':nth-child(7) > .navigation-cell').click();
      cy.wait(2000)
      })
    }) 
    describe('Kalendarz pracy', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Kalendarz pracy open",() => {
      cy.get(':nth-child(8) > .navigation-cell').click();
      cy.wait(2000)
      })
    }) 
    describe('Panel Glowny parcy', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Panel Glowny open",() => {
      cy.get(':nth-child(1) > .navigation-cell').click();
      cy.wait(2000)
      })
    }) 
  }) 
     
// describe('Rozliczenia', () => {
//     beforeEach(()=>{
//       cy.viewport(1920, 1080) 
//     })
//   it("Rozliczenia open",() => {
//     cy.get('[href="/school/payments"] > .material-icons').click();
//     cy.wait(1000)
//     })
//     describe('Raporty', () => {
//       beforeEach(()=>{
//         cy.viewport(1920, 1080) 
//       })
//     it("Raporty open",() => {
//       cy.get(':nth-child(2) > .navigation-cell').click();
//       cy.wait(2000)
//       })
      
//     }) 
//     describe('Wpłaty', () => {
//       beforeEach(()=>{
//         cy.viewport(1920, 1080) 
//       })
//     it("Wpłaty open",() => {
//       cy.get(':nth-child(3) > .navigation-cell').click();
//       cy.wait(2000)
//       })
      
//     }) 
//     describe('Faktury VAT', () => {
//       beforeEach(()=>{
//         cy.viewport(1920, 1080) 
//       })
//     it("Faktury VAT open",() => {
//       cy.get(':nth-child(4) > .navigation-cell').click();
//       cy.wait(2000)
//       })
      
//     }) 
//     describe('Rachunki', () => {
//       beforeEach(()=>{
//         cy.viewport(1920, 1080) 
//       })
//     it("Rachunki open",() => {
//       cy.get(':nth-child(1) > .navigation-cell').click();
//       cy.wait(2000)
//       })
      
//     }) 
    
//   }) 
  
}) 