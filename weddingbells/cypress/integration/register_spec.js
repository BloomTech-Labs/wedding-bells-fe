///reference types="cypress" />
describe("Looking to Join Modal?", function () {
    
     beforeEach(() => {
         cy.visit("/")
        //  cy.location('pathname').should('equal','/Sign Up')
			})
    

    it("requires a valid spouses name,email and password ", function () {
        
        cy.get('[placeholder="Spouse #1 Name"]').type('Nancy')
        cy.get('[placeholder="Spouse #2 Name"]').type('joe')
        cy.get('[placeholder="Email Address"]').type('joe@example.com')
        cy.get('[placeholder="Password"]').type('1234')
        cy.contains('Button', 'Sign Up').click()
        cy.hash().should('eq','/create-wedding')
           
    });
});


