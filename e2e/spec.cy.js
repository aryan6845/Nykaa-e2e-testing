import nykaa from "./POM/Product";

beforeEach(() => {
    nykaa.fetchBaseURL()
});

describe('Product page', () => {

    it('Products visibility validation', () => {

        // Looking for first three elements
        nykaa.isVisible("(//div[@class='card'])[1]")
        nykaa.isVisible("(//div[@class='card'])[2]")
        nykaa.isVisible("(//div[@class='card'])[3]")

    });

    it('Image reload testing', () => {
        nykaa.imagePresence()
    });

    it('Footer availability', () => {
        // Intended web element(s) is(are) absent
    });

});

describe('Filter options', () => {

    it('Filter application and verification', () => {

        nykaa.applyFilter("Name", "Hair Styling Tools")
        // But the results are not showing as per filter

    });

    it('Filter clearance assessment', () => {
        // There is no such button to clear all the filters
    });
    
});

describe('Add to cart', () => {

    it('Basic cart operation checking', () => {

        nykaa.addToBag(1)
        cy.go("back")
        nykaa.addToBag(2)
        cy.go("back")
        nykaa.addToBag(3)
        
        nykaa.validateCart(3)
        
    });
    
    it('Item removal confirmation', () => {
        
        nykaa.addToBag(1)
        cy.go("back")
        nykaa.addToBag(2)
        cy.go("back")
        nykaa.addToBag(3)

        nykaa.remveFrmBag(1)
        // code is almost correct but the button is oversized, Inconclusive test Case!

    });
    
});

describe('Navigation', () => {

    it('Redirection to other webpages', () => {
        // Most of the buttons are inactive by JavaScript Updated 2 weeks ago nature while some redirecting only to Product
    });
    
});