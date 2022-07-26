/// <reference types="cypress" />


describe('E2E klikniecia', () => {
  it('Klikniecie na elementach', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('a[title="Dresses"]').eq(1).trigger('focus');
    cy.get('li.sfHover a[title="Summer Dresses"]').click();
  })

  it("skolowanie",()=>{
    cy.get('a[title="Specials"]').eq(0).trigger('scroll');

  })
})