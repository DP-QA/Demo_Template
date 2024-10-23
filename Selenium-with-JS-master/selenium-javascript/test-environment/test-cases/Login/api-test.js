require('chromedriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
const { Builder, Key, By, until } = require('selenium-webdriver');
const AppSettings = require('../../../AppSettings.json');
const TestDataLogin = require('../../test-assets/test-data-files/Login/Login-testData.json');
const axios = require('axios'); 
const https = require('https'); 


describe('API test cases', function () {
    
    it('Get Users Via API', async function() {
        try {
            const response = await axios.get('https://reqres.in/api/users?page=2'); 
            assert.equal(response.status, 200, 'Expected status code 200');
        } catch (error) {
            console.error('API request failed:', error);
            assert.fail('API request failed');
        }
    });


    it('Create User Via POST API', async function() {
        try {
            const apiUrl = `https://reqres.in/api/users`; 

            const requestBody = {
                name: 'morpheus',
                job: 'leader'
            };

            const agent = new https.Agent({
                rejectUnauthorized: false
            });

            const response = await axios.post(apiUrl, requestBody, { httpsAgent: agent });
            assert.equal(response.status, 201, 'Expected status code 201'); 
            console.log('POST API Response:', response.data);
        } catch (error) {
            console.error('API request failed:', error.message); 

            if (error.response) {
                console.error('Error status code:', error.response.status); 
                console.error('Error response data:', error.response.data); 
            }

            assert.fail(error.message);
        }    
    });
});
