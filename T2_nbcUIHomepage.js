describe('Protractor NBC Homepage', function () {
    let originalTimeout;

    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    let objectHomepage = require("./InputOutput.js");

    it('should have a title', async () => {
        await browser.get('https://upherewards.com/home');
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;

        expect(browser.getTitle()).toEqual('UPHE REWARDS');
    });

    it('NBC Portal should have a logo', function () {
        // console.log('----------------', objectHomepage);
        // console.log('++++++++++++', objectHomepage.link_logo);
        //navigation bar

        expect((objectHomepage.link_logo).isPresent()).toBe(true)
        expect((objectHomepage.link_home).isPresent()).toBe(true)
        expect((objectHomepage.link_howitworks).isPresent()).toBe(true)
        expect((objectHomepage.link_login).isPresent()).toBe(true)
        expect((objectHomepage.link_validate).isPresent()).toBe(true)
        expect((objectHomepage.link_receipt).isPresent()).toBe(true)
        expect((objectHomepage.link_movies).isPresent()).toBe(true)
        expect((objectHomepage.link_contact).isPresent()).toBe(true)

        //Register link not present
        expect((objectHomepage.link_register).isPresent()).toBe(false)

        //homepage banner
        expect((objectHomepage.link_homePageBanner).isPresent()).toBe(true)

        /*
        var validatecode = objectHomepage.link_validate.isPresent().toBe(true);
        //highlightElement(validatecode);
        var uploadReceipt=objectHomepage.link_receipt.isPresent().toBe(true);
        //highlightElement(uploadReceipt);
        var movies = objectHomepage.link_movies.isPresent().toBe(true);
       // highlightElement(movies);
        var support = objectHomepage.link_contact.isPresent().toBe(true);
        //highlightElement(support);

        //Register link not present
        objectHomepage.link_register.isPresent().toBe(false);

        //homepage banner
        objectHomepage.link_homePageBanner.isPresent().toBe(true);

        //verify Getrewarded text
        /!*element(by.xpath("//div[@class='tp-mask-wrap' and contains(.,'GET REWARDED')]"))
            .isPresent().toBe(true);*!/
        objectHomepage.text_GetRewarded.isPresent().toBe(true);
        objectHomepage.text_redeemYourCode.isPresent().toBe(true);
        objectHomepage.button_loginInNow.isPresent().toBe(true);

        //how it works section
        objectHomepage.text_HowItWorksSectionHeading.isPresent().toBe(true);
        countTiles(3);

        //Frequently asked questions
        objectHomepage.text_frequentlyAskedQuestions.isPresent().toBe(true);
        faqTileCount(8);


        //Questions
        text_Questions.isPresent().toBe(true);

        objectHomepage.labelName.isPresent().toBe(true);
        var nameRequired = element(by.xpath("//label[@for='name']//span"));
        expect(nameRequired.getAttribute('class')).toEqual('quform-required');

        objectHomepage.labelEmail.isPresent().toBe(true);
        var emailRequired = element(by.xpath("//label[@for='email']/span"));
        expect(emailRequired.getAttribute('class')).toEqual('quform-required');

        objectHomepage.labelQuery.isPresent().toBe(true);
        var messageRequired = element(by.xpath("//label[@for='query']/span"));
        expect(messageRequired.getAttribute('class')).toEqual('quform-required');

        //navigation bar
        var logo = element(by.css("div.brand-wrap > a[href='/home']")).isPresent().toBe(true);*/
        // highlightElement(logo);

    })


    //footer Elements
  /*  it('footer elements check', async () => {
        element(by.xpath("//h6//a[@routerlink='/movies']")).isPresent().toBe(true);
        element(by.xpath("//h6//a[@href='https://www.nbcuniversal.com/privacy/']")).isPresent().toBe(true);
        element(by.xpath("//h6//a[@href='//s3-us-west-2.amazonaws.com/platform3-portalv3-production/nbc/pdf/upherewards_terms.pdf']")).isPresent().toBe(true);
    });
*/

    /* highlightElement = function(el){
         console.log("highlight--");

         console.log("locator---:"+el.locator());

         return browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);",el.getWebElement(), "color: Red; border: 2px solid red;").
         then(function(resp){
             browser.sleep(2000);
             return el;
         },function(err){
             console.log("error is :"+err);
         });
     };*/

});
