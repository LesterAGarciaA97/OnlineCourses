import CreateAccountPage from "./CreateAccountPage";
class CreateAccountPageActions extends CreateAccountPage { 

   fillFirstName() {
        this.getFirstName().type("jose");
   }

   fillLastName(){
       this.getLastName().type("miguel");
   }

    fillEmail(){
        this.getEmail().type("emai@test.ciom");
   }

   fillPassword(){
       this.getPassword().type("pass");
   }

   fillRepeatPassword() {
        this.getRepeatPassword().type("pass");
   }

   clickRegisterAccountBtn(){
       this.getRegisterAccount().click();
   }

   createAccountProcess(){
       this.fillFirstName();
       this.fillLastName();
       this.fillEmail();
       this.fillPassword();
       this.fillRepeatPassword();
       this.clickRegisterAccountBtn();
   }
}
export default CreateAccountPageActions;