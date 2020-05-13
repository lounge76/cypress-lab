describe(" yahoo ", function(){

    it ("got to sink", function()
    {
    cy.visit('https://example.cypress.io/')
    cy.contains('type').click()
    
    //cy.get('.action-email').type('fake@Knowit.se')
    //cy.get('.action-blur').type('blurrigt')
    //cy.xpath('//input[@id='fullName1']').type('Suddigt')
    //cy.xpath("//a[contains(text(),'.type()')]").click()
    cy.xpath("//input[@id='email1']").type('fake123@Knowit.se')
    cy.xpath("//input[@id='password1']").type('passsword')
    cy.xpath("//input[@id='fullName1']").type('passsword')
    cy.xpath("//div[@class='action-div']").dblclick()
    cy.xpath("//input[@class='action-input-hidden form-control']").type('passsword')


})

    
})



