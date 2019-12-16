describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('https://upherewards.com/home').then(function()
        {
            browser.sleep(5000);
            expect(browser.getTitle()).toEqual('UPHE REWARDS');


            element(by.css("ul.carna-menu >li >  a[href='/home']")).isPresent().toBe(true);
            element(by.css("ul.carna-menu >li >  a[href='#howitworks']")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='/login']")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='/validate']")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='/receipt']")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='/movies']")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='#contact']")).isPresent().toBe(true);


            element(by.css("div.carna-menu-wrap>ul>li>a[href='/login']")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='/login']")).click();


            element(by.cssContainingText("Sign in")).isPresent().toBe(true);
            element(by.xpath("//p[contains(.,'PLEASE ENTER YOUR EMAIL AND PASSWORD')]")).isPresent().toBe(true);

            element(by.xpath("//label[@for='email']")).isPresent().toBe(true);
            var emailRequired = element(by.xpath("//label[@for='email']/span"));
            expect(emailRequired.getAttribute('class')).toEqual('quform-required');

            element(by.xpath("//label[@for='password']")).isPresent().toBe(true);
            var passswordRequired = element(by.xpath("//label[@for='password']/span"));
            expect(emailRequired.getAttribute('class')).toEqual('quform-required');

            element(by._ngcontent('Login')).click();
            element(by._ngcontent('Email address is required')).isPresent().toBe(true);
            element(by._ngcontent('Password is required')).isPresent().toBe(true);

            element(by.xpath("//label[@for='email']")).sendKeys("komal.rajpal@knoldus.com");
            element(by.xpath("//label[@for='password']")).sendKeys("Tester#123");

            element(by.xpath("//h1[contains(text(),'earn points ')]")).isPresent().toBe(true);


            element(by.css("ul.carna-menu >li >  a[href='/home']")).isPresent().toBe(true);
            element(by.css("ul.carna-menu >li >  a[href='#howitworks']")).isPresent().toBe(true);
            element(by.css("ul.carna-menu >li >  a[href='/rewards']")).isPresent().toBe(true);
            element(by.xpath("//a[contains(.,'Logout')]")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='/validate']")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='/receipt']")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='/movies']")).isPresent().toBe(true);
            element(by.css("div.carna-menu-wrap>ul>li>a[href='#contact']")).isPresent().toBe(true);


            var customlocators = function() {


                by.addLocator('_ngcontent', function(toState,parentelement) {


                    var using = parentelement || document ;
                    var prefixes = ['_ngcontent'];
                    for (var p = 0; p < prefixes.length; ++p) {
                        var selector = '*[' + prefixes[p] + '="' + toState + '"]';
                        var inputs = using.querySelectorAll(selector);
                        if (inputs.length) {
                            return inputs;
                        }
                    }

                });
            }

            module.exports = new customlocators();

        });

    });
});