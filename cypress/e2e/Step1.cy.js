describe('Page with Bookmarks/Submenus', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.wait(1000)
        //if it exists, click accept on the personal policy dialog to close it
        cy.get('[id=CookieBoxSaveButton][role=button]')
        .click({ force: true });
      })
    
    it('should have visible bookmarks/submenus', () => {
    
        // Test PLATFORM is visible
      cy.get('.oxy-mega-menu .oxy-mega-dropdown').eq(0) 
        .should('be.visible');  

        // Test SYNTHETIC DATA is visible
      cy.get('.oxy-mega-menu .oxy-mega-dropdown').eq(1) 
      .should('be.visible');  

        // Test RESOURCES is visible
      cy.get('.oxy-mega-menu .oxy-mega-dropdown').eq(2) 
        .should('be.visible');  

        // Test COMPANY is visible
      cy.get('.oxy-mega-menu .oxy-mega-dropdown').eq(3) 
      .should('be.visible');  

        // Test PRICING is visible
      cy.get('.oxy-mega-menu .oxy-mega-dropdown').eq(4) 
        .should('be.visible');  
    });
  });