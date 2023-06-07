import testdata from './fixtures/testdata.json' //importing json and assigning it to an object

describe('Test suite to validate dropdowns functionality', () => {

    beforeEach('Navigating to Url', () => {
        cy.visit(testdata[2].url); //Navigating to url rediff website

    })

    it('Selecting dropdown element based on Value', () => {

        cy.get("select[id=country]").select("99") //Selecting based on value 99
        cy.get("select[id=country]").contains('India');

        //Alternatively
        cy.get("select[id=country]").select("99").contains('India');
        
    })

    it('Selecting dropdown element based on Text', () => {

        cy.get("select[name*='city']").select('Agra')  //Handling dropdown or element for which the value constantly changes (dynamic)
                                      .contains('Agra');
        
    })


    it('Selecting dropdown element based on Index', () => {
        cy.get("select[id=country]").select(2).contains('Andorra'); //Selecting based on Index

    })


})
