describe('Verify checkoutflow', () => {

    it('Verify staging enviornment', () => {
       cy.visit('https://on:trend@staging-beta.on-running.com/en-us/');
       cy.wait(5000)
    })

    it('Add product',() => {
       cy.get('.card.card-anim__el.card--light.card--summary-is-hidden[href="https://staging-beta.on-running.com/en-us/products/cloud/mens/black-white"]').click()
       cy.get('div[class*="size-selector"] div:nth-child(7)').click()
       cy.get('.button-container.purchase-pod__button-container').click()
    })

    it('Click Checkout',() => {
        cy.get('.button.mini-cart__cta').click()
    })

    it('Enter Purchaser Email',() => {
        cy.get('#email').type('annapurna.sharma@gmail.com')
        cy.get('button[type="submit"]').click()
        cy.get('#password').type('Berlin@2021')
        cy.get('button[type="submit"]').click()
    })

    it('Enter Shipping Details',() => {
        cy.get('#firstname').type('Annapurna')
        cy.get('#lastname').type('Sharma')
        cy.get('#address1').type('House no 1234, sector 5, gurgaon, haryana')
        cy.get('#city').type('Gurgaon')
        cy.get('#zipcode').type('122002')
        cy.get('#phone').type('9876767321')
        cy.get('button[type="submit"]').click()
    })
    
})
        