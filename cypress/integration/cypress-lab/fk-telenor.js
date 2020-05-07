require('cypress-xpath')

describe('My First Test', function () {
    it ('get to page - check content', function () {
        cy.visit('https://www.telenor.se/')

        cy.contains('Godkänn cookies').click()

        cy.contains('Kundservice').click()

        cy.contains('Driftinformation').click()
        cy.contains('Kan du inte ringa eller surfa?')
  })
  it ('buy a phone - check price', function () {
        cy.visit('https://www.telenor.se/')
        cy.contains('Godkänn cookies').click()
        cy.contains('Handla').click()
        cy.contains('Mobiltelefoner').click()
        cy.visit('https://www.telenor.se/handla/mobiler/apple/iphone-11-pro/')
        cy.get('a').contains('Pro').click()
        //cy.xpath('//label[contains(@for,'productColor3')]').click()



})
})
