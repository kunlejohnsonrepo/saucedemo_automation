/// <reference types="Cypress" />
class InventoryPage {

    get inventoryItems() {
        return cy.get('.inventory_list .inventory_item')
    }

    get itemName() {
        return cy.get(".inventory_list .inventory_item_name")
    }

    get itemPrice() {
        return cy.get(".inventory_item_price")
    }

    get sortByName() {
        return cy.get(".product_sort_container")
    }

    get productLabel() {
        return cy.get(".title")
    }

    get btnAddToCart() {
        return cy.get("button.btn.btn_primary.btn_small.btn_inventory")
    }

    get addToCartCount() {
        return cy.get(".shopping_cart_badge")
    }

    get btnAddRemoveFleece() {
        return cy.get("button[data-test*='labs-fleece']")
    }

    get btnBackToProducts() {
        return cy.get('[data-test=back-to-products]')
    }

    get btnRemoveFromCart() {
        return cy.get(".btn.btn_secondary.btn_small.btn_inventory")
    }
    
    get goToCart() {
        return cy.get('.shopping_cart_link')
    }

}

export default new InventoryPage;