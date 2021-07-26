class InformationPage {

    get informationTitle() {
        return cy.contains('Your Information')
    }

    get inputFirstName() {
        return cy.get('[data-test=firstName]')
    }

    get inputLastName(){
        return cy.get('[data-test=lastName]')
    }

    get inputZipCode() {
        return cy.get('[data-test=postalCode]')
    }

    get btnContinue() {
        return cy.get('[data-test=continue]')
    }

    get btnCancel() {
        return cy.get('[data-test=cancel]') 
    }

    get msgError() {
        return cy.get('[data-test=error]')
    }
    
}

export default new InformationPage;