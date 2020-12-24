describe('some interesting test', () => {
    it('step 1', () => {
        cy.visit('https://www.google.com');
    })


    it('step 2', () => {

        cy.typeLogin({ email: 'fake@email.com', password: 'Secret1' })
    })
}
