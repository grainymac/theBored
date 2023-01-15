describe('visiting the error page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/ubhndcsaouh')
    })

    it('user should see an error page if they go to the wrong url', () => {
        cy.get('.App > :nth-child(2)').should('exist')
    })
    
    it('user should see a message on the page prompting them that they are on the wrong page', () => {
        cy.get('.badURL-text').should('exist')
    })

    it('user should be able to click a button to go back to the home page', () => {
        cy.get('.MuiButtonBase-root').click()
        cy.url().should('equal', 'http://localhost:3000/')
    })
})