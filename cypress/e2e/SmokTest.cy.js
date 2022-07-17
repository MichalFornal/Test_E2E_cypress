import  data  from '../fixtures/liveRC.json'

Cypress.Cy.prototype.onUncaughtException = ()=>{}   
describe('logowanie', () => {
  beforeEach(()=>{
    cy.viewport(1920, 1080) 
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
})
describe('sprawdzenie obecnosci', () => {
  beforeEach(()=>{
    cy.viewport(1920, 1080) 
  })
  it("change data",() => {
    cy.get('#datepicker-button').click();
    cy.get('#calendar-cell-22').click();
    cy.get('#datepicker-submit').click();
    cy.wait(5000)
    cy.get('.list-content>div>span>div').find("#checkbox-default").each((elem)=>{
    console.log('dsds',elem)
    elem.trigger('click')
    })
    cy.get(':nth-child(1) > .regular-list-actions > .more-icon > .material-icons').click();
    
  })
})
  describe('Kalendarzowy', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  
  it("Kalendarzowy open",() => {
    cy.get(':nth-child(3) > .navigation-cell').click();
    cy.wait(1000)
    })
  })
  describe('Ogłoszenia', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Ogłoszenia open",() => {
    cy.get(':nth-child(4) > .navigation-cell').click();
    cy.wait(1000)
    })
  })
  describe('Plan Zajęć', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Plan Zajęć open",() => {
    cy.get(':nth-child(5) > .navigation-cell').click();
    cy.wait(1000)
    })
  })
  describe('Galeria zdjęć', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Galeria Zdjęć open",() => {
    cy.get(':nth-child(6) > .navigation-cell').click();
    cy.wait(1000)
    })
  })
  describe('Jadłospis', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Jadłospis open",() => {
    cy.get(':nth-child(7) > .navigation-cell').click();
    cy.wait(1000)
    })
  })
  describe('Dysk', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Dysk open",() => {
    cy.get(':nth-child(8) > .navigation-cell').click();
    cy.wait(1000)
    })
  })
  describe('E-dziennik', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("E-dziennik open",() => {
    cy.get(':nth-child(9) > .navigation-cell').click();
    cy.wait(1000)
    })
  })
  describe('Ankieta', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Ankieta open",() => {
    cy.get(':nth-child(10) > .navigation-cell').click();
    cy.wait(1000)
    })
  })
  describe('Ewaluacja', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Ewaluacja open",() => {
    cy.get(':nth-child(11) > .navigation-cell').click();
    cy.wait(1000)
    })
  }) 

