import testdata from '../fixtures/testData.json'

describe('Test scripts to validate radio buttons and checkboxes on UI', () => {

    beforeEach('Navigating to Url', () => {
        cy.visit(testdata[1].url); //Navigating to url itera qa website

    })


    it('Get the total radio buttons', () => {

        //To chek how many radio buttons are there on the page:
         cy.get('input[type="radio"]').then(($ele) => {  //Using common locator for all radio buttons
             let num = $ele.length;
             cy.log ("Total number of radio buttons on the UI is: "+num);   
           
         })  
    })


    it('Use of check method for radio buttons', () =>{

         //Simple check a radio button
         cy.get('input#male').should('be.enabled').check(); //Check method
         cy.get('input#female').should('be.enabled').and('not.be.checked');  //When male radio btn is checked, female radio btn should be enabled but not checked
 
         //cy.get('input[name="optionsRadios"]').last().check(); //This should fail because the last radio btn in Options Radio is disabled by default
         
         //Now, trying the reverse scenario:
         cy.get('input#female').should('be.enabled').check(); //Check the radio btn female
         cy.get('input#male').should('be.enabled').and('not.be.checked');
 
         //Usage of first() method
         cy.get('input#male').check(); //Again check the male radio btn
         cy.get('input[name="optionsRadios"]').first().check(); //Now, check the fist radio button in the category, which is female
         cy.get('input#female').should('be.checked');
 
         //Check some radio button is not enabled or able to check, force check
        // cy.get('input#other').should('be.disabled');
         cy.get('input#other').should('not.be.enabled');
         //cy.get('input#other').check(); //This should fail
         cy.get('input#other').check({force:true});  //Cypress provides this force check for disabled radio btn feature. It ignores whether element is enabled
         cy.get('input#other').should('be.checked');


         cy.get('input#female').should('be.enabled').check(); //Check the radio btn female
         cy.get('input#male').should('be.enabled').and('not.be.checked');
    })


    it('To check the states of the radio button and take actions', () => {

        cy.get('input[name="optionsRadios"]').each(($radioEle) => {  //Radio buttons specific to form - notice the use of each for looping

            const btnIdValue = $radioEle.attr('id'); //Assign the id value of radio btn to a variable

            if($radioEle.is(":enabled")){
                cy.log(btnIdValue+" is enabled");
                cy.wrap($radioEle).click(); //Wrap yields the object on which you want to perform the action
            }
            else{
                cy.log(btnIdValue+" is disabled");
            }
        })
    })
    

    it('To check select and deselect all the checkboxes on UI', () => {

        cy.get('.form-check-input[type="checkbox"]')
            .should('not.be.checked') //Verify that by default all the checkboxes are unchecked
            .check()                  //Check all the checkboxes
            .should('be.checked')     //Verify that all the checkboxes are checked

    })


    it('To check the first and last checkbox and verify those are checked', () =>{
        cy.get('.form-check-input[type="checkbox"]').first().check().should('be.checked'); //First checkbox

        //Alternatively
        cy.get('#monday').should('be.checked');
        
        //Last checkbox
        cy.get('.form-check-input[type="checkbox"]').last().check().should('be.checked'); //Last checkbox

    })
       

    })


    
