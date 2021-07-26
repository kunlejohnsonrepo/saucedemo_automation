class OverviewPage{

    get overviewTitle() {
        return cy.get('.title')
    }

    get paymentInfoValue() {
        return cy.get('.summary_info > :nth-child(2)')
    }

    get shippingInfoValue(){
        return cy.get('.summary_info > :nth-child(4)')
    }

    get totalLabel(){
        return cy.get('.summary_total_label')
    }

    get btnCancel(){
        return cy.get('[data-test=cancel]')
    }

    get btnFinish(){
        return cy.get('[data-test=finish]')
    }
    
}

export default new OverviewPage