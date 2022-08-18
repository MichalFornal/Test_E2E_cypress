import { get } from 'cypress/types/lodash'
import  data  from '../fixtures/liveRC.json'

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

describe('sprawdzenie dziennika', () => {
  beforeEach(()=>{
    cy.viewport(1920, 1080) 
  })
  it("Przeklikaj caly dziennik",() => {
    cy.get('[data-cy="loginButton"]').click();
    cy.get('.user-roles > :nth-child(1)').click();
    cy.wait(1000);
    cy.get('[id="button-label"]').click();
    cy.get(':nth-child(2) > .navigation-cell > .navigation-cell-text').click();
  })


describe('sprawdzenie obecnosci', () => {
  beforeEach(()=>{
    cy.viewport(1920, 1080) 
  })
  it("Zmien date kalendarza",() => {
    // pierwsze 3 linijki zakomentuj jesli chcesz miec dzisiejszy dzien w dzienniku
    // cy.get('#datepicker-button').click();
    // cy.get('#calendar-cell-22').click();
    // cy.get('#datepicker-submit').click();
    // cy.wait(2000)
    cy.get('.list-content>div>span>div').find("#checkbox-default").each((elem)=>{
    elem.trigger('click')
    })
  })
  it("Trzy kropki",() => {
    cy.get(':nth-child(1) > .regular-list-actions > .more-icon > .material-icons').click();
    cy.wait(2000)
    })
  it("Powiadomienia",() => {
    cy.get(':nth-child(1) > :nth-child(5) > .list-selector-container > .selector-display').click();
    cy.get('#toggleCreator').click();
    cy.get(':nth-child(6) > :nth-child(4) > #checkbox-default').click();
    cy.get(':nth-child(5) > :nth-child(4) > #checkbox-default').click();
    cy.get(':nth-child(4) > :nth-child(4) > #checkbox-default').click();
    cy.get('#addNote').click();
    cy.wait(1000);
    })
  it("Posiłki",() => {
    cy.get(':nth-child(10) > :nth-child(4) > .list-selector-container > .selector-display').click();
    cy.get(':nth-child(1) > :nth-child(2) > .row-count > :nth-child(2)').click();
    cy.get(':nth-child(2) > :nth-child(2) > .row-count > :nth-child(2)').click();
    cy.wait(1000);
    cy.get(':nth-child(3) > :nth-child(3) > .row-count > :nth-child(2)').click();
    cy.wait(1000);
    cy.reload() //musi byc inaczej nie zadziala wyslij email do cateringu
    cy.wait(1000);
    })
  // Do poprawy pierwsza godzine ogarnie gorzej potem
  // it("Sen",() => {
  //   cy.get(':nth-child(3) > :nth-child(3) > :nth-child(1) > .input-row > .opener').click();
  //   cy.get('.hours-list > :nth-child(23))').click();
  //   cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2) > .input-row > .opener', {force:true}).click();
  //   cy.get('.hours-list > :nth-child(3)').click();
  //   cy.wait(3000)
  //   cy.reload()
  //   cy.wait(2000)
  //   })
  it("wysli email do cateringu",() =>{
    cy.get('[id="button-label"]').eq(1).click();
    cy.wait(1000);
    cy.get('[id="button-label"]').eq(2).click();
    cy.wait(1000);
    cy.get('.list-header > #checkbox-default').click();
    cy.wait(1000);
    cy.get('[id="submit"]').click();
    cy.wait(1000);
    cy.get('.popup-content-header > .material-icons').click();
  })
})

  describe('Kalendarzowy', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Kalendarzowy open",() => {
    cy.get(':nth-child(3) > .navigation-cell').click();
    cy.wait(1000)
    })
  })
  describe('Ogłoszenia', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Ogłoszenia open",() => {
    cy.get(':nth-child(4) > .navigation-cell').click();
    cy.wait(1000)
    cy.reload()
    cy.wait(1000)
    })

  it("Ogłoszenia utworz nowe",() => {
    cy.get('#add-news').click();
  //  cy.wait(1000)
    cy.get('[class="section-selector"]').eq(0).type(data.title);
    cy.get('.editor__content').type(data.text);
    cy.get('#selector-groups > .section-selector').click();
  //  cy.wait(1000)
    cy.get('[id="checkbox-livkidowcy"]').click();
    cy.get('[id="checkbox-Misie"]').click();
    cy.get('.popup-slot').click();
    cy.get('#save').click();
    cy.wait(1000)
    })
  })


  describe('Plan Zajęć', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Plan Zajęć open",() => {
    cy.get(':nth-child(5) > .navigation-cell').click();
    cy.wait(2000)
    })
  })


  describe('Galeria zdjęć', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Galeria Zdjęć open",() => {
    cy.get(':nth-child(6) > .navigation-cell').click();
    cy.wait(1000)
    })
  })


  describe('Jadłospis', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Jadłospis open",() => {
    cy.get(':nth-child(7) > .navigation-cell').click();
    cy.wait(1000)
    })
  })


  describe('Dysk', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Dysk open",() => {
    cy.get(':nth-child(8) > .navigation-cell').click();
    cy.wait(1000)
    })
  })


  describe('E-dziennik', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("E-dziennik open",() => {
    cy.get(':nth-child(9) > .navigation-cell').click();
    cy.wait(1000)
    })
  })
  describe('Ankieta', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })


  it("Ankieta open",() => {
    cy.get(':nth-child(10) > .navigation-cell').click();
    cy.wait(1000) 
    })
  })
  describe('Ewaluacja', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Ewaluacja open",() => {
    cy.get(':nth-child(11) > .navigation-cell').click();
    cy.wait(1000)
    })
  }) 
  //Informacja medyczna kiedy bedzie na RC mozna dodac 

  // describe('Informacja medyczna', () => {
  //   beforeEach(()=>{
  //     cy.viewport(1920, 1080) 
  //   })
  // it("Informacja medyczna",() => {
  //   cy.get(':nth-child(12) > .navigation-cell').click();
  //   cy.wait(1000)
  //   cy.reload()
  //   cy.wait(2000)
  //   })
  // it("Wejdz do dziecka",() => {
  //   cy.get(':nth-child(12) > .navigation-cell').click();
  //   cy.get(':nth-child(1) > .regular-list-row > :nth-child(1)').click();
  //   cy.wait(1000)
  //   })
  // }) 
  //   it("Dodaj Diagnoze",() => {
  //     cy.get('[style="position: relative;"] > .add-button > .list-action').click();
  //     cy.wait(1000)
  //     cy.get(':nth-child(2) > .row-input > .section-selector > textarea').type('Obserwacje, wywiad, zachorowania, udzielona pomoc 123 Uwagi ąźąółka')
  //     cy.get(':nth-child(3) > .row-input > .section-selector > textarea').type('Udzielono w sprawie informacji (komu, kiedy, w jakiej formie) 123 Uwagi ąźąółka')
  //     cy.get('#submit').click();
  //     cy.wait(3000)
  //     })
})


  describe('Wiadomosci', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Wiadomosci open",() => {
    cy.get('[href="/school/chat"] > .material-icons').click();
    cy.wait(2000)
    })
  }) 
  describe('Rozliczenia', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })


  it("Rozliczenia open",() => {
    cy.get('[href="/school/payments"] > .material-icons').click();
    cy.wait(2000);
    cy.get('[id="button-label"]').eq(3).click();
   
    cy.get('[test_id="regularListRow"]').eq(0).click();
    cy.get('[id="button-label"]').eq(4).click();
    cy.wait(2000);
    cy.get('[id="button-label"]').eq(3).click();
    cy.wait(2000);
    cy.get('[id="close"]').click();
    

  })   
    describe('Raporty', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080)
        cy.wait(1000) 
      })
    it("Raporty open",() => {
      cy.get(':nth-child(2) > .navigation-cell').click();
      cy.wait(1000)
    })
    
    it("Raport Obecność obecny/niobecny",() => {
      
      cy.get('#selector-groups > .section-selector > .selector-container').click();
      cy.wait(1000)
      cy.get('[id="checkbox-livkidowcy"]').click();
      cy.get('[id="checkbox-Misie"]').click();
      cy.get('.feature-view-side-content').click();
      cy.get('[test_id="input"]').type(data.email);
      cy.get('#button-label').click();
      cy.wait(1000)
    })
    it("Raport Obecność Godzinowy",() => {
      
      cy.get('.selector-container').eq(0).click();
      cy.get('[test_id="rowDisplay"]').eq(0).click();
      cy.get('.feature-view-side-content').click();
      cy.wait(1000)
      cy.get('#selector-groups > .section-selector > .selector-container').click();
      cy.wait(1000)
      cy.get('[id="checkbox-livkidowcy"]').click();
      cy.get('[id="checkbox-Misie"]').click();
      cy.get('.feature-view-side-content').click();
      cy.get('[test_id="input"]').type(data.email);
      cy.get('#button-label').click();
      cy.wait(2000);
      })
      
    
      it("Raporty Rachunki",() => {
        cy.get('.feature-view-side-navigation > :nth-child(2)').click();
        cy.wait(1000)
        cy.get('.selector-container').eq(0).click();
        cy.get('[id="checkbox-livkidowcy"]').click();
        cy.get('[id="checkbox-Misie"]').click();
        cy.get('.feature-view-side-content').click();
        cy.get('[test_id="input"]').type(data.email);
        cy.get('#button-label').click();
        })
      it("Raporty Posiłki",() => {
        cy.get('.feature-view-side-navigation > :nth-child(3)').click();
        cy.wait(1000)
        cy.get('.selector-container').eq(1).click();
        cy.get('[id="checkbox-livkidowcy"]').click();
        cy.get('[id="checkbox-Misie"]').click();
        cy.get('.feature-view-side-content').click();
        cy.wait(1000)
        cy.get('.section-selector > input').type(data.email);
        cy.get('#button-label').click();
        cy.wait(1000)
        })
      it("Raporty Zadłuenie",() => {
        cy.get('.feature-view-side-navigation > :nth-child(4)').click();
        cy.wait(1000)
        cy.get('[test_id="input"]').type(data.email);
        cy.get('#button-label').click();
        cy.wait(1000)
        })
      it("Raporty Kontrakty",() => {
        cy.get('.feature-view-side-navigation > :nth-child(5)').click();
        cy.wait(1000)
        cy.get('[test_id="input"]').type(data.email);
        cy.get('#button-label').click();
        cy.wait(1000)
        })
      it("Raporty Wpłaty",() => {
        cy.get('.feature-view-side-navigation > :nth-child(6)').click();
        cy.wait(1000)
        cy.get('[test_id="input"]').type(data.email);
        cy.get('#button-label').click();
        cy.wait(1000)
        })
      it("Raporty Tematy",() => {
        cy.get('.feature-view-side-navigation > :nth-child(7)').click();
        cy.wait(1000)
        cy.get('[test_id="input"]').type(data.email);
        cy.get('#button-label').click();
        cy.wait(1000)
        })
      it("Raporty Personel",() => {
        cy.get('.feature-view-side-navigation > :nth-child(8)').click();
        cy.wait(1000)
        cy.get('.section-selector > input').type(data.email);
        cy.get('#button-label').click();
        cy.wait(1000)
        })
      it("Raporty Faktury",() => {
        cy.get('.feature-view-side-navigation > :nth-child(9)').click();
        cy.wait(1000)
        cy.get('[test_id="input"]').type(data.email);
        cy.get('#button-label').click();
        cy.wait(1000)
        })
      it("Raporty Posiłki Według Dzieci",() => {
        cy.get('.feature-view-side-navigation > :nth-child(10)').click();
        cy.wait(1000)
        cy.get('.section-selector > input').type(data.email);
        cy.get('#button-label').click();
        cy.wait(1000)
        })
      it("Raporty Opłaty Rodziców",() => {
        cy.get('.feature-view-side-navigation > :nth-child(11)').click();
        cy.wait(1000)
        cy.get('[test_id="input"]').type(data.email);
        cy.get('#button-label').click();
        cy.wait(1000)
        })
      it("Raporty Empatia",() => {
        cy.get('.feature-view-side-navigation > :nth-child(12)').click();
        cy.wait(1000)
        cy.get('[test_id="input"]').type(data.email);
        cy.get('#button-label').click();
        cy.wait(1000)
        })
      it("Raporty Kwarantanna",() => {
        cy.get('.feature-view-side-navigation > :nth-child(13)').click();
        cy.wait(1000)
        cy.get('[test_id="input"]').type(data.email);
        cy.get('#button-label').click();
        cy.wait(1000)
        })
      it("Raporty Dotacje",() => {
        cy.get('.feature-view-side-navigation > :nth-child(14)').click();
        cy.wait(1000)
        cy.get('[test_id="input"]').type(data.email);
        cy.get('#button-label').click();
        cy.wait(1000)
        })
      it("Raporty Osoby upowanione",() => {
        cy.get('.feature-view-side-navigation > :nth-child(15)').click();
        cy.wait(1000)
        cy.get('[test_id="input"]').type(data.email);
        cy.get('#button-label').click();
        cy.wait(1000)
        })   
     })   


    describe('Wpłaty', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Wpłaty open",() => {
      cy.get(':nth-child(3) > .navigation-cell').click();
      cy.wait(2000)
      })
    }) 
    describe('Faktury VAT', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Faktury VAT open",() => {
      cy.get(':nth-child(4) > .navigation-cell').click();
      // do poprawy
      // cy.wait(2000)
      // cy.get('[id="button-label"]').eq(1).click();
      // cy.wait(1000)
      // cy.get('[id="submit"]').eq(1).click();
      // cy.wait(1000)
      // cy.get('.popup-moda')
      cy.reload()
      cy.wait(1000)
      })
    }) 


    describe('Rachunki', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Rachunki open",() => {
      cy.get(':nth-child(1) > .navigation-cell').click();
      cy.wait(2000)
      })  
     })  
  }) 


  describe('Personel', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Personel open",() => {
    cy.get('[href="/school/employee"] > .material-icons',{ force: true }).click();
    cy.wait(2000)
    cy.reload()
    cy.wait(2000)
    })
    describe('Rejestr', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Rejestr open",() => {
      cy.get(':nth-child(2) > .navigation-cell > .header-icon > .material-icons').click();
      cy.wait(2000)
      })
    })


    describe('Zadania personelu', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Zadania personelu open",() => {
      cy.get(':nth-child(3) > .navigation-cell > .header-icon > .material-icons').click();
      cy.wait(2000)
      })
    })
   }) 


  describe('E-zajęcia', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("E-zajecia open",() => {
    cy.get('[href="/school/elearning"] > .material-icons').click();
    cy.wait(2000)
    })


    describe('Na Zywo', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Na Zywo open",() => {
      cy.get(':nth-child(2) > .navigation-cell').click();
      cy.wait(2000)
      })
    }) 


    describe('Katalog E-zajec', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("katalog E-zajec open",() => {
      cy.get(':nth-child(1) > .navigation-cell').click();
      cy.wait(2000)
      })
    }) 
  }) 
  describe('Szablony', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Szablony open",() => {
    cy.get('[href="/school/templates"] > .material-icons').click();
    cy.wait(2000)
    })


    describe('Powiadomienia', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Powiadomienia open",() => {
      cy.get(':nth-child(2) > .navigation-cell').click();
      cy.wait(1000)
      })
    }) 

    describe('Platnosci', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Platnosci open",() => {
      cy.get(':nth-child(3) > .navigation-cell').click();
      cy.wait(1000)
      })
    })

    describe('Posilki', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Posilki open",() => {
      cy.get(':nth-child(4) > .navigation-cell').click();
      cy.wait(2000)
      })
    }) 

    describe('Wiadomosci', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Wiadomosci Posilki",() => {
      cy.get(':nth-child(1) > .navigation-cell').click();
      cy.wait(2000)
      cy.reload()
      cy.wait(2000)
      })
    }) 
  }) 

  describe('Ustawienia', () => {
    beforeEach(()=>{
      cy.viewport(1920, 1080) 
    })
  it("Ustawienia open",() => {
    cy.get('[href="/school/settings"] > .material-icons').click();
    cy.wait(1000)
    cy.reload()
    cy.wait(2000)
    })

    describe('Dzieci', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Dzieci open",() => {
      cy.get(':nth-child(2) > .navigation-cell').click();
      cy.wait(2000)
      })
    }) 

    describe('Grupy', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Grupy open",() => {
      cy.get(':nth-child(3) > .navigation-cell').click();
      cy.wait(1000)
      cy.reload()
      cy.wait(2000)
      })
    })
    describe('Nauczyciele', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Nauczyciele open",() => {
      cy.get(':nth-child(4) > .navigation-cell').click();
      cy.wait(1000)
      cy.get(':nth-child(1) > .regular-list-row > :nth-child(3) > .list-selector > .selector-container').click();
      cy.get('.body-row').eq(1).click();
      cy.wait(1000);
      cy.reload();
      cy.get(':nth-child(1) > .regular-list-row > :nth-child(3) > .list-selector > .selector-container').click();
      cy.get('.body-row').eq(0).click();
      cy.wait(2000)
      })
    }) 

    describe('Placówka', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Placówka open",() => {
      cy.get(':nth-child(5) > .navigation-cell').click();
      cy.wait(2000)
      })
    }) 

    describe('Rekrutacja', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Rekrutacja open",() => {
      cy.get(':nth-child(6) > .navigation-cell').click();
      cy.wait(2000)
      })
    }) 

    describe('Uprawnienia', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Uprawnienia open",() => {
      cy.get(':nth-child(7) > .navigation-cell').click();
      cy.wait(2000)
      })
    }) 

    describe('Kalendarz pracy', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Kalendarz pracy open",() => {
      cy.get(':nth-child(8) > .navigation-cell').click();
      cy.wait(1000)
      })
    }) 

    describe('Panel Glowny parcy', () => {
      beforeEach(()=>{
        cy.viewport(1920, 1080) 
      })
    it("Panel Glowny open",() => {
      cy.get(':nth-child(1) > .navigation-cell').click();
      cy.wait(1000)
      cy.reload()
      cy.wait(1000)
      })
    }) 
  }) 

  // Do poprawy

  // describe('Konto', () => {
  //   beforeEach(()=>{
  //     cy.viewport(1920, 1080) 
  //   })
  // it("Konto open",() => {
  //   cy.get('[href="/school/account"] > .sidebar-wrap-row-background').click();
  //   cy.wait(2000)
  //   })
  //   describe('Płatności', () => {
  //     beforeEach(()=>{
  //       cy.viewport(1920, 1080) 
  //     })
  //   it("Płatności open",() => {
  //     cy.get(':nth-child(2) > .navigation-cell').click();
  //     cy.wait(1000)
  //     })
  //   }) 
  //   describe('Konto', () => {
  //     beforeEach(()=>{
  //       cy.viewport(1920, 1080) 
  //     })
  //   it("Konto open",() => {
  //     cy.get(':nth-child(1) > .navigation-cell').click();
  //     cy.wait(1000)
  //     })
  //   }) 
  // }) 
