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

    it('user should be click the welcome link and go to the welcome page', () => {
        cy.get().click()
    })
    
    it('user should be click the board link and go to the board page', () => {
        cy.get().click()
    })

    it('user should be click the home link to go to the home page', () => {
        cy.visit('http://localhost:3000/board')
        cy.get().click()
    })

    it('user should be able to navigate with browswer arrows', () => {
        cy.get()
        click()
        .url().should('eq', 'http://localhost:3000/board').go('back')
        .url().should('eq', 'http://localhost:3000/board').go('back')
        .url().should('eq', 'http://localhost:3000/board').go('back')
    })

    it('user should be able to click new activity button and get a new activity', () => {
        cy.get('').click().intercept('', {

        })
        cy.get('').contains('')
    })

})