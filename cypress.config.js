const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'tsoft-xbalcercik',
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'src/tests/**/*.cy.js',
  },
})