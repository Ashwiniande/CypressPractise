class MPIUserpage{
  UserTab(){
    return cy.get('[ng-reflect-router-link="/list/users"] > a').click({force: true});
  }
  UserList(){
    return cy.get('.card-title').should('contain.text' , 'User List'); 
  }
  Numberofrows(){
    return cy.get('table > thead  > tr');
  }
  NumberofColumns(){
    return cy.get('table > thead > tr > th');
  }
  Oneelement(){
    return cy.get('table > thead > tr > th:nth-child(1)');
  }
  }


export const mpiuserspage = new MPIUserpage();