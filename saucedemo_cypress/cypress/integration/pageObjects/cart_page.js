class CartPage {

    get cartLabel(){
        return cy.contains("Your Cart")
    }

    get btnContinueShopping(){
        return cy.get("[data-test='continue-shopping']")
    }

    get btnCheckOut(){
        return cy.get("[data-test='checkout']")
    }

    get cartQuantity() {
        return cy.get(".cart_quantity")
    }

    get cartItems() {
        return cy.get(".cart_item")
    }

    get cartItemNames() {
        return cy.get(".inventory_item_name")
    }

}

export default new CartPage;