/// <reference types= "cypress"/>

describe('Funcionalidade acesso', () => {
  afterEach(() => {
    cy.screenshot()
  })
  it('Acessar o site da amazon', () => {
  cy.visit('https://www.amazon.com.br/?tag=msndesktopabk-20&ref=pd_sl_7to86bd2ph_e&adgrpid=1141293728081284&hvadid=71330944898461&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=116068&hvtargid=kwd-71331371436168:loc-20&hydadcr=26346_10554304')
  cy.get('.hm-icon').click()
  cy.get('.hmenu-visible > :nth-child(2) > .hmenu-item').click() 
  })

  it.only('Deve exibir a pagina relaiconada', () => {

    cy.visit('https://www.linkedin.com/home')
    cy.get('#session_key').type('michelcarvalho1414@gmail.com')
    cy.get('#session_password').type('grandeufc')
    cy.get('.sign-in-form__submit-button').click()
    cy.get('.primary-action-new').click()
    cy.get('.search-global-typeahead__collapsed-search-button-icon').click()







  })

  it('Deve realizar login com sucesso', () => {


  })
})