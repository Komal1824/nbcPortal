describe('Protractor NBC Homepage', function() {
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

    it('NBC Portal should have a logo',function()
    {
        //navigation bar
        var logo = link_logo.isPresent().toBe(true);
        highlightElement(logo);
        //nav bar
        var home = link_home.isPresent().toBe(true);
        highlightElement(home);
        var howitWorks = link_howitworks.isPresent().toBe(true);
        highlightElement(howitWorks);
        var login =link_login.isPresent().toBe(true);
        highlightElement(login);
        var validatecode = link_validate.isPresent().toBe(true);
        highlightElement(validatecode);
        var uploadReceipt=link_receipt.isPresent().toBe(true);
        highlightElement(uploadReceipt);
        var movies = link_movies.isPresent().toBe(true);
        highlightElement(movies);
        var support = link_contact.isPresent().toBe(true);
        highlightElement(support);

        //Register link not present
        link_register.isPresent().toBe(false);

        //homepage banner
      link_homePageBanner.isPresent().toBe(true);

        //verify Getrewarded text
       /* element(by.xpath("//div[@class='tp-mask-wrap' and contains(.,'GET REWARDED')]"))
            .isPresent().toBe(true);
*/
        text_GetRewarded.isPresent().toBe(true);

        text_redeemYourCode.isPresent().toBe(true);


        button_loginInNow.isPresent().toBe(true);

        //how it works section
        element(by.cssContainingText("How it Works?")).isPresent().toBe(true);
        let tiles = element.all(by.css('div.team-block__details'));
        expect(tiles.count()).toEqual(3);

        //Frequently asked questions
        element(by.cssContainingText("Frequently Asked Questions")).isPresent().toBe(true);
        let faqTiles = element.all(by.css('div.cbp-news__content'));
        expect(l.count()).toEqual(8);


        //Questions
        element(by.cssContainingText("Questions")).isPresent().toBe(true);

        element(by.xpath("//label[@for='name']")).isPresent().toBe(true);
        var nameRequired = element(by.xpath("//label[@for='name']//span"));
        expect(nameRequired.getAttribute('class')).toEqual('quform-required');

        element(by.xpath("//label[@for='email']")).isPresent().toBe(true);
        var emailRequired = element(by.xpath("//label[@for='email']/span"));
        expect(emailRequired.getAttribute('class')).toEqual('quform-required');

        element(by.xpath("//label[@for='query']")).isPresent().toBe(true);
        var messageRequired = element(by.xpath("//label[@for='query']/span"));
        expect(messageRequired.getAttribute('class')).toEqual('quform-required');

        //navigation bar
        var logo = element(by.css("div.brand-wrap > a[href='/home']")).isPresent().toBe(true);
        highlightElement(logo);

    })






            //footer Elements

    element(by.xpath("//h6//a[@routerlink='/movies']")).isPresent().toBe(true);
    element(by.xpath("//h6//a[@href='https://www.nbcuniversal.com/privacy/']")).isPresent().toBe(true);
    element(by.xpath("//h6//a[@href='//s3-us-west-2.amazonaws.com/platform3-portalv3-production/nbc/pdf/upherewards_terms.pdf']")).isPresent().toBe(true);



            highlightElement = function(el){
                console.log("highlight--");

                console.log("locator---:"+el.locator());

                return browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);",el.getWebElement(), "color: Red; border: 2px solid red;").
                then(function(resp){
                    browser.sleep(2000);
                    return el;
                },function(err){
                    console.log("error is :"+err);
                });
            };

});
