///<reference types="cypress"/>

describe('Testes de Funcionalidade Produtos',()=>{

  it.only('Listar Produtos',() =>{

  cy.request({
     method: 'GET',
       url: 'http://localhost:3000/produtos'

  })

  });


});