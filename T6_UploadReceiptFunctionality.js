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

    it('Checking Validate Code Functionality',function() {
        browser.manage().timeouts().implicitlyWait(190000)

        element(by.css("div.carna-menu-wrap>ul>li>a[href='/receipt']")).isPresent().toBe(true);
        element(by.css("div.carna-menu-wrap>ul>li>a[href='/receipt']")).click();

        element(by.css("input#file")).isPresent().toBe(true);
        element(by.css("input#file")).click();

        


    })
    });