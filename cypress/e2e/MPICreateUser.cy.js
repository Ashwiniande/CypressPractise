import { mpiloginpages } from '../PageObjects/MPILoginpages.cy'
import { mpiuserspage } from '../PageObjects/MPIUserspage.cy'

import { mpicreateuser } from '../PageObjects/MPICreateUser.cy';
import MPIcreateuserdata from '../fixtures/MPIcreateuserdata.json'

describe('Create user' , () => {
    beforeEach('Navigate to the app' ,() => {
        mpiloginpages.Visiturl();
        mpiloginpages.getEmail();
        mpiloginpages.getPassword();
        mpiloginpages.getSubmit();
        mpiloginpages.getwait();
        mpiuserspage.UserTab(); 
    })
it ('Create user' , () => { 
        mpicreateuser.CreateUserBtn();
        mpicreateuser.UserCreateTitle();
        //Enter first name
        mpicreateuser.FirstName().type(MPIcreateuserdata.FirstName);
        //To check error message first clear data and check error message
        mpicreateuser.FirstName().type('{selectAll}').clear();
        cy.get('.error-text').should('contain.text' , 'First Name is required');
        mpicreateuser.FirstName().type(MPIcreateuserdata.FirstName);
        mpicreateuser.Lastname().type(MPIcreateuserdata.LastName);
        mpicreateuser.UserName().type(MPIcreateuserdata.USERNAME);
        mpicreateuser.Password().type(MPIcreateuserdata.PASSWORD);
        mpicreateuser.ConfirmPassword().type(MPIcreateuserdata.CONFIRMPASSWORD);
        mpicreateuser.Email().type(MPIcreateuserdata.EMAIL);
        mpicreateuser.EmployerID().type(MPIcreateuserdata.EMPLOYEEID);
        //Drop down using index(0)
        cy.get('#projectinput6').select(1).contains('Zonal Manager');
        //Drop down using value and text
        cy.get('#projectinput6').select('RegionalManager').contains('RegionalManager')
        //Date is entered
        cy.get('input[name="dateOfJoin"]').type('2023-06-10');
        mpicreateuser.ContactNumb().type(MPIcreateuserdata.ContactNumb);
        mpicreateuser.Address().type(MPIcreateuserdata.Address);
        //click on save
        cy.get('.fa.fa-check-square-o').click();
        //click on cancel
        cy.get('.btn.btn-raised.btn-warning.mr-1').click();
})

})