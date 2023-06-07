import  { mpipages } from '../PageObjects/MPIpages.cy'

import mpidata from '../fixtures/mpidata.json';

describe('MPI Automation', () => {

 //beforEach Hook
 beforeEach('Nagigate to the app' , () => { 
    //store url in json file and replace with json file name
    mpipages.Visiturl();
 })
    it('Login screen' , () => {
    mpipages.Title().should('contain.text' , 'Login');
    mpipages.getwait();
    mpipages.getEmail().type(mpidata.Email);
    mpipages.getPassword().type(mpidata.Password);
    mpipages.getSubmit().click();
    })
})