/// <reference types="Cypress" />

import LoginPage from "../pageObjects/login_page"
const user = require('../../fixtures/users.json')

describe('Login Testsuite', () => {

    beforeEach(function() {
        cy.visit(Cypress.env('url'))

    });

    user.forEach((data) => {
    it(`Login with ${data.credential}: ${data.username}`, function() {
        LoginPage.login(data.username, data.password)
        cy.url().should('include', data.url)
        if (data.hasError){
        LoginPage.msgError.should('be.visible')
            }
        })
    })
    
});