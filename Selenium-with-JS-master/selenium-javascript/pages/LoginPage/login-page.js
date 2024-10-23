const { By } = require("selenium-webdriver/lib/by");
const { Key } = require("selenium-webdriver/lib/input");
const Locators = require('../../pages/LoginPage/login.locators.json');
const {until} = require('selenium-webdriver');



class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async FillLoginCredentials(userName, password, driver) {

        await driver.wait(until.elementLocated(By.id(Locators.userNameTextBox)));
        await this.driver.findElement(By.id(Locators.userNameTextBox)).sendKeys(userName);

        await driver.wait(until.elementLocated(By.id(Locators.passwordTextBox)));
        await this.driver.findElement(By.id(Locators.passwordTextBox)).sendKeys(password);

        await driver.wait(until.elementLocated(By.id(Locators.loginButton)));
        await this.driver.findElement(By.id(Locators.loginButton)).click();
        
    }
}

module.exports = LoginPage;