describe('E2ETest', () => {
  it('Demonstrates a user journey', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.grid').should('have.length.greaterThan', 0);

    cy.get('.pagination').should('be.visible');

    cy.contains('Porco Rosso').should('exist');

    cy.get('input').should('have.value', '');

    cy.get('input').type('Princess Mononoke');

    cy.get('input').should('have.value', 'Princess Mononoke');

    cy.get('.movie-card').first().click();

    cy.url().should('include', '/movies/0440483e-ca0e-4120-8c50-4c8cd9b965d6');
  });
});


// Live: ghibliography.vercel.app
// Local: http://localhost:3000/
