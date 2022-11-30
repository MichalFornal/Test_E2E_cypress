/// <reference types="cypress" />

import  data  from '../../fixtures/liveRC.json'
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
      cy.get('[data-cy="login"]').type(data.Parentemail)
    })
    it('wpisz haslo', () => {
      cy.get('[data-cy="password"]').type(data.Parentpass)
    })
  })
  describe('Logowanie', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
    it("Login",() => {
      cy.get('[data-cy="loginButton"]').click();
      //jak masz admina lub wiecej rol to on
      cy.get('/user-role-icon').eq(2).click();
      cy.wait(1000);
    })
  
  })
  describe('Dziennik', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
      it("Zaplanuj zmiany",() => {

      })
      it("Zaplanuj zmiany nieobecny",() => {

      })
      it("Wiecej",() => {

      })
      it("Zaplac",() => {

      })
      it("Zmien daty kalendarz",() => {

      })
      it("Zmien daty miesiac w kalendarzu",() => {

      })
      it("Zmien daty miesiac w kalendarzu strzalki",() => {

      })
      it("Legenda",() => {

      })
    })
    describe('Aktywnosc', () => {
      it("Aktywnosc open",() => {

      })
      it("Aktywnosc scrol",() => {

      })
        })    
    describe('Ogloszenia', () => {
      it("Ogloszenia open",() => {

      })
      it("Ogloszenia odczytaj",() => {

      })
      it("Ogloszenia dodaj komentarz",() => {

      })
      it("Ogloszenia szukaj",() => {

      })
        })   
    describe('Aktywnosc', () => {
      it("Plan zajec open",() => {

      })
      it("Plan zajec scrol",() => {

      })
      it("Plan zajec zmiana daty",() => {

      })
      it("Plan zajec zmiana dni na 14",() => {

      })
      it("Plan zajec zmiana dni na 7",() => {

      })
      it("Plan zajec strzalki zmiana dat",() => {

      })
      it("Plan zajec Dzisiaj",() => {

      })
      it("Plan zajec konkretny dzien",() => {

      })
        })   
    describe('Jadlospis', () => {
      it("Jadlospis open",() => {
    
      })
      it("Jadlospis wybierz konkretny",() => {
    
      })
      it("Jadlospis szukaj",() => {
    
      })
        })  
    describe('Galeria', () => {
      it("Galeria open",() => {
    
      })
      it("Galeria scrol",() => {
    
      })
      it("Galeria dodaj komentarz",() => {
    
      })
      it("Galeria otworz zdjecia i pobierz ",() => {
    
      })
        })  
    describe('Dysk', () => {
      it("Dysk open",() => {
            
      })
      it("Dysk dodaj plik",() => {
            
      })  
      it("Dysk usun  plik dodany",() => {
            
      }) 
      it("Dysk zmien forme podgladu",() => {
            
      })   
      it("Dysk odpal plik",() => {
            
      })  
      it("Dysk szukaj plik",() => {
            
      })    
        }) 
    describe('Chat', () => {
      it("Chat open",() => {
                    
        })
      it("Chat napisz wiadomosc",() => {
                    
      })  
      it("Chat wyslij zdjecie",() => {
                    
      }) 
      it("Chat Szukaj",() => {
                    
      }) 
      it("Chat wycisz off",() => {
                    
      }) 
      it("Chat wycisz on",() => {
                    
      })   
      it("Chat Galeria",() => {
                    
      })  
      it("Chat pokoj",() => {
                    
      })  
      it("Chat O dzieciach",() => {
                    
      })  
      it("Chat Presonel",() => {
                    
      })   
      it("Chat Grupowe",() => {
                    
       })  
    })
    describe('E-zajecia', () => {
      it("E-zajecia open",() => {
            
      })
      it("E-zajecia szukaj",() => {
            
      })  
      it("E-zajecia odpal",() => {
            
      }) 

    })    
    describe('Na zywo', () => {
      it("Na zywo open",() => {
            
      })
      it("Na zywo szukaj",() => {
            
      })  
      it("Na zywo odpal",() => {
            
      }) 
    }) 
    describe('Rozliczenia', () => {
      it("Rozliczenia open",() => {
            
      })
      it("Rozliczenia szukaj",() => {
            
      })  
      it("Oplac rachunek jeden",() => {
            
      }) 
      it("Oplac rachunek all",() => {
            
      }) 
    }) 
    describe('Konto', () => {
      it("Konto open",() => {
            
      })
      it("Zmien pass",() => {
            
      })  
      it("Zmien pass2",() => {
            
      }) 
      
    })
    describe('Profil dziecka', () => {
      it("Profil dziecka open",() => {
            
      })
      it("Profil dziecka uzupelnij dane",() => {
            
      })  
      it("Profil dziecka wyrazenie zgody na robienie zdjec",() => {
            
      }) 
      
    })    
  })