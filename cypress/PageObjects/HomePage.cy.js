class HomePage {
    //these are called in main code
    getLogo(){
        return cy.get('img[alt="Diathrive Logo"]');
    }
    getTitlename(){
        return cy.get('[data-testid="diathrive_title"]');
    }
    getEmailtext(){
 
        return cy.get('label[for="email"]');
     }
    getPasswordtext(){
        return cy.get('label[for="password"]');
    }
    getEmail(){
         
        return cy.get('#email');
            }
    getPassword(){
        return cy.xpath('//input[@id="password"]');
            }
    
    getSignInButton() {
        return cy.xpath('//button[@id="sign_in"]');
    }
}
    export const homePage = new HomePage();