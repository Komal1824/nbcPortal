describe('Protractor NBC Homepage', function() {
    it('should have a title', function () {
        browser.get('http://p3n.3tlstaging.com/home').then(function () {

            //browser.sleep(5000);
            browser.waitForAngularEnabled(false);
            expect(browser.getTitle()).toEqual('UPHE REWARDS');


            element(by.xpath("//h1[contains(text(),'Participating movies')]")).isPresent().toBe(true);

            element(by.xpath("//h1[contains(text(),'New Release Titles – Code Entry')]")).isPresent().toBe(true);

            element(by.xpath("//h1[contains(text(),'New Releases – Receipt Entry')]")).isPresent().toBe(true);

            element(by.xpath("//h1[contains(text(),'Classic Release Titles')]")).isPresent().toBe(true);


            let list = element.all(by.css('div.team-block__details'));
            expect(list.count()).not.toEqual(0);





        });
    });
}