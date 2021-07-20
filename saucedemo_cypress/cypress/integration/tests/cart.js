/// <reference types="Cypress" />
import LoginPage from "../pageObjects/login_page"
import InventoryPage from "../pageObjects/inventory_page"
import CartPage from "../pageObjects/cart_page"

describe('Cart Page Testsuite', () => {

    before(function() {
        cy.visit(Cypress.env('url'))
        LoginPage.login('performance_glitch_user', 'secret_sauce')
    });

    beforeEach(function() {
        cy.fixture('products').then(function (data) {
        this.data = data
        })
    });

    it('Add multiple products to cart and assert number of items on cart Icon', function() {
        //productData = this.testdata
        let count = 0
        this.data.addToCart.forEach(function (element){
            cy.addProductToCart(element)
            count++
            InventoryPage.addToCartCount.should('have.text', count)
        })
        InventoryPage.goToCart.click()
    })

    it('should assert url pathname ', function() {
        cy.location('pathname').should('eq', '/cart.html')
        CartPage.cartLabel.should('have.text', 'Your Cart')
    });

    it('should be able to check out', () => {
        CartPage.cartItems.each(($item, index, $list) => {
        const product_price = $item.find('.inventory_item_price').text()
            if($item.text())
            {
                cy.get(".inventory_item_price").eq(index).should('have.text', product_price)
            }
        })
    
    });

    it('should checkout and assert and assert new page url ', function () {
            cy.visit(Cypress.env('url'))
            LoginPage.login('performance_glitch_user', 'secret_sauce')
            this.data.addToCart.forEach(function (element){
                cy.addProductToCart(element)
            })
        InventoryPage.goToCart.click()
        CartPage.btnCheckOut.click()
        cy.url().should('include', 'checkout-step-one')
    });


    it('should continue shopping and assert inventory page url ', function () {
        cy.visit(Cypress.env('url'))
        LoginPage.login('performance_glitch_user', 'secret_sauce')
        this.data.addToCart.forEach(function (element){
            cy.addProductToCart(element)
        })
        InventoryPage.goToCart.click()
        CartPage.btnContinueShopping.click()
        cy.url().should('include', 'inventory')
});
    
});