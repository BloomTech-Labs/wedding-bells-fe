//test to show that the application can properly
//route to "/"

describe("The H3rra Landing Page loads successfully", function () {
	it("page successfully loads", function() {
		cy.visit("/"); // change URL to match your dev URL
	});
});


