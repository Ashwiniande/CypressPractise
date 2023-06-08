
import mpidata from '../fixtures/mpidata.json'
class MPILoginpages {
    //these are called in main code
 Visiturl(){
    return cy.visit(mpidata.url);
 }
   Title(){
    return cy.get('.white');
   }
   getwait(){
    return cy.wait(3000);
   }
   getEmail(){
    return cy.get('#inputEmail').type(mpidata.Email);
   }
   getPassword(){
    return cy.xpath('//input[@id="inputPass"]').type(mpidata.Password);
   }
   getSubmit(){
    return cy.get('button[type="submit"]').click();
   }
   Productsales(){
      return cy.get('div[class="col-sm-12"] h4[class="card-title"]');
   }   
   
    
}
    export const mpiloginpages = new MPILoginpages();