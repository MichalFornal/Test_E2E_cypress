/// <reference types="cypress" />

import  data  from '../../fixtures/liveRC.json'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
Cypress.Cy.prototype.onUncaughtException = ()=>{}   
describe('SignUp', () => {
  beforeEach(()=>{
    cy.viewport(1920, 1080) 
  })
  it('Home page', () => {
  //Stage
  //cy.visit('https://stage.app.livekid.pl/') 
  //RC
  cy.visit('https://rc.app.livekid.pl/')
  //Prod
  //cy.visit('https://app.livekid.com/?lang=pl')
  })
  it('Click SignUp', () => {
    cy.get('[id="signup-route"]').click();
  })
  it('Click I am principal', () => {
    cy.get('[id="type-admin"]').click();
  })
  it('Facility Name', () =>{
    cy.get('[name="schoolName"]').type('Placowka test');
  })
  it('Continue', () =>{
    cy.get('[data-cy="loginButton"]').click();
  }) 
})
describe('Create account', () => {
  beforeEach(()=>{
    cy.viewport(1920, 1080) 
  })
  it("First Name",() => {
    cy.wait(500);
    cy.get('.login-input-row').eq(0).type(data.directorname);
  })
  it("Surname",() => {
    cy.get('.login-input-row').eq(1).type(data.directorsurname);
  })
  it("PhoneNumber",() => {
    cy.get('.login-input-row').eq(2).type(data.PhoneNumber);
  })
  it("Eamil",() => {
    cy.get('.login-input-row').eq(3).type(data.directoremail);
  })
  it("Pass",() => {
    cy.get('.login-input-row').eq(4).type(data.pass);
  })
  it("Pass2",() => {
    cy.get('.login-input-row').eq(5).type(data.pass);
  })
  it("Checkbox1",() => {
    cy.get('[id="checkbox-regulations"]').click();
  })
  it("Checkbox2",() => {
    cy.get('[id="checkbox-privacy"]').click();
  })
  it("Create account",() => {
    cy.get('[id="form-submit"]').click();
  })
  it("Ok",()=> {
    cy.get('[data-cy="loginButton"]').click();
  })
})

