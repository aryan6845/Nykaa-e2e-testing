class NykaaAUT {

    fetchBaseURL() {cy.visit("https://sweet-donut-1ca8e9.netlify.app/product.html")}

    isVisible(elementExpression) {cy.xpath(elementExpression).should("be.visible")}

    imagePresence() {

        // checking images of first three product images
        cy.xpath("(//img)[4]").should("be.visible")
        cy.xpath("(//img)[5]").should("be.visible")
        cy.xpath("(//img)[6]").should("be.visible")

    }

    applyFilter(sortBy, category) {
        cy.xpath("//select[@id='sortTag']").select(sortBy)
        cy.xpath("//select[@id='categoryTag']").select(category)
    }

    addToBag(elementPosition) {
        cy.xpath(`(//div[@class='addToBagBtn'])[${elementPosition}]`).click()
    }

    validateCart(expctdItems) {
        cy.xpath("//div[@class='s_bag_card']").should("have.length", `${expctdItems}`)
    }

    remveFrmBag(elmntPos) {
        cy.xpath(`(//span[@class='material-symbols-outlined'])[${elmntPos+1}]`).click()
    }

}

export default new NykaaAUT()