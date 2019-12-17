/*describe('NBC Portal', () => {
    it('Should navigate to NBC Portal', () => {
        browser.get('http://nbc.3tlstaging.com/home')
            .then(() => (browser.getTitle()))
            .then((title)=>(console.log(title)))



        var originalTimeout;

        beforeEach(function() {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 480000;
        });

        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });

    });*/


describe('NBC Testing', function () {

    let originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    /* browser.get('');
     beforeEach(function (done) {
         window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
         setTimeout(function () {
             console.log('inside timeout');
             done();
         }, 500);
     });*/
    /* it('passes', function () {
         expect({}).toBeDefined();
     });
     */

    /*beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000;
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });*/

    /*beforeAll(function () {
        console.log('------------------', browser, '.................');
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000;
        console.log(jasmine.DEFAULT_TIMEOUT_INTERVAL);
        browser.get('http://nbc.3tlstaging.com/home');
    });

    it('Should navigate to NBC Portal', () => {
        console.log(jasmine.DEFAULT_TIMEOUT_INTERVAL);
        console.log('1', browser.getTitle(), '2');
        /!*brow.then((x) => {
            console.log('abc', x);
        })*!/
    });*/

    it('should have a title', async () => {
        await browser.get('https://upherewards.com/home');
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;

        expect(browser.getTitle()).toEqual('UPHE REWARDS');
    });

});

/*it('NBC should have a title',function()
   {
       //browser.manage().timeouts().pageLoadTimeout(45000);
       //browser.manage().timeouts().implicitlyWait(50000);

     /!*  var EC = protractor.ExpectedConditions;
       browser.wait(EC.visibilityOf(element(by.xpath(""))),100000);*!/

       beforeEach(function (done) {
           window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
           setTimeout(function () {
               console.log('inside timeout');
               done();
           }, 50000);
       });


       var originalTimeout;

       beforeEach(function() {
           originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
           jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
       });

       afterEach(function() {
           jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
       });

       expect(browser.getTitle()).toEqual('UPHE REWARDS')
   })



});*/