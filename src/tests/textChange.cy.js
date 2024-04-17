describe('Text Change Test', () => {
  it('verifies text change on button click', () => {
    cy.visit('http://localhost:3000');

    cy.get('#text').should('have.text', 'Rastislav Balcerčík');

    cy.get('#button').click();

    cy.get('#text').should('have.text', 'RB');
  });
});