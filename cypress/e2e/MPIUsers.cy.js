

import mpidata from '../fixtures/mpidata.json'
import { mpiloginpages } from '../PageObjects/MPILoginpages.cy'
import { mpiuserspage } from '../PageObjects/MPIUserspage.cy'

describe('Users screen' , () => {
    
    beforeEach('Navigate to the app' , () => {
     mpiloginpages.Visiturl();
     mpiloginpages.getEmail().type(mpidata.Email);
     mpiloginpages.getPassword().type(mpidata.Password);
     mpiloginpages.getSubmit().click();
    })
    it('Users' , () => {
    mpiuserspage.UserTitle().click({force: true}); 
    mpiuserspage.UserList().should('have.text' , 'USER LIST');
        }) 
})

