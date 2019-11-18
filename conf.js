exports.config = {
    framework : 'jasmine',
    specs : ['./nbcNavigationCheck.js'],
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect :true,
    capabilities:{
        'browserName': 'chrome',
        },
        onPrepare : function (){
            browser.manage().window().maximize();

    }
    //for chrome cababilities need not be defined.
    //for firefox and IE . capabilities should b e defined in this config file.

};
