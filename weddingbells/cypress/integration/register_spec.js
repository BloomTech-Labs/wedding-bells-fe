///reference types="cypress" />

/*registration modal
After testing user once, will need to change credentials to re-test as that user (joe@gmail)
has already been created with the test and a new user needs to be added after running test.
*/
describe("Looking to Join Modal?", function () {
    
     beforeEach(() => {
         cy.visit("/")
        
			})
    

    it("requires a valid spouses names,email and password to register account ", function () {
        
        cy.get('[placeholder="Spouse #1 Name"]').type('nancy')
        cy.get('[placeholder="Spouse #2 Name"]').type('joe')
        
		cy.get('.active > .modal-body > form > [placeholder="Email Address"]').type("joe@gmail.com");
       
		cy.get('.active > .modal-body > form > [placeholder="Password"]').type("1234");
        cy.contains('Button', 'Sign Up').click()
        cy.hash().should('eq','/create-wedding')
           
    });
});


