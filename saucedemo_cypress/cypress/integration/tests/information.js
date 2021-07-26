/// <reference types="Cypress" />
import LoginPage from "../pageObjects/login_page"
import InventoryPage from "../pageObjects/inventory_page"
import CartPage from "../pageObjects/cart_page"
import InformationPage from "../pageObjects/information_page";

describe('Your Information Page', function() {

    before(function() {
        cy.visit(Cypress.env('url'))
        LoginPage.login('performance_glitch_user', 'secret_sauce')
    });

    beforeEach(function() {
        cy.fixture('customers').then(function (userdata) {
        this.userdata = userdata
         })
    });

    it('should assert information title page', function () {
        cy.addProductToCart('Sauce Labs Bolt T-Shirt')
        cy.checkOutAction()
        InformationPage.informationTitle.should('have.text', 'Checkout: Your Information')
    });

    it('Unsuccessful order: empty firstname and assert error message', function () {
        cy.incompleteUserDetailsAction(' ',this.userdata.last_name, this.userdata.zip_code)
    });

    it('Unsuccessful order: empty lastname and assert error message', function () {
        cy.incompleteUserDetailsAction(this.userdata.first_name,' ', this.userdata.zip_code)
    });

    it('Unsuccessful order: empty lastname and assert error message', function () {
        cy.incompleteUserDetailsAction(this.userdata.first_name,' ', this.userdata.zip_code)
    });

    it('should enter valid customer information and assert input', function () {
        cy.loginAction()
        cy.addProductToCart('Sauce Labs Bolt T-Shirt')
        cy.checkOutAction()
        cy.validUserDetailsAction(this.userdata.first_name, this.userdata.last_name,this.userdata.zip_code )
        cy.location('pathname').should('eq', '/checkout-step-two.html')
    });

});