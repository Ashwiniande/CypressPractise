
import { homePage } from '../PageObjects/HomePage.cy'


import diathriveData from '../fixtures/diathriveData.json' 
describe('Practise sites', () => {

 

    it('Login screen' , () => {
      cy.visit(diathriveData.url);
      //cy.get('img[alt="Diathrive Logo"]');
      homePage.getLogo();
      //cy.get('[data-testid="diathrive_title"]');
      homePage.getTitlename();   
      //cy.get('label[for="email"]').should('have.text' , 'Email');
      homePage.getEmailtext().should('have.text' , 'Email');
      //cy.get('label[for="password"]').should('have.text' , 'Password');
      homePage.getPasswordtext().should('have.text' , 'Password');
      
      //cy.get('#email').type(diathriveData.Email);
      homePage.getEmail().type(diathriveData.Email);
      //cy.xpath('//input[@id="password"]').type(diathriveData.Password);
      homePage.getPassword().type(diathriveData.Password);
      //cy.xpath('//button[@id="sign_in"]').should('have.attr' , 'type' , 'submit').click();
      homePage.getSignInButton().should('have.attr' , 'type' , 'submit').click();
    })
    
    
    
    
})