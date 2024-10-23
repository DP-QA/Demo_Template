require('chromedriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
const { Builder, Key, By, until } = require('selenium-webdriver');
const AppSettings = require('../../../AppSettings.json');
const TestDataLogin = require('../../test-assets/test-data-files/Login/Login-testData.json');
const axios = require('axios'); 
const https = require('https'); 

const LoginPage = require('../../../pages/LoginPage/login-page'); 
const HomePage = require('../../../pages/HomePage/home-page');
const { label, link, issue, tms, step, attachment } = require("allure-js-commons");


describe('Login Cases', function () {
    let driver;
    let loginPage; 
    let homePage;

    this.timeout(60000);

    beforeEach(async function() {
        // Create a new instance of the driver for each test
        const options = new chrome.Options();        
        options.addArguments('--disable-notifications');

        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
        await driver.manage().window().maximize();
        await driver.get(AppSettings.Url);
        loginPage = new LoginPage(driver);
        homePage = new HomePage(driver);
    });

    afterEach(async function() {
        // Quit the driver after each test
        await driver.quit(); 
    });

    it('Valid Credentials', async function() {
        await loginPage.FillLoginCredentials(TestDataLogin.validUserName, TestDataLogin.validPassword, driver);
        await homePage.VerifyProfileButtonDisplayed(driver);
        await homePage.ClickProfile(driver);
        await homePage.ClickLogout(driver);
        await homePage.VerifyProfileButtonNotDisplayed(driver);
    });

    it('Invalid Credentials 1', async function() {
        await loginPage.FillLoginCredentials(TestDataLogin.inValidUserName_1, TestDataLogin.InvalidPassword_1, driver);
        await homePage.VerifyProfileButtonDisplayed(driver);
        // await homePage.VerifyProfileButtonNotDisplayed(driver);
    });

    it('Invalid Credentials 2', async function() {
        await loginPage.FillLoginCredentials(TestDataLogin.inValidUserName_2, TestDataLogin.InvalidPassword_2, driver);
        await homePage.VerifyProfileButtonDisplayed(driver);
        // await homePage.VerifyProfileButtonNotDisplayed(driver);
    });

    it('Invalid Credentials 3', async function() {
        await loginPage.FillLoginCredentials(TestDataLogin.inValidUserName_3, TestDataLogin.InvalidPassword_3, driver);
        await homePage.VerifyProfileButtonDisplayed(driver);
        // await homePage.VerifyProfileButtonNotDisplayed(driver);
    });

});
