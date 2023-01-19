describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


  it('should have buttons updating the running total', () => {
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
    cy.get('#number6').click();
    cy.get('.display').should('contain', '6')
    cy.get('#number7').click();
    cy.get('.display').should('contain', '7')

  })
  
  // Do the number buttons update the display of the running total?
  
  it('should use arithmetical operations and display the correct result', () => {
    cy.get('#number8').click();
    // cy.get('.display').should('contain', '8')
    cy.get('#operator-subtract').click();
    // cy.get('#op-add').should('contain', '+')
    cy.get('#number9').click();
    // cy.get('.display').should('contain', '9')
    // cy.get('#operator-equals').should('contain', '=')
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')

  })
  // Do the arithmetical operations update the display with the result of the operation?
  
  it('should be able to chain multiple operations', () => {

    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9')
  })

  // Can multiple operations be chained together?
  

  it('should use decimal numbers correctly', () => {
    cy.get('#number5').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    
    cy.get('#operator-subtract').click();
    
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.1')
  })
  
  it('should have positive result', () => {
    cy.get('#number8').click();

    cy.get('#operator_add').click(); //UNDERSCORE ADD

    cy.get('#number8').click();

    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '16')

  })

  it('should have a very large number output', () => {
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();

    cy.get('#operator-multiply').click();
    
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();

    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '700227072')

  })
  // Is the output as expected for a range of numbers? Write tests for positive, negative, decimals and very large numbers

  // What does the code do in exceptional circumstances? Specifically, if you divide by zero, 
  // it returns Infinity

  it('should return the script to Shrek', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();

    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'The xx')
    
  })
  // what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make 
  // that test pass (you will need to modify the Calculator model to meet this requirement).
})