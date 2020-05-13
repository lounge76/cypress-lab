describe(" google ", function(){

    it ("This is google search", function()
    {
    cy.visit('https://www.google.com')
    cy.get("[name=q]").type('Knowit{enter}')

    })

    it ("Go to Gmail using xpath", function()
    {
        cy.visit('https://www.google.com')
        cy.xpath("//a[contains(text(),'Gmail')]").click()
    })
})