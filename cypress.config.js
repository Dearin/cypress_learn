const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    //进行cy.request\cy.visit使用,疑问:?
    baseUrl: 'https://10.2.12.126/#/',
  },
  defaultCommandTimeout: 5000,
  retries: {
    "runMode": 1,
    "openMode": 1
  },
  env:{
    debug:"https://10.2.12.126",
    prod:"https://10.2.12.11"
  }
})
