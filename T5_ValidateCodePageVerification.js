describe('NBC Portal', () => {
    it('Should navigate to NBC Portal', () => {
        browser.get('http://nbc.3tlstaging.com/home')
            .then(() => (browser.getTitle()))
            .then((title)=>(console.log(title)))
    });

    it('NBC should have a title',function()
    {
        browser.manage().timeouts().implicitlyWait(190000)
        expect(browser.getTitle()).toEqual('UPHE REWARDS')
    })

    it('Checking Validate Code Functionality',function()
    {
        browser.manage().timeouts().implicitlyWait(190000)

        element(by.css("div.carna-menu-wrap>ul>li>a[href='/validate']")).isPresent().toBe(true);
        element(by.css("div.carna-menu-wrap>ul>li>a[href='/validate']")).click();
        element(by.xpath(" //p[contains(.,'Enter your code to get started.')]")).isPresent().toBe(true);

        //error messages
        element(by.xpath("//button//span[contains(.,'Verify Now')]")).isPresent().toBe(true);
        element(by.xpath("//button//span[contains(.,'Verify Now')]")).click();

        element(by.xpath("//div[contains(@class,'alert') and contains(.,' Code is required')]")).isPresent().toBe(true);
        element(by.xpath("//div[contains(@class,'alert') and contains(.,'Please check the captcha checkbox.')]")).isPresent().toBe(true);

        



        element(by.xpath("//h1[contains(text(),'earn points ')]")).isPresent().toBe(true);

        element(by.xpath("//img[@src='../../assets/images/earnpoints/upload.jpg']")).isPresent().toBe(true);
        element(by.xpath("//img[@src='../../assets/images/earnpoints/referafriend.jpg']")).isPresent().toBe(true);
        element(by.xpath("//img[@src='https://s3-us-west-2.amazonaws.com/platform3-portalv3-production/nbc/action_banners/complete_survey2.png']"))
            .isPresent().toBe(true);

        //watch tailor count is not ealt to zero
        let list = element.all(by.xpath("../../assets/images/earnpoints/video.jpg"));
        expect(list.count()).not.toEqual(0);

    })




});