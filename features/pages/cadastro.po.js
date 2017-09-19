class CadastroPage {
  constructor () {
    this.email_field = element(by.css("input[name='email']"))
    this.button = element(by.xpath("//*[@id='corpo']/div/div[1]/div[1]/div[2]/div/div/div/div/div[1]/button"))
    this.confirmation = element(by.css('#corpo > div > div.secao-principal.row-fluid > div.coluna.span3.esquerda > div:nth-child(2) > div > div > div > div > div.newsletter-confirmacao > span'))
    this.alert = element(by.xpath("//*[@id='corpo']/div/div[1]/div[1]/div[2]/div/div/div/div/p[2]"))
  }

  visit () {
    browser.get(browser.baseUrl)
  }

  cadastrarNewsletter (email) {
    this.email_field.sendKeys(email)
    this.button.click()
  }
}

module.exports = CadastroPage
