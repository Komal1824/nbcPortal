describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('https://upherewards.com/home').then(function()
        {
            browser.sleep(5000);
            expect(browser.getTitle()).toEqual('UPHE REWARDS');
        });

    });
});
