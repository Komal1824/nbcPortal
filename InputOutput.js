module.exports = {

    link_logo: element(by.css("div.brand-wrap > a[href='/home']")),
    link_home: element(by.css("ul.carna-menu >li >  a[href='/home']")),
    link_howitworks: element(by.css("ul.carna-menu >li >  a[href='#howitworks']")),
    link_login: element(by.css("div.carna-menu-wrap>ul>li>a[href='/login']")),
    link_validate: element(by.css("div.carna-menu-wrap>ul>li>a[href='/validate']")),
    link_receipt: element(by.css("div.carna-menu-wrap>ul>li>a[href='/receipt']")),
    link_movies: element(by.css("div.carna-menu-wrap>ul>li>a[href='/movies']")),
    link_contact: element(by.css("div.carna-menu-wrap>ul>li>a[href='#contact']")),
    link_register: element(by.cssContainingText("Register")),
    link_homePageBanner: element(by.css("div.tp-mask-wrap>div>img[src='../../assets/images/54b46-gerrewardednew.jpg']")),

    text_GetRewarded: element(by.css("div#slide-214-layer-5")),
    text_redeemYourCode: element(by.css("div#slide-214-layer-6")),
    text_HowItWorksSectionHeading: element(by.cssContainingText("How it Works?")),
    text_frequentlyAskedQuestions: element(by.cssContainingText("Frequently Asked Questions")),
    text_Questions: element(by.cssContainingText("Questions")),

    labelName: element(by.xpath("//label[@for='name']")),
    labelEmail: element(by.xpath("//label[@for='email']")),
    labelQuery: element(by.xpath("//label[@for='query']")),

    button_loginInNow: element(by.xpath("//div[@class='tp-mask-wrap' and contains(.,'LOGIN NOW')]")),


    countTiles: function countTiles(tileCount) {
        let tiles = element.all(by.css('div.team-block__details'));
        expect(tiles.count()).toEqual(tileCount);
    },

    faqTileCount: function faqTileCount(tileCount) {
        let faqTiles = element.all(by.css('div.cbp-news__content'));
        expect(l.count()).toEqual(tileCount);
    }

};
