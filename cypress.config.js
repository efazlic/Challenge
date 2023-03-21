const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
//const nodemailer = require("nodemailer");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    viewportHeight: 900, 
    viewportWidth: 1400,
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    video: false,
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents,
  },
});

/*const transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",
    port: 465,
    secure: true,

    auth: {

          user: "edin.fazlic1989@gmail.com",
          pass: "qddlnnjozocfnvwk",  
    },

    logger: true
  });

  var Options = {

    from: "edin.fazlic1989@gmail.com",
    to: "edin.fazlic@endava.com",
  }

  transporter.sendMail(Options, (error, info) => {

      if (error) {
        return console.log(error);  
      }

      console.log("Message sent: %s", info.messageId);
  });*/

  