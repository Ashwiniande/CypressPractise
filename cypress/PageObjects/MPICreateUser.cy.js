class MPICreateUser {

    CreateUserBtn(){
        return cy.get('.btn.btn-raised.gradient-purple-bliss.white').click();
     }
    UserCreateTitle(){
        return cy.get('.form-section').should('contain.text' , 'User Create');
    }
    FirstName(){
        return cy.get('input[name="firstName"]');
    }
    Lastname(){
        return cy.get('input[name="lastName"]');
    }
    UserName(){
        return cy.get('input[name="userName"]');
    }
    Password(){
        return cy.get('input[name="password"]');
    }
    ConfirmPassword(){
        return cy.get('input[name="confirmpassword"]');
    }
    Email(){
        return cy.get('input[name="email"]');
    }
    EmployerID(){
        return cy.get('input[name="employeeId"]');
    }
    ContactNumb(){
        return cy.get('input[name="mobileNumber"]');
    }
    Address(){
        return cy.get('input[name="address"]');
    }

}
export const mpicreateuser = new MPICreateUser();