describe('visiting the error page', () => {

    it('user should see an error page if they go to the wrong url', () => {
        cy.visit('http://localhost:3000/ubhndcsaouh')
        cy.get('.badURL-container').should('exist')
    })

    it('user should be able to click a button to go back to the home page', () => {
        cy.visit('http://localhost:3000/ubhndcsaouh')
        cy.intercept('http://www.boredapi.com/api/activity/', {
            method: 'GET',
            fixture: '../fixtures/activities.json'
        })
        cy.get('.MuiButtonBase-root').click()
        cy.visit('http://localhost:3000')
    })
})