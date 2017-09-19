const {defineSupportCode} = require('cucumber')

defineSupportCode(function ({After, Before}) {
  Before(function () {
    // This hook will be executed before all scenarios
  })

  Before({tags: '@email'}, function () {
    // This hook will be executed before scenarios tagged with @foo
  })

  Before({tags: '@foo and @bar'}, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
  })

  Before({tags: '@foo or @bar'}, function () {
    // This hook will be executed before scenarios tagged with @foo or @bar
  })

  // You can use the following shorthand when only specifying tags
  Before('@foo', function () {
    // This hook will be executed before scenarios tagged with @foo
  })

  After(function () {
    // Assuming this.driver is a selenium webdriver
    // var world = this

    // browser.takeScreenshot().then(function (buffer) {
    //   return world.attach(buffer, 'image/png')
    // })
    // driver.takeScreenshot()
    //   .then(function (buffer) {
    //     const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64')
    //     scenario.attach(decodedImage, 'image/png')
    //   })
    // return this.driver.quit()
  })
})
