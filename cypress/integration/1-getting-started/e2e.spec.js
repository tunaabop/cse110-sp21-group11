describe("Open Page", () => {
    beforeEach(() => {
      cy.visit('./source/index.html');
    });
    // This test verifies the main page
    it('loads and displays main', () => {
      cy.get('.featured').should('be.visible');
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

    // This test types in search bar a keyword and checks if top results are shown
    it('searches keyword:tomato', () => {
      cy.get('#heroSearch').type('tomato');
      cy.get('#heroSearchButton').click();
      cy.contains('h2', 'Top Results').should('be.visible');
      cy.get('card-carousel', { timeout: 10000 }).should("be.visible");
      // cy.get('card-carousel', { timeout: 10000 }).shadow().find('recipe-card').shadow().find('.title a').contains('tomato');
    });
    

    // This test clicks a hyperlink in header and checks if it directs to the right page
    it('displays correct subpage', () => {
      // hover to Breakfast in Recipes dropdown
      cy.get('#breakfastPage').invoke('show').click({ force: true });
      //check to make sure page directs to the right section (breakfast)
      cy.contains('h1', 'Breakfast Recipes').should('be.visible');
      
      // hover to Lunch in Recipes dropdown
      cy.get('#lunchPage').invoke('show').click({ force: true });
      //check to make sure page directs to the right section (lunch)
      cy.contains('h1', 'Lunch Recipes').should('be.visible');
      
      // hover to Dinner in Recipes dropdown
      cy.get('#dinnerPage').invoke('show').click({ force: true });
      //check to make sure page directs to the right section (dinner)
      cy.contains('h1', 'Dinner Recipes').should('be.visible');
      
      // hover to Dessert in Recipes dropdown
      cy.get('#dessertPage').invoke('show').click({ force: true });
      //check to make sure page directs to the right section (dessert)
      cy.contains('h1', 'Dessert').should('be.visible');

    });

   // This test verifies the wrapper components after directing to subsection
   it('displays recipes in subsection', () => {
    cy.get('#lunchPage').invoke('show').click({ force: true });
    //check to make sure page directs to the right section (lunch)
    cy.contains('h1', 'Lunch Recipes').should('be.visible');
    cy.get('.recipes-wrapper').should('have.length', 3);
    cy.get('.recipes-wrapper').each((element, index, list) => {
        // expect(Cypress.$(element)).to.be.visible; // true when successfully retrieve carousels -> recipes from api
        expect(index).to.be.greaterThan(-1);
        expect(list).to.have.length(3);
    });
  });
  
  // This test clicks on hyperlinks in How-To's/Techniques dropdown and checks if it directs to the correct spoonacular url
  it('directs to how-to/technique url', () => {
    // hover to Cooking Techniques in How-To's dropdown
    cy.contains('a', 'Cooking Techniques').invoke('show').click({force: true});
    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain('academy#Basics');
    });

    // hover to Needed Kitchen Utensils in How-To's dropdown
    cy.contains('a', ' Needed Kitchen Utensils').invoke('show').click({force: true});
    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain('must-have-kitchen-utensils');
    });

    // hover to Using Oven/Grill in How-To's dropdown
    cy.contains('a', 'Using Oven/Grill').invoke('show').click({force: true});
    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain('using-your-grill-or-oven');
    });

    // hover to Cutting Techniques in How-To's dropdown
    cy.contains('a', 'Cutting Techniques').invoke('show').click({force: true});
    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain('knife-techniques');
    });
   
  });
  
  // This test clicks on addRecipeBtn button and checks if it directs to the right html
  it('directs to create recipe page', () => {
    cy.get('#addRecipeBtn').click();
    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain('crud.html');
    });
  });

  // To-Do: This test would show that API works in retreiving recipes therefore carousels are created
  it('displays 3 card carousels under wrappers', () => {
    // hover to Lunch in Recipes dropdown
    cy.get('#lunchPage').invoke('show').click({ force: true });
    cy.get('card-carousel', { timeout: 15000 }).should(e => {
      const [dom] = e.get();
      expect(dom.shadowRoot.querySelectorAll('recipe-card').length).to.have.length(6);
    });
  });

});
  