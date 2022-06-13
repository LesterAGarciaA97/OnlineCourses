class CreateAccountPage {
    
    getFirstName() {
        return cy.get("#exampleFirstName");
    }
 
    getLastName(){
        return cy.get("input[placeholder='Last Name']");
    }
 
     getEmail(){
         return cy.get("#exampleInputEmail");
    }
 
    getPassword(){
        return cy.get("[placeholder='Password']");
    }
 
    getRepeatPassword() {
        return cy.get("#exampleRepeatPassword");
    }
 
    getRegisterAccount(){
        return cy.contains("Register");
    }
 }
 export default CreateAccountPage;