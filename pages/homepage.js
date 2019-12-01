let homepage = function(){

    var first_input = element(by.model('first'));
    var second_input = element(by.model('second'));
    var gobutton  = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){

        browser.get(url);
    }
    this.refresh = function(){
        browser.refresh();
    }

    this.enterFirst_input = function(firstNo){
     first_input.sendKeys(firstNo);

    }

    this.enterSecond_input = function(secondNo){
        second_input.sendKeys(secondNo);
   
       }
      
    this.goButtonclick = function(){

        gobutton.click();
    }


    this.verifyResult = function(result){

        var ans = element(by.cssContainingText('.ng-binding', result));
          expect(ans.getText()).toEqual(result);
    }
    
    browser.sleep(3000);

};

module.exports = new homepage();