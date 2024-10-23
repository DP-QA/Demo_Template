# Introduction 
This project focuses on automation tests.

# Prerequisites
1. VS Code
2. Node.js
3. git


# Build and Test
After cloning the project, run the following command to install dependencies:
- navigate into selenium-javascript folder 
- npm install
- npm add chromedriver selenium-webdriver
- npm add mocha -D

# Running the Project

- Running All Tests

 • Before running tests please delete "allure-results" and "allure-report" folders from project (if exist) 
 
 To execute all tests, run the following command:
 • npx mocha test-environment/**/*.js --reporter mochawesome (to create mochawesome report)
 • npx mocha test-environment/**/*.js --reporter mocha-allure-reporter (to create allure report) 
 • run the following command to view allure report results:
  npx allure-commandline generate allure-results --clean -o allure-report; npx allure-commandline open allure-report

- Running a Single Test File

 • Before running tests please delete "allure-results" and "allure-report" folders from project (if exist) 
To execute a specific file test, use:
 • npx mocha test-environment/test-cases/foldername/testfilename.js --reporter mochawesome (to create mochawesome report)

 • npx mocha test-environment/test-cases/foldername/testfilename.js --reporter mocha-allure-reporter (to create allure report)

  Examples:
  1- npx mocha test-environment/test-cases/Login/login-test.js --reporter mochawesome (to create mochawesome report)

  2- npx mocha test-environment/test-cases/Login/login-test.js --reporter  mocha-allure-reporter (to create allure report)

- Running a Specific Test in a file
• npx mocha test-environment/test-cases/Login/login-test.js --reporter mochawesome --grep 'Test Case Title'

• run the following command to view allure report results:
  npx allure-commandline generate allure-results --clean -o allure-report; npx allure-commandline open allure-report
