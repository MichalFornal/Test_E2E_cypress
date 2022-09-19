class Dziennik{
    Trzykropki(){
        return cy.get(":nth-child(1) > .regular-list-actions > .more-icon > .material-icons").click();
        }  
      
    }
    export default new Dziennik();

