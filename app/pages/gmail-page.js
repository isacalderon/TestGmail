var expect = require('chai').expect


//const todoList = element(by.xpath('//ul//li//label//span'));

exports.writeEmail=(to, subject, message)=>{
    let toInput= by.css("textarea[name='to']");         
    browser.findElement(toInput).sendKeys(to);
    browser.sleep(1000); 
   
     let subjectInput= by.css("input[name='subjectbox']");
     browser.findElement(subjectInput).sendKeys(subject); 
     browser.sleep(1000); 

    let body= by.css("div[class='Am Al editable LW-avf tS-tW']"); 
    browser.findElement(body).sendKeys(message);
     
     
    return browser.sleep(3000); 

}

exports.clickElement=(browser, element)=>{
    let EC = protractor.ExpectedConditions;    
    let isClickable = EC.elementToBeClickable(element);              
    browser.wait(isClickable, 20000); //wait for an element to become clickable
    element.click();  
}

exports.isDisplayedtheElement=(data)=>{
    let isDisplayed= expect(data.isDisplayed()).toBe(true);
    return assert.isTrue(Boolean(isDisplayed));
}


exports.clickButton = (buttonElement) => {
    let EC = protractor.ExpectedConditions;
    var isClickable = EC.elementToBeClickable(buttonElement);              
    browser.wait(isClickable, 20000); //wait for an element to become clickable
    buttonElement.click();  
    browser.sleep(5000);
}

exports.validateData=()=>{
    profileCbox.getText().then((result) => {
        expect(result).to.equal('torredionisio9@gmail.com');
    })
}
