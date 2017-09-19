const {defineSupportCode} = require('cucumber')
const CadastroPage = require('../pages/cadastro.po.js')
const Pages = require('../pages/pages.js')

defineSupportCode(function ({Given, Then, When}) {
  const cadastro = new CadastroPage()
  const pages = new Pages()

  Given(/^que eu esteja na home da Loja$/, function () {
    browser.ignoreSynchronization = true
    return cadastro.visit()
  })

  When(/^eu cadastro meu email na Newsletter$/, function () {
    return cadastro.cadastrarNewsletter(pages.email)
  })

  Then(/^eu visualizo a mensagem de confirmação$/, function (done) {
    browser.wait(this.EC.visibilityOf(cadastro.confirmation), 3000)
    browser.takeScreenshot().then(function (buffer) {
      return this.attach(buffer, 'image/png')
    })
    this.expect(cadastro.confirmation.getText())
      .to.eventually.to.equal('Obrigado por se inscrever! Aguarde novidades da nossa loja em breve.S')
      .and.notify(done)
  })
})
