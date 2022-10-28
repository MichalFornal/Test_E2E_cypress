/// <reference types="cypress" />

import  data  from '../fixtures/liveRC.json'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
Cypress.Cy.prototype.onUncaughtException = ()=>{}   
describe('logowanie', () => {
  beforeEach(()=>{
    cy.viewport(1920, 1080) 
  })
  it('Home page login', () => {
    //Stage
    //cy.visit('https://stage.app.livekid.pl/') 
    //RC
    cy.visit('https://rc.app.livekid.pl/')
    //Prod
    //cy.visit('https://app.livekid.com/?lang=pl')
    })
    it('wpisz login', () => {
      cy.get('[data-cy="login"]').type(data.user)
    })
    it('wpisz haslo', () => {
      cy.get('[data-cy="password"]').type(data.pass)
    })
  })
  describe('Logowanie', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
    it("Login",() => {
      cy.get('[data-cy="loginButton"]').click();
      //jak masz admina lub wiecej rol to on
      cy.get('.user-roles > :nth-child(1)').click();
      cy.wait(1000);
    })
  
  })
  describe('E-dziennik', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("E-dziennik open",() => {
    cy.get(':nth-child(9) > .navigation-cell').click();
      
    })
    describe('Create Dziennik SPEC', () => {
      it("Create dziennik SPEC",() => {
        cy.wait(1000);
        cy.get('[id="button-label"]').click();
        })
        it("Dodaj nauczyciela dziennik SPEC",() => {
          cy.wait(1000);
          cy.get('[id="selector-teachers"]').click();
          cy.get('[id="checkbox-default"]').eq(0).click();
          cy.get('.popup-slot').click();
          })
         it("Dodaj dziecko dziennik SPEC",() => {
          cy.wait(1000);
          cy.get('[test_id="addKid"]').click();
          cy.wait(1000);
          cy.get('[id="checkbox-default"]').eq(1).click();
          cy.wait(1000);
          cy.get('[id="submit"]').click();
          })
        
        it("Stworz dziennik SPEC",() => {
          cy.wait(1000);
          cy.get('[autocomplete="new-password"]').eq(1).type(data.text);
          cy.get('[autocomplete="new-password"]').eq(3).type(data.NamedziennikSpec);
          cy.get('[autocomplete="new-password"]').eq(6).type(data.text);
          cy.get('[autocomplete="new-password"]').eq(7).type(data.text);
          cy.get('[autocomplete="new-password"]').eq(8).type(data.text);
          cy.get('[autocomplete="new-password"]').eq(9).type(data.text);
          cy.get('[autocomplete="new-password"]').eq(10).type(data.PhoneNumber);
          cy.wait(1000);
          cy.get('[id="next"]').click();
          cy.get('[id="submit"]').click();
          }) 
      })
      describe('Uzupelnienie danych Dziennik SPEC', () => {
        it("Open dziennik SPEC",() => {
          cy.wait(1000);
          //tutaj dalem eq -1 spr
          cy.get('[id="regular-list-cell-Specjalistyczny"]').eq(-1).click();
          }) 
          
        it("Dodaj plan tygodniowy",() => {
          cy.wait(1000);
          cy.get('[id="button-label"]').eq(1).click();
          }) 
        it("Dodaj aktywnosc",() => {
          cy.get('[id="section-list-action-addActivity"]').eq(0).click();
          cy.get('.input-wrap').type(data.text);
          cy.wait(1000);
          cy.get('#submit').click();
          cy.wait(1000);
          }) 
        
        })
        describe('Informacje o wychowankach', () => {

          it("Informacje o wychowankach open",() => {
            cy.get('.men-list-tab').eq(1).click();
            cy.wait(1000)
            }) 
          it("Informacje o wychowankach synchronizacja",() => {
            cy.get('.button-wrapper').eq(1).click();
            cy.wait(1000)
            cy.get('[test_id="accept"]').click(); 
            })        
        })
        describe('Obecnosc na zajeciach', () => {

          it("Obecnosc na zajeciach open",() => {
            cy.get('.men-list-tab').eq(2).click();
            cy.wait(1000)
            })     
        })
        describe('Podstawy zakwalifikowania', () => {

          it("Podstawy zakwalifikowania open",() => {
            cy.get('.men-list-tab').eq(3).click();
            cy.wait(1000)
            }) 
          it("Podstawy zakwalifikowania wpis zimowy",() => {
            cy.get('[id="button-label"]').eq(0).click()
            })   
          it("Uzupelnienie tresci notatki",() => {
            cy.get('[placeholder="Wpisz tutaj..."]').eq(0).type(data.text);
            cy.get('[placeholder="Wpisz tutaj..."]').eq(1).type(data.text);
            cy.get('[placeholder="Wpisz tutaj..."]').eq(2).type(data.text);
            cy.get('[placeholder="Wpisz tutaj..."]').eq(3).type(data.text);
            cy.get('#submit').click();
            cy.wait(1000)
            })   
            it("Podstawy zakwalifikowania wpis zimowy",() => {
              cy.get('[id="button-label"]').eq(1).click()
              })   
            it("Uzupelnienie tresci notatki",() => {
              cy.get('[placeholder="Wpisz tutaj..."]').eq(0).type(data.text);
              cy.get('[placeholder="Wpisz tutaj..."]').eq(1).type(data.text);
              cy.get('[placeholder="Wpisz tutaj..."]').eq(2).type(data.text);
              cy.get('[placeholder="Wpisz tutaj..."]').eq(3).type(data.text);
              cy.get('#submit').click();
              cy.wait(1000)
              })  
        })
        describe('Realizacja programu zajec', () => {

          it("Realizacja programu zajec open",() => {
            cy.get('.men-list-tab').eq(4).click();
            cy.wait(1000)
            }) 
          it("Realizacja programu zajec Dodaj wpis",() => {
            cy.get('.button-wrapper').eq(1).click();
            cy.wait(1000)
            })        
          it("Realizacja programu zajec Dodaj wpis",() => {
            cy.get('[placeholder="Wpisz tutaj..."]').eq(0).type('3');
            cy.get('[placeholder="Wpisz tutaj..."]').eq(1).type(data.teachername);
            cy.get('[placeholder="Wpisz tutaj..."]').eq(2).type(data.text);
            cy.get('[placeholder="Wpisz tutaj..."]').eq(3).type(data.text);
            cy.get('#submit').click();
            cy.wait(1000)
            }) 
        })
        describe('Kontakty z rodzicami, nauczycielami, pedagogami', () => {

          it("Kontakty z rodzicami, nauczycielami, pedagogami open",() => {
            cy.get('.men-list-tab').eq(5).click();
            cy.wait(1000)
            }) 
          it("Kontakty z rodzicami, nauczycielami, pedagogami Dodaj wpis",() => {
            cy.get('.button-wrapper').eq(1).click();
            cy.wait(1000)
            })        
          it("Kontakty z rodzicami, nauczycielami, pedagogami Dodaj wpis",() => {
            cy.get('[placeholder="Wpisz tutaj..."]').eq(0).type(data.teachername);
            cy.get('[placeholder="Wpisz tutaj..."]').eq(1).type(data.text);
            cy.get('[placeholder="Wpisz tutaj..."]').eq(2).type(data.text);
            cy.get('#submit').click();
            cy.wait(1000)
            }) 
        })
        describe('Hospitacje', () => {

          it("Hospitacje open",() => {
            cy.get('.men-list-tab').eq(6).click();
            cy.wait(1000)
            }) 
          it("Hospitacje Dodaj wpis",() => {
            cy.get('.button-wrapper').eq(1).click();
            cy.wait(1000)
            })        
          it("Hospitacje Dodaj wpis",() => {
            cy.get('[placeholder="Wpisz tutaj..."]').eq(0).type('Dowod osobisty AYF123');
            cy.get('[placeholder="Wpisz tutaj..."]').eq(1).type(data.teachername);
            cy.get('[placeholder="Wpisz tutaj..."]').eq(2).type(data.text);
            cy.get('#submit').click();
            cy.wait(1000)
            }) 
        })
        describe('Notatki', () => {

          it("Notatki open",() => {
            cy.get('.men-list-tab').eq(7).click();
            cy.wait(1000)
            }) 
          it("Notatki Dodaj wpis",() => {
            cy.get('.button-wrapper').eq(1).click();
            cy.wait(1000)
            })        
          it("Notatki Dodaj wpis",() => {
            cy.get('[placeholder="Wpisz tutaj..."]').eq(0).type(data.teachername);
            cy.get('[placeholder="Wpisz tutaj..."]').eq(1).type(data.text);
            cy.get('#submit').click();
            cy.wait(1000)
            }) 
        })
        describe('Wydruk dziennika', () => {

          it("Wydruk dziennika open",() => {
            cy.get('.men-list-tab').eq(8).click();
            cy.wait(1000)
            }) 
          it("Wydruk dziennika open",() => {
            cy.wait(1000)
            cy.get('.button-wrapper').eq(2).click();
            cy.wait(5000)
            cy.reload();
            cy.wait(1000)
            })  
        })        
      })