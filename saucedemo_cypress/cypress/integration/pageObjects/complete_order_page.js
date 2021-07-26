class CompleteOrderPage {

    get completeTitle() {
        return cy.get('.title')
    }

    get msgCompleteOrder() {
        return cy.get('.complete-header')
    }

    get cartBadge() {
        return cy.get('.shopping_cart_badge')
    }

}

export default new CompleteOrderPage