/// <reference types="cypress" />

import SelectPage from "../../support/page-object/SelectPage";

describe("E2E - Akcja wybrania opcji selekt", () => {
  it("Wybieranie opcji", () => {
      cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category#/")

      //Po nazwie
      cy.get("#selectProductSort").select("In stock")

      //Po value
      cy.get("#selectProductSort").select("price:asc")

      //Po indeksach 
      cy.get("#selectProductSort").select(7)
  })

  it.only("Wybieranie wszystkich opcji", () => {
      cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category#/")
      SelectPage.selectAlloption();

  })
})