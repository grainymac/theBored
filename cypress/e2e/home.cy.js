describe('onLoad', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('user should see the title logo', () => {
        cy.get('.bored-logo')
    })

    it('user should see a random activity on page load', () => {
        cy.intercept('https://www.boredapi.com/api/activity/', {
                activity: "Learn Express.js",
                accessibility: 0.25,
                type: "education",
                participants: 1,
                price: 0.1,
                link: "https://expressjs.com/",
                key: "3943506"
        })
        cy.get('.card-text').contains('Learn Express.js')
    })

    it('user should be able to click the welcome link and go to the welcome page', () => {
        cy.get(':nth-child(2) > .links').click()
    })
    
    it('user should be able to click the board link and go to the board page', () => {
        cy.get(':nth-child(3) > .links').click()
    })

    it('user should be able to click the home link to go to the home page', () => {
        cy.get('.MuiToolbar-root > :nth-child(1) > .links').click()
        cy.intercept('https://www.boredapi.com/api/activity/', {
            activity: "Learn Express.js",
            accessibility: 0.25,
            type: "education",
            participants: 1,
            price: 0.1,
            link: "https://expressjs.com/",
            key: "3943506"
    })
        cy.visit('http://localhost:3000/')
    })

    it('user should be able to navigate with browswer arrows', () => {
        cy.url().should('eq', 'http://localhost:3000/').go('back')
        cy.url().should('eq', 'about:blank').go('forward')

    })

    it('user should be able to click new activity button and get a new activity', () => {
        cy.get('.MuiButton-outlined').click().intercept('https://www.boredapi.com/api/activity/',         {
            activity: "Learn a new programming language",
            accessibility: 0.25,
            type: "education",
            participants: 1,
            price: 0.1,
            key: "5881028"
        })
        cy.get('.card-text').contains('Learn a new programming language')
    })

})