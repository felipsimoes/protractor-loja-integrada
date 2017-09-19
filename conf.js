'use strict'

exports.config = {

  directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'https://tghcastro.lojaintegrada.com.br/',
  capabilities: {
    browserName: 'chrome'
  },

  framework: 'custom', // set to "custom" instead of cucumber.
  frameworkPath: require.resolve('protractor-cucumber-framework'), // path relative to the current config file
  specs: [
    'features/specifications/*.feature' // Specs here are the cucumber feature files
  ],

  // cucumber command line options
  cucumberOpts: {
    require: ['features/step_definitions/*.steps.js', 'features/support/*.js'], // require step definition files before executing features
    format: ['json:tests_results/results.json'],
    profile: false,
    strict: true
  },

  onPrepare: function () {
    browser.manage().window().maximize() // maximize the browser before executing the feature files
  },

  afterLaunch: function () {
    var reporter = require('cucumber-html-reporter')

    var options = {
      theme: 'bootstrap',
      jsonFile: 'tests_results/results.json',
      output: 'tests_results/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      screenshotsDirectory: 'tests_results/screenshots/',
      storeScreenshots: true
    }

    reporter.generate(options)
    // const report = require('multiple-cucumber-html-reporter')

    // report.generate({
    //   jsonDir: './tests_results/',
    //   reportPath: './tests_results/',
    //   metadata: {
    //     browser: {
    //       name: 'chrome',
    //       version: '60'
    //     },
    //     device: 'Local test machine',
    //     platform: {
    //       name: 'windows',
    //       version: '10'
    //     }
    //   }
    // })
  }
}
