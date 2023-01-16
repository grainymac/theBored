describe('visiting the welcome page', () => {
    beforeEach(() => {
        cy.intercept('https://www.boredapi.com/api/activity/', {
            method: 'GET',
            fixture: '../fixtures/activities.json'
        })
        cy.visit('http://localhost:3000/welcome')
    })

    it('user should see the title of the page they are on', () => {
        cy.get('.welcome-title').contains('Welcome to theBored')
    })

    it('user should see welcome text on the page', () => {
        cy.get('.welcome-txt > :nth-child(1)').contains('I am pleased to welcome you to The Bored. The purpose of this application is to help you discover something new to do. Instead of thinking of things to do while you\'re bored, this application will generate an activity for you at random. Then, you can save it and it will appear on your board.')
    })

    it('user should see welcome text on the page', () => {
        cy.get('.welcome-txt > :nth-child(2)').contains('On your board, you can see all the activities that you have saved. If you decide that you don\'t want to do an activity, you can now either delete it from your board or mark it as done on your board after you\'ve completed it. It will stay on your board so you don\'t have to remember if you\'ve completed that activity or not.')
    })

    it('user should see welcome text on the page', () => {
        cy.get('.welcome-txt > :nth-child(3)').contains('I hope you enjoy using the application and that boredom no longer consumes your day. Get out there and try some things!')
    })
})