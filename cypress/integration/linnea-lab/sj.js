describe('Testar sj.se', ()=>{

    var from = 'Stockholm';
    var to = 'Uppsala';
    var passengerNr = 5;
    var maxPrice = 1000;

    it('Testar sj sökfunktionen', ()=>{
        
        cy.visit('/');

        cy.get('#booking-departure').type(from);

        cy.get('#booking-arrival').type(to).type('{enter}');
        
        //knapp ska inte synas i webläge, exj gfr med not .exists
        cy.get('.form-group__add-button-title').contains('Lägg till återresa').should('not.be.visible');

        //två kalendrar ska synas
        cy.get('.row.calendar__header').first().should('be.visible');
        cy.get('.row.calendar__header').last().should('be.visible');

        cy.get('button[aria-label="Nästa månad"]').first().click();

        cy.get('td[data-value="18"]').first().click();

        //# för id
        cy.get('#timeOptionsDeparture').select('1500');

        for(var i = 1; i<passengerNr; i++){
            cy.get('button[ng-click="addPassenger()"]').click();

        }

        cy.get('button[ng-click="continueButtonClicked()"] span').contains('Fortsätt').click();
        cy.wait(5000);
        cy.get('.sj-price').find('.ng-binding').first().then(($price) =>{
            var price = $price.text();
            cy.log(price);
            price = parseInt(price);
            
            if(price>maxPrice){
                alert('Price is to high')
            } else {
                $price.click();
                cy.log('Price is under', maxPrice);
            }

        })


    })

    it('Testar mobilt läge', ()=>{
        cy.visit('/');
        cy.viewport('iphone-x');
        cy.get('#booking-departure').type(from).type('{enter}');
        cy.get('#booking-arrival').type(to).type('{enter}');

        cy.get('.form-group__add-button-title').contains('Lägg till återresa').should('be.visible');

        cy.get('.row.calendar__header').first().should('be.visible');
        cy.get('.row.calendar__header').last().should('be.not.visible');

    })
    it('Testar ipad läge', ()=>{
        cy.visit('/');
        cy.viewport('ipad-2');
        cy.get('#booking-departure').type(from).type('{enter}');
        cy.get('#booking-arrival').type(to).type('{enter}');

        cy.get('.form-group__add-button-title').contains('Lägg till återresa').should('be.not.visible');

        cy.get('.row.calendar__header').first().should('be.visible');
        cy.get('.row.calendar__header').last().should('be.visible');

    })
})