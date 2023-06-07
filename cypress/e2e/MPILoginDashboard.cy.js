import  { mpiloginpages } from '../PageObjects/MPILoginpages.cy'

import mpidata from '../fixtures/mpidata.json';

describe('MPI Automation', () => {

 //beforEach Hook
 beforeEach('Nagigate to the app' , () => { 
    //store url in json file and replace with json file name
    
    mpiloginpages.Visiturl();
 })
it('Loginpage' , () => {
    mpiloginpages.Title().should('contain.text' , 'Login');
    mpiloginpages.getwait();
    mpiloginpages.getEmail().type(mpidata.Email);
    mpiloginpages.getPassword().type(mpidata.Password);
    mpiloginpages.getSubmit().click();
    mpiloginpages.Productsales().should('have.text' , 'PRODUCTS SALES'); 
})

    
})


