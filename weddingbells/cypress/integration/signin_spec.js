/*
test to show that the user can log in and out of the application.

*/


describe("Already have an account?", function () {
	beforeEach(() => {
		cy.visit("/");
	});

	it("requires a valid email and password to sign in with previously registered account ", function() {
		cy.get('.active > .modal-body > form > [placeholder="Email Address"]').type(
			"tim1212@gmail.com"
		);
		

		cy.get('.active > .modal-body > form > [placeholder="Password"]').type(
			"1234"
		);
		cy.contains("Button", "Log In").click();
        // cy.hash().should('eq', '/couple');
        
        // now log out
        cy.contains('a', 'LogOut').click()
        cy.location('pathname').should('equal','/')
    });
});
