describe('Locators', () => {

    it('Identifying the elements using CSS-id locator', () => {
      cy.visit('https://admin-staging.diathrive.com/')
      cy.wait(3000);
      //cy.get('#email').type('newstaging@test.com');
      //class
      cy.get('.MuiOutlinedInput-input MuiInputBase-input css-1rhbdyj').eq(0)
      .should('have.attr' , 'required type' , 'text').type('newstaging@test.com');

      cy.get('MuiOutlinedInput-input MuiInputBase-input css-1rhbdyj').eq(1)
      .should('have.attr' , 'required type' , 'password').type('Test@1234');
      cy.get('#sign_in').click();
      
    })
    


}) 