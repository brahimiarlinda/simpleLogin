const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*.test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.facebook.com',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'simpleLogin',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    autoLogin: {
      enabled: true,
      saveToFile: false,
      inject: 'LoginAs',
      users: {
        admin: {
          // loginAdmin function is defined in `steps_file.js`
          login: async (I) => await I.retry(2).loginAdmin(),
          //if we see `Admin` on page, we assume we are logged in
          check: (I) => {
            I.seeInCurrentUrl('/');
            //I.see('#navItem_1204785325 > a > divasdfa');
          }
        }
      }
    }
  }
}