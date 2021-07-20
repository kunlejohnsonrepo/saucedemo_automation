/// <reference types="Cypress" />
import LoginPage from "../pageObjects/login_page"
import InventoryPage from "../pageObjects/inventory_page"

describe('Product page Test Suite', () => {

         before(function() {
            cy.visit(Cypress.env('url'))
            LoginPage.login('performance_glitch_user', 'secret_sauce')
        });

        beforeEach(function() {
            cy.fixture('products').then(function (data) {
            this.data = data
            })
        });
        

    it('should assert Page title and Product title after successful login', () => {
       cy.title().should('eq', 'Swag Labs') 
       InventoryPage.productLabel.should('have.text', 'Products')    
    });

    it('inventory page should have minimum of one product/item', () => {
        InventoryPage.inventoryItems.its('length').should('be.gt', 0)
    })

    it('should sort product by price: low to high', function() {
        InventoryPage.sortByName.select('Price (low to high)')
        InventoryPage.sortByName.should('have.value', 'lohi')
    })

    it('should assert product name and its price in the inventory page', function() {
        cy.verifyProductPrice('Sauce Labs Bolt T-Shirt')
    })

    it('should a single product to cart', function() {
        cy.addProductToCart('Sauce Labs Bolt T-Shirt')
        InventoryPage.addToCartCount.should('have.text', 1)
    });

    it('should add multiple products to cart', function() {
        let count = 0
        this.data.addToCart.forEach(function (element){
            cy.addProductToCart(element)
            count++
            InventoryPage.addToCartCount.should('have.text', count)
        })
    });

    it('remove product from cart', function() {
        //first check if button state is 'add to cart', if yes change to button state to 'Remove'
        InventoryPage.btnAddRemoveFleece.each(($item, index, $list) => {
            const buttonState = $item.text()
            if (buttonState != 'Remove')
            {
                cy.wrap($item).click()     
            }      
        })
        InventoryPage.btnAddRemoveFleece.click()
        InventoryPage.btnAddRemoveFleece.should('have.text', 'Add to cart')   
    });

    // it('should assert "back to products" button', () => {
    //     //cy.visit(Cypress.env('url'))
    //     //LoginPage.login('performance_glitch_user', 'secret_sauce')
    //     cy.contains("Fleece Jacket").click()
    //     cy.url().should('include', 'id=')
    //     InventoryPage.btnBackToProducts.click()
    //     cy.location('pathname').should('eq','/inventory.html')
        
    // });
});