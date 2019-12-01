let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {


    it('navigate to url', function () {

        homepage.get('https://juliemr.github.io/protractor-demo//');
        browser.sleep(2000);

    })

    it('refresh webpage', function () {

        homepage.refresh();
        browser.sleep(2000);

    })



    it('addition test', function () {

        homepage.enterFirst_input('100');


        homepage.enterSecond_input('150');

        homepage.goButtonclick();

        homepage.verifyResult('250');



    })

    it('subtraction test', function () {

        homepage.enterFirst_input('100');


        homepage.enterSecond_input('150');

        homepage.goButtonclick1();

        homepage.verifyResult('250');



    })

    it('navigate back', function () {

        browser.get("https://angular.io/");


        browser.navigate().back();

        browser.sleep(2000);

    })

    it('navigate forward', function () {

        browser.navigate().forward();
        browser.sleep(2000);

    })

})