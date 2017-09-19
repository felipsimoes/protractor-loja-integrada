const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const {defineSupportCode} = require('cucumber')
const EC = protractor.ExpectedConditions

function CustomWorld () {
  chai.use(chaiAsPromised)
  this.expect = chai.expect
  this.EC = EC
}

defineSupportCode(function ({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})
