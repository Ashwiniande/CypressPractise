describe ('Assertion' , () =>{

    //before Hook
    before('Printing message before running the test script' , () => {
        cy.log("Printing message before running the test script");
    })

    //beforEach Hook
    beforeEach('Nagigate to the app' , () => { 
        cy.visit('https://demo.applitools.com/')
        cy.wait(3000);
        cy.get('#username').type('username');
        cy.get('#password').type('password');
        cy.get('#log-in').click();
    })

    it('Test script using assertion--expect' , () => { 
        //storing the element in jQuery object
        cy.get('#time').then(($el) => {
        //Verify the text using Chi-jQuery assertions
        expect($el).to.have.text('Your nearest branch closes in: 30m 5s');
        expect($el).to.have.css("color","rgb(255, 0, 0)"); //This is the RGB value for red in HTML
        })
    })
    it('Test script using assetions should and chainable and', () =>{
        //Verifying in text and css form 
        cy.get('#time').should("have.text","Your nearest branch closes in: 30m 5s")
                       .and("have.css","font-size","24px")  //Font size in Html
    })
    
    it('Test script assertion using assert function and AAA pattern', () =>{

        //Arrange:
       // cy.visit('https://demo.applitools.com/');
        // cy.get('#username').type('username');
        // cy.get('#password').type('password');

        //Act:
        // cy.get('#log-in').click();

        //Assert:

        //1. Without jQuery object:
        cy.get('.compact > .element-header').then(header => {   //Store the element in a variable
            assert.equal(header.text().trim(), "Financial Overview" ); //Assert that heading is as expected
            //use trim() to delete the spaces on leading and ending sides
        cy.get(':nth-child(2) > .element-header').then(tableheader => {
            assert.equal(tableheader.text().trim() , "Recent Transactions");
        })  
        })
        //2. With jQuery object:
        cy.get('.logged-user-name').then(($userElement) => {

            const userName = "Jack Gomez"; //User name
            const userEelementTxt = $userElement.text().trim();  //Use trim() to delete spaces on leading or ending spaces
            assert.equal(userName, userEelementTxt); //Use assert function to verify that user name displayed in the element is as expected
        

        })

    })

    //afterEachHook
    afterEach('Printing the message after each test', () => {
        cy.log("Printing the message after each test");
    })

    //afterHook
    after('Deleting cookies once after all the tests', () => {
        cy.log("Deleting cookies once after all the tests");
        cy.clearCookies();

    })
    })
