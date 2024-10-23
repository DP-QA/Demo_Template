const { By, until, Key } = require('selenium-webdriver');

/**
 * Clicks on an element.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} selector - The CSS selector of the element.
 */
async function clickElement(driver, selector) {
    const element = await driver.findElement(By.css(selector));
    await element.click();
}

/**
 * Sends text to an input field.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} selector - The CSS selector of the element.
 * @param {string} text - The text to be sent.
 */
async function sendText(driver, selector, text) {
    const element = await driver.findElement(By.css(selector));
    await element.clear(); // clear existing text before sending new one
    await element.sendKeys(text);
}

/**
 * Waits for an element to be visible on the page.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} selector - The CSS selector of the element.
 * @param {number} timeout - Maximum time to wait in milliseconds.
 */
async function waitForElementVisible(driver, selector, timeout = 10000) {
    const element = await driver.findElement(By.css(selector));
    await driver.wait(until.elementIsVisible(element), timeout);
}

/**
 * Gets the text of an element.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} selector - The CSS selector of the element.
 * @returns {Promise<string>} - The text of the element.
 */
async function getElementText(driver, selector) {
    const element = await driver.findElement(By.css(selector));
    return await element.getText();
}

/**
 * Checks if an element is present on the page.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} selector - The CSS selector of the element.
 * @returns {Promise<boolean>} - Returns true if the element is found, otherwise false.
 */
async function isElementPresent(driver, selector) {
    const elements = await driver.findElements(By.css(selector));
    return elements.length > 0;
}

/**
 * Waits for an element to be clickable and clicks on it.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} selector - The CSS selector of the element.
 * @param {number} timeout - Maximum time to wait in milliseconds.
 */
async function waitForElementClickable(driver, selector, timeout = 10000) {
    const element = await driver.wait(until.elementLocated(By.css(selector)), timeout);
    await driver.wait(until.elementIsEnabled(element), timeout);
    await element.click();
}

/**
 * Scrolls to an element on the page.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} selector - The CSS selector of the element.
 */
async function scrollToElement(driver, selector) {
    const element = await driver.findElement(By.css(selector));
    await driver.executeScript("arguments[0].scrollIntoView();", element);
}

/**
 * Presses a specific key on the page.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} key - The key to press (use Key class from selenium).
 */
async function pressKey(driver, key) {
    await driver.actions().sendKeys(key).perform();
}

/**
 * Takes a screenshot of the current browser window.
 * @param {WebDriver} driver - The WebDriver instance.
 * @param {string} filepath - The path to save the screenshot.
 */
async function takeScreenshot(driver, filepath) {
    const screenshot = await driver.takeScreenshot();
    const fs = require('fs');
    fs.writeFileSync(filepath, screenshot, 'base64');
}

module.exports = {
    clickElement,
    sendText,
    waitForElementVisible,
    getElementText,
    isElementPresent,
    waitForElementClickable,
    scrollToElement,
    pressKey,
    takeScreenshot
};
