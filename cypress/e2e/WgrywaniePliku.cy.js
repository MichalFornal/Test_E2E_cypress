/// <reference types="cypress" />

describe('E2E klikniecia', () => {
  it('Klikniecie na elementach', () => {
    cy.visit('http://automationpractice.com/index.php?controller=contact')
    cy.get('#fileUpload').attachFile("../fixtures/zdjecie.png");
    cy.get("#span.filename").should("contain", "zdjecie.png");
  })
})