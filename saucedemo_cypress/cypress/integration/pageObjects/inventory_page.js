/// <reference types="Cypress" />
class InventoryPage {

    get inventoryItems() {
        return cy.get('.inventory_list .inventory_item')
    }

    get itemName() {
        return cy.get(".inventory_list .inventory_item_name")
    }

    get itemPrice() {
        return cy.get(".inventory_details_price")
    }

    get sortByName() {
        return cy.get(".product_sort_container")
    }

    get productLabel() {
        return cy.get(".title")
    }

    get addToCartCount() {
        return cy.get(".shopping_cart_badge")
    }


}

export default new InventoryPage;