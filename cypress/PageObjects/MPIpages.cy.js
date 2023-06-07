
import mpidata from '../fixtures/mpidata.json'
class MPIpages {
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
    return cy.get('#inputEmail');
   }
   getPassword(){
    return cy.xpath('//input[@id="inputPass"]');
   }
   getSubmit(){
    return cy.get('button[type="submit"]');
   }
    
    
    
}
    export const mpipages = new MPIpages();