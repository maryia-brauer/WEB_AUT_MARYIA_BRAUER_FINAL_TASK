const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    viewportWidth: 1800,
    viewportHeight: 1200,
    baseUrl: "https://demoqa.com",
  },
});