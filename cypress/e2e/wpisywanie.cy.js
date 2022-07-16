/// <reference types="cypress" />

describe('E2E klikniecia', () => {
  it('Klikniecie na elementach', () => {
    cy.visit('http://automationpractice.com/index.php')
    // cy.get("#search_query_top").type(" przykładowy tekst{enter}")

    //delay opoznienie wpisywania 500ms 
    // backspace usuwanie ostatniej litery
   cy.get("#search_query_top").type(" przykładowy tekst{backspace}", {delay: 500})

  })
   it("clear value in input", () => {
    cy.get("#search_query_top").clear();


  })

})