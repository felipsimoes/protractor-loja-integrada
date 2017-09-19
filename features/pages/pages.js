const faker = require('faker')

class Pages {
  constructor () {
    this.name = faker.name.findName()
    this.email = faker.internet.email()
  }
}

module.exports = Pages
