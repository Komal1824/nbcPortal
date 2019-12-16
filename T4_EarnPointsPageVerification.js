describe('Earn points Page ', function() {
    it('verification and validation of earn points page', function() {
        browser.get('https://upherewards.com/home').then(function()
        {
            browser.sleep(5000);
            expect(browser.getTitle()).toEqual('UPHE REWARDS');

            element(by.css("div.carna-menu-wrap>ul>li>a[href='/login']")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='/login']")).click();
            element(by.cssContainingText("Sign in")).isPresent().toBe(true);
            element(by.xpath("//p[contains(.,'PLEASE ENTER YOUR EMAIL AND PASSWORD')]")).isPresent().toBe(true);

            element(by.xpath("//label[@for='email']")).sendKeys("vimalesh@knoldus.com");
            element(by.xpath("//label[@for='password']")).sendKeys("12345678");

            element(by.xpath("//h1[contains(text(),'earn points ')]")).isPresent().toBe(true);

            element(by.xpath("//img[@src='../../assets/images/earnpoints/upload.jpg']")).isPresent().toBe(true);
            element(by.xpath("//img[@src='../../assets/images/earnpoints/referafriend.jpg']")).isPresent().toBe(true);
            element(by.xpath("//img[@src='https://s3-us-west-2.amazonaws.com/platform3-portalv3-production/nbc/action_banners/complete_survey2.png']"))
                .isPresent().toBe(true);

            //watch tailor count is not ealt to zero
            let list = element.all(by.xpath("../../assets/images/earnpoints/video.jpg"));
            expect(list.count()).not.toEqual(0);

            //top right corner user name verification
            element(by.css("p.user-name")).isPresent().toBe(true);
            element(by.css("p.pts")).isPresent().toBe(true);
            element(by.css("p.downloads")).isPresent().toBe(true);

            //pagination
            let pages = element.all(by.css("a.page-link"));
            expect(pages.count()).toEqual(8);

            element(by.xpath("//a[@aria-label='Previous']")).isPresent().toBe(true); // previous link
            element(by.xpath("//a[@aria-label='Next']")).isPresent().toBe(true); // next link

            //Logout
            element(by.xpath("//a[contains(.,'Logout')]")).isPresent().toBe(true);
            element(by.xpath("//a[contains(.,'Logout')]")).click();



        });

    });
});