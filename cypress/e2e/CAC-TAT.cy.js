
/// reference types="Cypress" />
describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function(){ //beforeEach (antes de Cada): colocando essa linha para não ter que repetir o comando cy.visit em cada linha. Recomendado usar essa função quando em todos os testes do switch use uma mesma função
    cy.visit('src/index.html')
    })
    it('verifica o título da aplicação', function(){
        
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
        
    });

    //Aula 2 - preenchendo campos e clicando em botões
    //Exercicio 1-Exercicio Extra 1-preencha os campos obrigatório e aguarda a mensagem de sucesso
    //preenche um campo com texto longo e coloca delay de 0
    it('preenche os campos obrigatórios e envia o formulário', function(){ 
        cy.get('#firstName')
          .should('be.visible')
          .type('Teste Nome')
          .should('have.value','Teste Nome');
        cy.get('#lastName')
          .type('Teste Sobrenome')
          .should('be.visible')
          .should('have.value','Teste Sobrenome');
        cy.get('#email').type('teste@email.com');
        cy.get('#open-text-area').type('Esse é um texto longo para testar a função de delay do elemento type e verificar como o delay afeta no tempo total de teste',{delay:0});
        cy.contains('button','Enviar').click();
        cy.get('.success').should('be.visible')
         
    });

   
   //Exercicio Extra 2:
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function()
    {
      cy.get('#firstName')
          .should('be.visible')
          .type('Teste Nome')
          .should('have.value','Teste Nome');
        cy.get('#lastName')
          .type('Teste Sobrenome')
          .should('be.visible')
          .should('have.value','Teste Sobrenome');
        cy.get('#email').type('testeemail.com');
        cy.get('#open-text-area').type('teste Como podemos te ajudar');
        cy.contains('button','Enviar').click();
        cy.get('.error').should('be.visible')
    });


    //Exercicio Extra 3:
    it('Não permitir informar caracteres diferentes de número no campo de telefone', function(){
     
      cy.get('#phone').type('teste').should('have.value','')

    });

    //Exercicio Extra 4
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
      cy.get('#firstName')
      .should('be.visible')
      .type('Teste Nome')
      .should('have.value','Teste Nome');
    cy.get('#lastName')
      .type('Teste Sobrenome')
      .should('be.visible')
      .should('have.value','Teste Sobrenome');
    cy.get('#email').type('teste@email.com');
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('teste Como podemos te ajudar');
    cy.contains('button','Enviar').click();
    cy.get('.error').should('be.visible')
    });


    //Exercicio Extra 5
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
      cy.get('#firstName')
      .should('be.visible')
      .type('Teste Nome')
      .should('have.value','Teste Nome')
      .clear()
      .should('have.value','');
    cy.get('#lastName')
      .type('Teste Sobrenome')
      .should('be.visible')
      .should('have.value','Teste Sobrenome')
      .clear()
      .should('have.value','');
    cy.get('#email').type('teste@email.com')
    .clear()
    .should('have.value','');
    cy.get('#phone-checkbox').click();
    cy.get('#phone')
    .type('66123456789')
    .should('have.value','66123456789')
    .clear()
    .should('have.value','')
    });

    //Exercício Extra 6
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
      cy.get('.button').click();
      cy.get('.error').should('be.visible')
    })

    //Exercício Extra 7
    it('envia o formuário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit();
        cy.get('.success').should('be.visible');

    });




    //Aula 3 - lidando com elementos do tipo caixa suspensa
    //Exercicio 1
    it('seleciona um produto (YouTube) por seu texto', function(){
      cy.get('#product').select('YouTube')
      .should('have.value','youtube')
    });

  //Exercicio Extra 1
    it('seleciona um produto (Mentoria) por seu valor (value)', function(){
      cy.get('#product')
      .select('mentoria')
      .should('have.value','mentoria')
    });

  //Exercicio Extra 2
    it('seleciona um produto (Blog) por seu indice', function(){
      cy.get('#product')
        .select(1)
        .should('have.value','blog')
    });


    //Aula 4 - lidando com elementos do tipo radio
    //Exercicio 1
    it('marca o tipo de Atendimento "Feedback"', function(){
      cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('have.value','feedback')
    });

    it('marca cada tipo de atendimento', function(){
      
    })

  
})