describe('onLoad', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('user should see the title logo', () => {
        cy.get('').contains('')
    })

    it('user should see a random activity on page load', () => {
        cy.intercept('', {})
        cy.get('').contains('')
    })

    it('user should be click the welcome link', () => {
        cy.get().click()
    })
    
    it('user should be click the board link', () => {
        cy.get().click()
    })
    
    it('user should be click the home link', () => {
        cy.get().click()
    })

})