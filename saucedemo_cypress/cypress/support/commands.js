import LoginPage from "../integration/pageObjects/login_page"
import InventoryPage from "../integration/pageObjects/inventory_page"
import CartPage from "../integration/pageObjects/cart_page"
import InformationPage from "../integration/pageObjects/information_page"
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


 Cypress.Commands.add('checkOutAction', function() {
    InventoryPage.goToCart.click()
        CartPage.btnCheckOut.click()
        cy.url().should('include', 'checkout-step-one')
 })

 Cypress.Commands.add('validUserDetailsAction', (firstName, lastName, zipCode) => {
    InformationPage.inputFirstName.clear().type(firstName).should('have.value', firstName)
        InformationPage.inputLastName.clear().type(lastName).should('have.value', lastName)
        InformationPage.inputZipCode.clear().type(zipCode).should('have.value', zipCode)
        InformationPage.btnContinue.click()
})

Cypress.Commands.add('loginAction', (firstName, lastName, zipCode) => {
    cy.visit(Cypress.env('url'))
    LoginPage.login('performance_glitch_user', 'secret_sauce')
})


Cypress.Commands.add('incompleteUserDetailsAction', (firstName, lastName, zipCode) => {
    if (lastName === ' '){
    InformationPage.inputFirstName.clear().type(firstName).should('have.value', firstName)
    InformationPage.inputZipCode.clear().type(zipCode).should('have.value', zipCode)
    InformationPage.btnContinue.click()
    InformationPage.msgError.should('be.visible')
    InformationPage.inputFirstName.clear()
    InformationPage.inputZipCode.clear()
   }
   else if (firstName === ' '){

    InformationPage.inputLastName.clear().type(lastName).should('have.value', lastName)
    InformationPage.inputZipCode.clear().type(zipCode).should('have.value', zipCode)
    InformationPage.btnContinue.click()
    InformationPage.msgError.should('be.visible')
    InformationPage.inputLastName.clear()
    InformationPage.inputZipCode.clear()

   }
   else {
    {

        InformationPage.inputLastName.clear().type(lastName).should('have.value', lastName)
        InformationPage.inputZipCode.clear().type(zipCode).should('have.value', zipCode)
        InformationPage.btnContinue.click()
        InformationPage.msgError.should('be.visible')
        InformationPage.inputLastName.clear()
        InformationPage.inputZipCode.clear()
    
       }
   }
})