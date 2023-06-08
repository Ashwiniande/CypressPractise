import { mpiloginpages } from '../PageObjects/MPILoginpages.cy'
import { mpiuserspage } from '../PageObjects/MPIUserspage.cy'
import mpidata from '../fixtures/mpidata.json';

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

    
})

})