describe('Searches wrong term', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.wait(1000)
        //if it exists, click accept on the personal policy dialog to close it
        cy.get('[id=CookieBoxSaveButton][role=button]')
        .click({ force: true });
      })
    
    it('searches SYTHETIC', () => {
    
        // Click to open search box
        cy.get('.oxy-header-right .oxy-header-search_open-icon')
        .click({ force: true });  
        
        //Type in searchbox
        cy.get('.oxy-header-right .oxy-header-search_search-field')
        .type('sythetic{enter}'); 

        //Assert for “Sorry, no results for:” is displayed
        cy.get('.ct-section-inner-wrap .ct-headline').eq(0)
        .should('be.visible')
        .should('contain', 'Sorry, no results for:');

        cy.get('.ct-section-inner-wrap .ct-code-block').eq(0)
        .should('be.visible')
        .should('contain', 'sythetic');
    
    });
  });

