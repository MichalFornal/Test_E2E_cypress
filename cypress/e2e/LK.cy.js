import  data  from '../fixtures/liveRC.json'
Cypress.Cy.prototype.onUncaughtException = function(){}     
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://rc.app.livekid.pl/')
    cy.get('[data-cy="login"]').type(data.user)
    cy.get('[data-cy="password"]').type(data.pass)
    cy.get('[data-cy="loginButton"]').click();
    cy.get('.user-roles > :nth-child(1)').click();
  })
})
// test Michal