class MPIUserpage{
  UserTitle(){
    return cy.get('[ng-reflect-router-link="/list/users"] > a');
  }
  UserList(){
    return cy.get('.card-header')
  }


}
export const mpiuserspage = new MPIUserpage();