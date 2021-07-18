/// <reference types="Cypress" />
import LoginPage from "../pageObjects/login_page"

describe('User Login TestSuite', () => {

    before('Launch Saucedemo E-Commerce Homepage', () => {

        LoginPage.loadHomePage()
    })

    it('should login successfully', () => {
        LoginPage.inputUsername.type('performance_glitch_user')
        LoginPage.inputUsername.should('have.value', 'performance_glitch_user')
        LoginPage.inputPassword.type('secret_sauce')
        LoginPage.inputPassword.should('have.value', 'secret_sauce')
        LoginPage.loginBtn.click();
        LoginPage.hamburgerMenu.should('exist')

    })
    
});