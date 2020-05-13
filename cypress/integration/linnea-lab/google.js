describe('Testar google', ()=>{
    it('Testar google sök med enter', ()=>{
        cy.visit('/');

        //class. gillar inte mellansag så ersätt med en punkt. syntaxen är en punkt innan.
        cy.get('.gLFyf.gsfi').type('flygresor{enter}');

        //alt 1
        cy.get('.r')
        .first()
        .find('a')
        .first()
        .should('have.attr', 'href', 'https://www.flygresor.se/');

        //alt 2
        cy.get('.r').first().find('a').then(($href)=>{
            const href = $href.prop('href');
            cy.log('href');

            cy.request(href).then((response) => {
                expect(response.status).to.eq(200);

            });
        }); 
    })

    it('Testar sök med sökknapp', ()=>{
        cy.visit('/');
        cy.get('.gLFyf.gsfi').type('flygresor');

        cy.get('input[type="submit"]').first().click();

    })

})