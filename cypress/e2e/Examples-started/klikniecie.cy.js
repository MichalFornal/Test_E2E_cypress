/// <reference types="cypress" />

describe('E2E klikniecia', () => {
  it('Klikniecie na elementach', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get("#contact-link").click();
    cy.get(".icon-home").click();
  })
})