Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName').type('Teste Nome');
  cy.get('#lastName').type('Teste Sobrenome');
  cy.get('#email').type('teste@email.com');
  cy.get('#open-text-area').type('Teste');
  cy.contains('button','Enviar').click();
})