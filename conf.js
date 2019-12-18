//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    framework: 'jasmine',
    specs: ['./T2_nbcUIHomepage.js'],
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
    },
    allScriptsTimeout: 2400000,
    //for screenshots
    onPrepare : function()
      {
        browser.driver.manage().window().maximize();
        /*jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        )*/
      }
    //for chrome cababilities need not be defined.
    //for firefox and IE . capabilities should b e defined in this config file.

};
