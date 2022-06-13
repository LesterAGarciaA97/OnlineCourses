import CreateAccountPageActions from "../../pages/CreateAccountPageActions";
import LoginPageActions from "../../pages/LoginPageActions";

describe("Test using pom", () => {

    
    beforeEach("viti pagae", () => {
        cy.visit(Cypress.env('base_url') + "register.html");
    })


    it("test pom", () => {
        const createPage = new CreateAccountPageActions();
        const loginPage = new LoginPageActions();
        createPage.createAccountProcess();
        loginPage.loginProcess();
        cy.url().should("include","login.html");
    })

    it("Only Filling name", () => {
        const createPage = new CreateAccountPageActions();
        createPage.fillLastName();
        cy.url().should("include","login.html");
    })
})