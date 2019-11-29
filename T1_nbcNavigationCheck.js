describe('NBC Portal', () => {
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

    });

 it('NBC should have a title',function()
    {
        //browser.manage().timeouts().pageLoadTimeout(45000);
        //browser.manage().timeouts().implicitlyWait(50000);

        /!*var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath(""))),100000)*!/

       /!* beforeEach(function (done) {
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



});