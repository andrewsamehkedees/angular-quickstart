describe('Intsentry Website', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the company name and tagline', () => {
    cy.get('.company-name')
    .contains('INTSENTRY');
    cy.get('.tagline')
    .contains('Intelligence. Security. Sentry.');
  })

  it('displays the hero subtitle', () => {
    cy.get('.hero-subtitle')
    .contains('Transforming ideas into powerful software solutions');
  })

  it('shows the navigation menu', () => {
    cy.get('.navbar').should('be.visible');
    cy.get('.logo-text').contains('INTSENTRY');
    cy.get('.nav-menu a').should('have.length', 4);
  })

  it('displays all service cards', () => {
    cy.get('.service-card').should('have.length', 6);
    cy.get('.service-card').first().should('contain', 'Custom Software Development');
  })

  it('shows call-to-action buttons', () => {
    cy.get('.btn-primary').should('be.visible').contains('Start Your Project');
    cy.get('.btn-secondary').should('be.visible').contains('Our Services');
  })

  it('displays the about section', () => {
    cy.get('.about').should('be.visible');
    cy.get('.about-card').should('have.length', 4);
  })

  it('shows contact information', () => {
    cy.get('.contact').should('be.visible');
    cy.get('.contact-link').should('contain', 'hello@intsentry.com');
  })

  it('displays the footer', () => {
    cy.get('footer').should('be.visible');
    cy.get('footer').contains('2025 Intsentry');
  })
})
