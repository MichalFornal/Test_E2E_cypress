describe('E2E wybieranie selecta', () => {
  it('Konkretny select', () => {
    cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category')

    //po nazwie
    cy.get('#selectProductSort').select('In stock');

    //po value
    cy.get('#selectProductSort').select('name:asc');
    
    //po indeksie
    cy.get('#selectProductSort').select(7);


  })

  it.only('Kwszystkie selecty', () => {
    cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category')
    cy.get('#selectProductSort').then(select =>{
      cy.wrap(select).find('option').each(opcja =>{
        cy.wrap(select).select(opcja.text())
      });
    })
    

  })
})