/// <reference types="Cypress" />
import CompleteOrderPage from "../pageObjects/complete_order_page"
import LoginPage from "../pageObjects/login_page"
import InventoryPage from "../pageObjects/inventory_page"
import CartPage from "../pageObjects/cart_page"
import InformationPage from "../pageObjects/information_page"
import OverviewPage from "../pageObjects/overview_page"

describe('Complete Order page Testsuite', () => {

    before(function() {
        cy.visit(Cypress.env('url'))
        LoginPage.login('performance_glitch_user', 'secret_sauce')
    });

    beforeEach(function() {
        cy.fixture('customers').then(function (userdata) {
        this.userdata = userdata
         })

        cy.fixture('products').then(function (data) {
        this.data = data
        })
    });

    it(' should complete order and assert title', function() {
        cy.log(this.data.addToCart)
        let count = 0
        this.data.addToCart.forEach(function (element){
            cy.addProductToCart(element)
            count++
            InventoryPage.addToCartCount.should('have.text', count)
        })
        cy.checkOutAction()
        cy.validUserDetailsAction(this.userdata.first_name, this.userdata.last_name,this.userdata.zip_code)
        OverviewPage.btnFinish.should('be.visible')
        OverviewPage.btnFinish.click()
        cy.location('pathname').should('eq', '/checkout-complete.html')
        CompleteOrderPage.completeTitle.should('have.text', 'Checkout: Complete!')
    })
    
});