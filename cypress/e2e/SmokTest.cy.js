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
    cy.wait(2000)
    cy.get('.list-content>div>span>div').find("#checkbox-default").each((elem)=>{
    console.log('dsds',elem)
    elem.trigger('click')
    })
    cy.get(':nth-child(1) > .regular-list-actions > .more-icon > .material-icons').click();
    
  })
  it("Kalendarzowy",() => {
    cy.get(':nth-child(3) > .navigation-cell').click();
    cy.wait(1000)
  })
  it("Ogłoszenia",() => {
    cy.get(':nth-child(4) > .navigation-cell').click();
    cy.wait(1000)
  })
  it("Plan Zajęć",() => {
    cy.get(':nth-child(5) > .navigation-cell').click();
    cy.wait(1000)
  })
  it("Plan Zajęć",() => {
    cy.get(':nth-child(5) > .navigation-cell').click();
    cy.wait(1000)
  })
  it("Galeria Zdjęć",() => {
    cy.get(':nth-child(6) > .navigation-cell').click();
    cy.wait(1000)
  })
  it("Jadłospis",() => {
    cy.get(':nth-child(7) > .navigation-cell').click();
    cy.wait(1000)
  })
  it("Dysk",() => {
    cy.get(':nth-child(8) > .navigation-cell').click();
    cy.wait(1000)
  })
  it("E-dziennik",() => {
    cy.get(':nth-child(9) > .navigation-cell').click();
    cy.wait(1000)
  })
  it("Ankieta",() => {
    cy.get(':nth-child(10) > .navigation-cell').click();
    cy.wait(1000)
  })
  it("Ewaluacja",() => {
    cy.get(':nth-child(11) > .navigation-cell').click();
    cy.wait(1000)
  })
})
