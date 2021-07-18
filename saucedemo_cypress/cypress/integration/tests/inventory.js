/// <reference types="Cypress" />
import LoginPage from "../pageObjects/login_page"
import InventoryPage from "../pageObjects/inventory_page"

describe('Product page Test Suite', () => {

    // before('Launch Saucedemo E-Commerce Homepage', () => {
    //     // cy.window().then((window) => {
    //     //     window.sessionStorage.setItem('cart-contents', '[]')
    //     //   })
    //     LoginPage.loadHomePage()

    // })

    before(() => {
        cy.visit(Cypress.env('url'))
        LoginPage.login('performance_glitch_user', 'secret_sauce')
    });

    it('should assert Page title and Product title after successful login', () => {
       cy.title().should('eq', 'Swag Labs') 
       InventoryPage.productLabel.should('have.text', 'Products')    
    });

    it('inventory page should have minimum of one product/item', () => {
        InventoryPage.inventoryItems.its('length').should('be.gt', 0)
    })

    it('should sort product by price: low to high', () => {
        InventoryPage.sortByName.select('Price (low to high)')
        InventoryPage.sortByName.should('have.value', 'lohi')
    })

    it('should assert a product name and price in the page', () => {
        InventoryPage.inventoryItems.each(($item, index, $list) => {
        const product_name = $item.find('.inventory_item_name').text()
        const product_price = $item.find('.inventory_item_price').text()
        if(product_name === 'Sauce Labs Onesie')
        {
            cy.wrap($item).find('.inventory_item_price').should('have.text', product_price)
            cy.wrap($item).find('.inventory_item_name').should('have.text', product_name)
        }
        })
    })

    it('should add 2 products to cart', () => {
        let cartCount = 0;
        InventoryPage.inventoryItems.each(($item, index, $list) => {
            const productName = $item.find('.inventory_item_name').text()
            if (productName === 'Sauce Labs Backpack' || productName.includes('Light'))
            {
                cy.wrap($item).find('button').click()
                //cy.wrap($item).find('.btn_primary').click()
                cartCount++
            }      
        })
        .then(() => {
            cy.log(cartCount)
            InventoryPage.addToCartCount.should('have.text', cartCount)
        })
        
    });

    // it('should select a product ', () => {
    //     //LoginPage.login('performance_glitch_user', 'secret_sauce');
    //     cy.contains('Bolt').click()
    // });
    
});