/// <reference types="cypress" />

describe('E2E akcja klikniecie chexbox', () => {
  it('checkbox', () => {
    cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category')
    cy.get('#ul_layered_category_0').find("input").then(checkbox =>{
      cy.get(checkbox).eq(0).check();
      // jak cos zaslania mojego checkboxa wtedy uzywam {force:true}
      cy.get(checkbox).eq(1).check().invoke("prop", "checked").then(zaznaczony =>{
        cy.log(zaznaczony)

      })
      
    })
    //zaznaczenie wszystkich checkboxow na stronie
    cy.get("#ul_layered_id_attribute_group_1").find("input").check();

  })
})