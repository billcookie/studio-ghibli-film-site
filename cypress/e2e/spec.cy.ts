describe('AllMovies', () => {
  it('fetches all movies', () => {
    cy.visit('https://ghibliography.vercel.app');

    cy.get('.grid').should('have.length.greaterThan', 0);

    cy.contains('Porco Rosso').should('exist');
  });
});
