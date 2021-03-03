describe('angularjs', function() {
    it('should greet the named user', function() {
     browser.get('https://app.staging.curogram.com/');
     browser.sleep(10000);
     browser.manage().window().maximize();
     element(by.buttonText('LOGIN')).click();
     element(by.id('login-email')).sendKeys('natanielle.libron@curogram.com');
     element(by.id('login-password')).sendKeys('Helloworldd121');
     element(by.xpath("/html/body/curo-root/curo-intel-main-layout/curo-login/div/div/form/div[3]/button")).click();
   //  browser.sleep(5000);
 //    element(by.xpath("/html/body/app-root/app-main-menu/div/aside/section/div[2]/div[1]")).click();

    });
  });