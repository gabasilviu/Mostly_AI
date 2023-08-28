describe('Filling CONTACT page', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.wait(1000)
        //if it exists, click accept on the personal policy dialog to close it
        cy.get('[id=CookieBoxSaveButton][role=button]')
        .click({ force: true });
      })
    
    it('fills in the contact page', () => {

        //Click contact and assert 
        cy.contains('Contact').click({force:true});

        //workaround for triggering the async load of the form. I tried with cy.intercept & cy.wait but it dod not work
        cy.wait(3000);
        cy.get('.ct-section-inner-wrap .ct-link-text').eq(0).trigger('mousemove');

        //Fills in FIRST NAME
        cy.get('.hbspt-form [name=firstname]').type('Gabriel');

        //Fills in LAST NAME
        cy.get('.hbspt-form [name=lastname]').type('Costache');

        //Fills in EMAIL with business email format
        cy.get('.hbspt-form [name=email]').type('silviu.gabriel.costache@gaba.com');

        //Fills in MOBILEPHONE
        cy.get('.hbspt-form [name=mobilephone]').type('0744749953');

        //Fills in COMPANY
        cy.get('.hbspt-form [name=company]').type('gaba');

        //Fills in COUNTRY
        cy.get('select[name="country"]').select('Romania');

        //Fills in HOW DID YOU HEAR ABOUT MOSTLY.AI?
        cy.get('.hbspt-form [name=how_did_you_hear_about_mostly_ai___free_text]').type('From LinkedIn');

        //Fills in MESSAGE
        cy.get('.hbspt-form [name=message]').type('I am on a seafood diet. I see food, and I eat it.');

        //Check the MARKETING consent
        cy.contains('label', 'Marketing offers and updates.')
        .find('input[type="checkbox"]')
        .check();

        // //Mouse hover above the SEND MESSAGE button
        cy.get('.hs_submit.hs-submit .btn-block.btn.btn-lime')
        .trigger('mouseover')
        cy.wait(1000);
    });
  });



