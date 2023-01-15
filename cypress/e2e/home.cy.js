describe('onLoad', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('user should see the title logo', () => {
        cy.get('.bored-logo')
    })

    it.skip('user should see a random activity on page load', () => {
        cy.intercept('http://www.boredapi.com/api/activity/', {
            activity: "Learn Express.js",
            accessibility: 0.25,
            type: "education",
            participants: 1,
            price: 0.1,
            link: "https://expressjs.com/",
            key: "3943506",
            status: 200
        })
        cy.get('').contains('')
    })

    it.skip('user should be able to click the welcome link and go to the welcome page', () => {
        cy.get(':nth-child(2) > .links').click()
    })
    
    it.skip('user should be able to click the board link and go to the board page', () => {
        cy.get().click()
    })

    it('user should be able to click the home link to go to the home page', () => {
        cy.visit('http://localhost:3000/board')
        cy.get().click().get('')
    })

    it.skip('user should be able to navigate with browswer arrows', () => {
        cy.get()
        click()
        .url().should('eq', 'http://localhost:3000/board').go('back')
        .url().should('eq', 'http://localhost:3000/board').go('back')
        .url().should('eq', 'http://localhost:3000/board').go('back')
    })

    it.skip('user should be able to click new activity button and get a new activity', () => {
        cy.get('').click().intercept('', {

        })
        cy.get('').contains('')
    })

})