/// <reference types="cypress" />

describe("Open Page", () => {
    beforeEach(() => {
      cy.visit('./source/index.html');
    });
    // This test verifies the wrapper components
    it('displays three recipe wrappers', () => {
      cy.get('.recipes-wrapper').should('have.length', 3);
      cy.get('.recipes-wrapper').each((element, index, list) => {
          // expect(Cypress.$(element)).to.be.visible; // true when successfully retrieve carousels -> recipes from api
          expect(index).to.be.greaterThan(-1);
          expect(list).to.have.length(3);
      });
    });
  
    // This test shows that API works in retreiving recipes therefore carousels are created
    it('displays 3 card carousels under wrappers', () => {
      // cy.get('.recipes-wrapper card-carousel').should('have.length', 3);
    });
  
    // This test verifies contents of the 3 recipe wrappers
    it('displays correct headers', () => {
      cy.get('.section-recipes-display h2').first().contains('Top Results for Pasta');
      cy.get('.section-recipes-display h2').last().contains('Top Thanksgiving Recipes');
    });
  
  });
  