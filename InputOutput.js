function allLocators()
{
    this.link_logo = element(by.css("div.brand-wrap > a[href='/home']"));
    this.link_home = element(by.css("ul.carna-menu >li >  a[href='/home']"));
    this.link_howitworks = element(by.css("ul.carna-menu >li >  a[href='#howitworks']"));
    this.link_login = element(by.css("div.carna-menu-wrap>ul>li>a[href='/login']"));
    this.link_validate = element(by.css("div.carna-menu-wrap>ul>li>a[href='/validate']"));
    this.link_receipt = element(by.css("div.carna-menu-wrap>ul>li>a[href='/receipt']"));
    this.link_movies = element(by.css("div.carna-menu-wrap>ul>li>a[href='/movies']"));
    this.link_contact = element(by.css("div.carna-menu-wrap>ul>li>a[href='#contact']"));
    this.link_register = element(by.cssContainingText("Register"));
    this.link_homePageBanner = element(by.css("div.tp-mask-wrap>div>img[src='../../assets/images/54b46-gerrewardednew.jpg']"));

    this.text_GetRewarded = element(by.css("div#slide-214-layer-5"));
    this.text_redeemYourCode =  element(by.css("div#slide-214-layer-6"));
    this.text_HowItWorksSectionHeading = element(by.cssContainingText("How it Works?"));
    this.text_frequentlyAskedQuestions   = element(by.cssContainingText("Frequently Asked Questions"));
    this.text_Questions = element(by.cssContainingText("Questions"));

    this.labelName = element(by.xpath("//label[@for='name']"));
    this.labelEmail = element(by.xpath("//label[@for='email']"));
    this.labelQuery = element(by.xpath("//label[@for='query']"));

    this.button_loginInNow= element(by.xpath("//div[@class='tp-mask-wrap' and contains(.,'LOGIN NOW')]"));

    this.link_logo = element(by.css("div.brand-wrap > a[href='/home']"));
    this.link_logo = element(by.css("div.brand-wrap > a[href='/home']"));
    this.link_logo = element(by.css("div.brand-wrap > a[href='/home']"));



    function countTiles(tileCount)
    {
        let tiles = element.all(by.css('div.team-block__details'));
        expect(tiles.count()).toEqual(tileCount);
    }

    function faqTileCount(tileCount)
    {
        let faqTiles = element.all(by.css('div.cbp-news__content'));
        expect(l.count()).toEqual(tileCount);
    }



}