/// <reference types="cypress" />

describe('test Livekid', () => {
  it('Open homePage', () => {
    cy.visit('http://automationpractice.com/index.php')
    //pobierz po znaczniku
    cy.get("a");
    //identyfikator
    cy.get("#search_query_top");
    //klasa
    cy.get(".form-control");
    //atrybuty
    cy.get('[name="search_query"]')
    cy.get('[placeholder="Search"]')
    //dokladniejsze atrybuty
    cy.get('input[placeholder="Search"]')
    //pobieranie elementow po kliku atrybutach
    cy.get('[src="http://automationpractice.com/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')
    //zalecana metoda
    cy.get('[idtest="wyszukiwarka"]')
  })

  it.only("Lokalizatory cz2", () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.contains("Shop now !")
    cy.contains('[title="Contact Us"]','Contact us')
    cy.get("li").parents("#home-page-tabs").find("li").eq(1);
    cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers");
  })
})