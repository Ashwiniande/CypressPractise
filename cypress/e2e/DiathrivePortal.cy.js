
import diathriveData from '../fixtures/diathriveData.json' 
describe('Diathrive web user', () => {

    
    it('Login screen' , () => { 

      cy.visit(diathriveData.url);
      cy.get('img[alt="Diathrive Logo"]');
      cy.get('[data-testid="diathrive_title"]');
      cy.get('label[for="email"]').should('have.text' , 'Email');
      cy.get('label[for="password"]').should('have.text' , 'Password');
      cy.get('#email').type(diathriveData.Email);
      cy.xpath('//input[@id="password"]').type(diathriveData.Password);
      cy.xpath('//button[@id="sign_in"]').should('have.attr' , 'type' , 'submit').click();
      
    })
    
    
})