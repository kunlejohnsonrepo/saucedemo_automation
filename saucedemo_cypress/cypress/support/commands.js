import InventoryPage from "../integration/pageObjects/inventory_page"
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('addProductToCart', (productName) => {
    let cartCount = 0;
        InventoryPage.itemName.each(($item, index, $list) => {
            if ($item.text() === productName)
            {
                InventoryPage.btnAddToCart.eq(index).click()
                cartCount++
                //cy.log(cartCount)
            }    
        })
        //  .then(() => {
        //     cy.log(cartCount)
        //     InventoryPage.addToCartCount.should('have.text', cartCount)
        // })
 })

 Cypress.Commands.add('verifyProductPrice',(productName) => { 
    InventoryPage.inventoryItems.each(($item, index, $list) => {
        const item_name = $item.find('.inventory_item_name').text()
        const product_price = $item.find('.inventory_item_price').text()
        if(item_name === productName)
        {
            cy.wrap($item).find('.inventory_item_price').should('have.text', product_price)
            cy.wrap($item).find('.inventory_item_name').should('have.text', item_name)
        }
        })
 })