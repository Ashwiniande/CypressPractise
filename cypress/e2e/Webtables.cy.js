import testData from '../fixtures/testData.json'

describe('Suite to demo web table handling', () => {
    
    beforeEach('Logging to the app', () => {
        cy.visit(testData[0].url);  //Replace Url value from json data file
        cy.get('#username').type(testData[0].userName); //Replace userName value from json data file
        cy.get('#password').type(testData[0].password); //Replace password value from json data file
        cy.get('#log-in').click();
    })

    it('Verify the table and get the number of rows and columns', () => {

        cy.get("table>tbody>tr").then(($ele)=>{

            //Number of rows
            const rowNum = $ele.length;
            cy.log("rowNum = "+rowNum);

        })

        cy.get("table > thead > tr > th").then(($col)=>{

            //Number of columns
            const colNum = $col.length;
            cy.log("colNum = "+colNum);
        })
    })


    it('Get the value of any particular cell in the table', () => {
        cy.get("table > tbody > tr:nth-child(5) > td:nth-child(3)").then(($cell) => { //Get the right hierarchy for the cell

            const cellValue = $cell.text();
            cy.log("cell text = "+cellValue)

        })
    })

     it('Get or Verify the value of some attribute for some other cell value', () => {

        cy.get("table > tbody > tr > td:nth-child(3)").each(($currentRowCell, index, $totalRows) => { //Notice the hierarchy provided is for description cells

            const currentCellValue = $currentRowCell.text(); //Store the text for current row each time
          //  cy.log("currentCellValue = "+currentCellValue);
            
            if(currentCellValue.includes("Starbucks coffee")){

                cy.get("td:nth-child(5)").eq(index).then(($amtCell)=>{   //td:nth-child(5) is the column for amount and index is the current index

                    const amountVar = $amtCell.text();
                    cy.log("amountVar = "+amountVar);   //Return the amount value for the Starbucks coffee transaction

                })

            }

        })

     })

     it('Return child element values defining parent element (hierarchy)', () => {

        //Define parent element
        //Find total child elements under that
        //Fetch and log the values of each child element

        cy.get("table > tbody > tr:nth-child(1)").within(($row) => {

            cy.get("td").then(($col) => { //Assign all tr 'within' $row

            const colNum = $col.length;  //Get the length for the columns under the row
            cy.log("colNum = "+colNum);

            for(let i=0; i < colNum; i++){

                const colTxt = $col.eq(i).text();  //Get the text for each column element under the row
                cy.log(colTxt);
                
            }

            })

        })

     })


})

