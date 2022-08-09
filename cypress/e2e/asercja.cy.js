/// <reference types="cypress" />

describe('E2E klikniecia', () => {
  it('Klikniecie na elementach', () => {

    //weryfikacja tekstu
    cy.visit('http://automationpractice.com/index.php');
    //1 sposob
    cy.get('a[title="Contact Us"]').should("contain", "Contact us")
    //2 sposob
    cy.get('a[title="Contact Us"]').then(zakladka=>{
      expect(zakladka).to.contain("Contact us")
    })
    // Sprawdzenie czy nie zawiera jakiegos tekstu
    cy.get('a[title="Contact Us"]').should("not.contain", "blabla us")
    // 2 sposob

    cy.get('a[title="Contact Us"]').then(zakladka=>{
      expect(zakladka).not.to.contain("blabla us")
    })

    //weryfikacja czy znacznik posiada klase
    cy.get('#search_query_top').should("have.class", "form-control")
    // 2 sposob
    cy.get('#search_query_top').then(wyszukiwarka=>{
      expect(wyszukiwarka).to.have.class("form-control")
    })

    // Czy element jest widoczny
    cy.get('#search_query_top').should('be.visible');
    //2 sposob
    cy.get('#search_query_top').then(wyszukiwarka=>{
      expect(wyszukiwarka).to.be.visible
    })

    //weryfikacja ilosci pobranych elementow
    cy.get('ul.sf-menu').find('li').should("have.length",14);
    //2 sposob
    cy.get('ul.sf-menu').find('li').then(zakladki=>{
      expect(zakladki).to.have.length(14);
    })

    //weryfikacja css danego elementu
    cy.get('#search_query_top').should("have.css", "line-height", "45px")
    cy.get('#search_query_top').then(wyszukiwarka =>{
      expect(wyszukiwarka).to.have.css("line-height", "45px")
    })


  })
})