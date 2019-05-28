var webdriver = require('selenium-webdriver')
var driver = new webdriver.Builder().forBrowser('chrome').build();
var fs = require('fs')
var test_img_path = "./C:/Users/Vishnu_Jin/Desktop/Visual_test/BackstopExample/BackstopTests//BackstopJS/backstop_data/bitmaps_test/";


driver.get('https://www.facebook.com/').then(function(){
    driver.findElement(webdriver.By.id('email')).sendKeys('9597560479').then(function(){
        driver.findElement(webdriver.By.id('pass')).sendKeys('9597560479').then(function(){
            console.log("Done");
            driver.takeScreenshot().then(function(img){
                try{
                    test_img_path +=""
                    if(!)
                }
                fs.writeFileSync("img.png",img,'base64');
            })

        })
    })
})
