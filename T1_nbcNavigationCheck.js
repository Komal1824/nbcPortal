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



});