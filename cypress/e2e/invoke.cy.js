/// <reference types="cypress" />

describe('E2E - metoda invoke', () => {
  it('Invoke', () => {
    cy.visit('http://automationpractice.com/index.php')
      //pobieranie wartosci z danego elementu
    cy.get('#contact-link').invoke("text").then(tekst =>{
        cy.log(tekst)
    })
      //uzyskanie dostepu do wartosci atrybutu
    cy.get('[title="Contact Us"]').invoke("attr", "href").then(link =>{
      cy.log(link)

    })
    cy.get('[title="Contact Us"]').invoke("attr", "title").then(title =>{
      cy.log(title)

    })
    //pobieranie wartosci value
    cy.get("#search_query_top").type("Przykladowa wartosc").invoke("prop", "value").then(wartosc =>{
      cy.log(wartosc)
    })
    cy.get("#search_query_top").type("Przykladowa wartosc").invoke("prop", "checked").then(wartosc =>{
      cy.log(wartosc)
    })
  })
})


