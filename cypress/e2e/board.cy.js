describe('visiting the board', () => {
    beforeEach(() => {
        cy.intercept('http://www.boredapi.com/api/activity/', {
                activity: "Learn how to play a new sport",
                accessibility: 0.2,
                type: "recreational",
                participants: 1,
                price: 0.1,
                key: "5808228"
        })
    })

    it('user should see an empty board with a message', () => {
        cy.visit('http://localhost:3000/board')
        cy.get('.no-activity').contains('there are no activities saved!')
    })

    it('user should be able to save an activity and see it on the board', () => {
        cy.visit('http://localhost:3000').get('.css-15g5sgd-MuiStack-root > .MuiButtonBase-root').click()
        cy.get(':nth-child(3) > .links').click()
        cy.get('.MuiPaper-root > .MuiTypography-root').contains('Learn how to play a new sport')
    })

    it('user cannot save an activity more than once', () => {
        cy.visit('http://localhost:3000').get('.css-15g5sgd-MuiStack-root > .MuiButtonBase-root').click()
        cy.get(':nth-child(3) > .links').click()
        cy.get(':nth-child(3) > .links').click()
        cy.get('.MuiPaper-root > .MuiTypography-root').contains('Learn how to play a new sport')
    })

    it('user should be able to delete an activity', () => {
        cy.visit('http://localhost:3000').get('.css-15g5sgd-MuiStack-root > .MuiButtonBase-root').click()
        cy.get(':nth-child(3) > .links').click()
        cy.get('.MuiPaper-root > .MuiTypography-root').contains('Learn how to play a new sport')
        cy.get('.delete-btn').click()
        cy.get('.no-activity').contains('there are no activities saved!')
    })

    it('user should be able to complete an activity', () => {
        cy.visit('http://localhost:3000').get('.css-15g5sgd-MuiStack-root > .MuiButtonBase-root').click()
        cy.get(':nth-child(3) > .links').click()
        cy.get('.MuiPaper-root > .MuiTypography-root').contains('Learn how to play a new sport')
        cy.get('.complete-btn').click()
    })
})