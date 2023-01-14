describe('visiting the welcome page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/welcome')
    })

    it('user should see the title of the page they are on', () => {
        cy.get('').contains('')
    })

    it('user should see welcome text on the page', () => {
        cy.get('').contains('')
    })
})