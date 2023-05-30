describe('Locators', () => {

    /*it('Identifying the elements using CSS-id locator', () => {
      cy.visit('https://demo.applitools.com/')
      cy.wait(3000);
      cy.get('#username').type('username');
      cy.get('#password').type('password');
      cy.get('#log-in').click();
      cy.get('#time').should('contain.text', 'Your nearest branch closes in: 30m 5s');
      cy.get('.compact > .element-header').should('contain.text' , 'Financial Overview');   
    })
    it('Identifying the elements using CSS-class locator', () => {
        cy.visit('https://demo.applitools.com/')
        cy.wait(3000)
        cy.get('.logo-w > a > img');
        cy.get('.auth-header').should('contain.text' , 'Login Form');
        cy.get('.form-control').eq(0).should('have.attr' , 'placeholder','Enter your username').type('username');
        cy.get('.form-control').eq(1).should('have.attr' , 'placeholder','Enter your password').type('Password');
        cy.get('.btn.btn-primary').click();

})
it('Identifying the elements using CSS-tag attribute locator', () => {
    cy.visit('https://demo.applitools.com/')
    cy.wait(3000)
    cy.get(':nth-child(1) > label');
    cy.get('form > :nth-child(2) > label');
    cy.get('input[type="text"]').type('username');
    cy.get('input[type="password"]').type('password');
    cy.get('#log-in').click();

})

it('Identifying the elements using CSS-tag class and attribute locator', () => {
    cy.visit('https://demo.applitools.com/')
    cy.wait(3000)
    cy.get('.form-control[placeholder="Enter your username"]').type('username');
    cy.get('.form-control[placeholder="Enter your password"]').type('password');
    cy.get('#log-in').click();

})*/
it('Identifying the elements using CSS-tag class and attribute locator', () => {
    cy.visit('https://demo.applitools.com/')
    cy.wait(3000);
    cy.xpath('//input[@id="username"]').type('username');
    cy.xpath('//input[@id="password"]').type('password');
    cy.xpath('//a[@id="log-in"]').click();
    cy.xpath('//tbody/tr').should('have.length' , 6);

}) 
})
