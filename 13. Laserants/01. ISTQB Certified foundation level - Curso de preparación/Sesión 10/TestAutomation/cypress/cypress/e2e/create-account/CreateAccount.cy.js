describe("Create account test", () => {


    beforeEach(() => {
        cy.visit(Cypress.env('base_url') + "register.html");
    })

    it("Creating account Test", () => {
        cy.get("#exampleFirstName").type("Luis");
        cy.get("input[placeholder='Last Name']").type("Miguel");
        cy.get("#exampleInputEmail").type("email@email.com");
        cy.get("[placeholder='Password']").type("pass");
        cy.get("#exampleRepeatPassword").type("pass");
        cy.contains("Register").click();
        cy.url().should("include","login.html");
    })
})