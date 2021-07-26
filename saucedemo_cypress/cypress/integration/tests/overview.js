/// <reference types="Cypress" />
import OverviewPage from "../pageObjects/overview_page";
import LoginPage from "../pageObjects/login_page"
import InventoryPage from "../pageObjects/inventory_page"
import CartPage from "../pageObjects/cart_page"
import InformationPage from "../pageObjects/information_page";
//const userData = require('../../fixtures/customers.json')
//require("../../fixtures")

describe('CheckOut Overview Test Suite', () => {

    before(function() {
        cy.visit(Cypress.env('url'))
        LoginPage.login('performance_glitch_user', 'secret_sauce')
    });

    beforeEach(function() {
        cy.fixture('customers').then(function (userdata) {
        this.userdata = userdata
       })
    })

    it('should assert overview title', function() {
        cy.addProductToCart('Sauce Labs Bolt T-Shirt')
        cy.checkOutAction()
        cy.validUserDetailsAction(this.userdata.first_name, this.userdata.last_name,this.userdata.zip_code )
        OverviewPage.overviewTitle.should('have.text', 'Checkout: Overview')
        cy.location('pathname').should('eq', '/checkout-step-two.html')

    })

    it('should assert payment information value', function() {
        OverviewPage.paymentInfoValue.should('be.visible').and('include.text', '#31337')
    });

    it('should assert shipping information value', function() {
        OverviewPage.shippingInfoValue.should('be.visible').and('include.text', 'EXPRESS DELIVERY')
    });

    it('should assert total cost', function() {
        OverviewPage.totalLabel.should('be.visible').and('include.text', '$')
    });

    it('should cancel processing transaction and assert changed url', function() {
        cy.loginAction()
        cy.addProductToCart('Sauce Labs Bolt T-Shirt')
        cy.checkOutAction()
        cy.validUserDetailsAction(this.userdata.first_name, this.userdata.last_name,this.userdata.zip_code )
        OverviewPage.btnCancel.should('be.visible')
        OverviewPage.btnCancel.click()
        cy.url().should('includes', 'inventory.html')

    });
    
    it('should cancel processing transaction and assert new url (pathname)', function() {
        cy.loginAction()
        cy.addProductToCart('Sauce Labs Bolt T-Shirt')
        cy.checkOutAction()
        cy.validUserDetailsAction(this.userdata.first_name, this.userdata.last_name,this.userdata.zip_code )
        OverviewPage.btnFinish.should('be.visible')
        OverviewPage.btnFinish.click()
        cy.location('pathname').should('eq', '/checkout-complete.html')

    });

});