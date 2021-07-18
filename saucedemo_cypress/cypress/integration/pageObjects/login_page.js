/// <reference types="Cypress" />

class LoginPage {

    get inputUsername(){
        return cy.get("#user-name")
        //return cy.get(".submit-button.btn_action")
    }

    get inputPassword() {
        return cy.get("#password")
    }

    get loginBtn() {
        return cy.get("#login-button")
    }

    get hamburgerMenu(){
        return cy.get('#react-burger-menu-btn')
    }

    login(username, password) {
        this.inputUsername.type(username)
        this.inputUsername.should('have.value', username)
        this.inputPassword.type(password)
        this.inputPassword.should('have.value', password)
        this.loginBtn.click()
        this.hamburgerMenu.should('exist')
    }

    loadHomePage(){
        cy.visit(Cypress.env('url'))
        cy.url().should('include', 'saucedemo')
    }

}

export default new LoginPage();