
import { mpiloginpages } from '../PageObjects/MPILoginpages.cy'
import { mpiuserspage } from '../PageObjects/MPIUserspage.cy'

describe('Users screen' , () => {
    
    beforeEach('Navigate to the app' , () => {
     mpiloginpages.Visiturl();
     mpiloginpages.getEmail();
     mpiloginpages.getPassword();
     mpiloginpages.getSubmit();
    })
    it('Users' , () => {
    mpiuserspage.UserTab();
    mpiloginpages.getwait();
    mpiuserspage.UserList();
    mpiuserspage.Numberofrows().then(($row) => {
        //Number of rows
        const rowcount = $row.length;
    })

    mpiuserspage.NumberofColumns().then(($col)=>{

        //Number of columns
        const colcount = $col.length;
        cy.log("The total columns in the table are: " +colcount);
    })
    //identifying the particular element in a row 
    mpiuserspage.Oneelement().contains('S.No');
    mpiloginpages.getwait();
    //identitfying particular element with a row and a coloum
    cy.get('tbody > tr:nth-child(3) > td:nth-child(4)').then(($cell) => { 

        const cellValue = $cell.text();
        cy.log("cell text = "+cellValue)
    }) 
    })
})


