const { By } = require("selenium-webdriver/lib/by");
const { Key } = require("selenium-webdriver/lib/input");
const Locators = require('../HomePage/home.locators.json');
const {until} = require('selenium-webdriver');
const assert = require('assert');

class HomePage {
    constructor(driver) {
        this.driver = driver;
    }

    async ClickProfile(driver) {

        await driver.sleep(5000); 
        const profileButton = await driver.wait(until.elementLocated(By.className(Locators.profileButton)));
        const actions = driver.actions({ bridge: true });
        
        await actions.move({ origin: profileButton }).perform();
    
        await this.driver.findElement(By.className(Locators.profileButton)).click();                
    }

    async ClickLogout(driver) {

        await driver.wait(until.elementLocated(By.xpath(Locators.logoutButton)));
        await this.driver.findElement(By.xpath(Locators.logoutButton)).click();        
    }

    async VerifyProfileButtonNotDisplayed(driver) {
      
        await driver.sleep(1000); 
        const elements = await driver.findElements(By.className(Locators.profileButton));  
        // If element lenght is not found then it should be equal to Zero
        assert.equal(elements.length, 0, 'Profile button should not be displayed');
    }

    async VerifyProfileButtonDisplayed(driver) {
        await driver.sleep(1000); 
        const elements = await driver.findElements(By.className(Locators.profileButton));
        
        // If element lenght is found then it should not be equal to Zero
        assert.notEqual(elements.length , 0, "not ");
       
    }
    



}

module.exports = HomePage;