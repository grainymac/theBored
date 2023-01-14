describe('visiting the board', () => {
    beforeEach(() => {
        cy.intercept('', {

        })
    })

    it('user should see an empty board', () => {
        cy.visit('http://localhost:3000/board')
        cy.get('').contains(')')
    })

    it('user should be able to save and delete an activity', () => {
        cy.visit('http://localhost:3000').get('').click()
        cy.get('').click().get('').click()
        cy.url().should('eq', '')
        cy.get('').contains('')
        cy.get('').click()
        cy.get('').contains('')
    })
})