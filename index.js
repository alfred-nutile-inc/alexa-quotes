'use strict';
const https = require('https');
require("dotenv").config();

const api_url = "https://teamdashboard.site/api/teams"
const team_id = 1
const api_token = process.env.API_TOKEN;



exports.handler = function (event, context, callback) {
  //let quote = apiClient.getRandomQuote();
  let body = '';

  const req = https.request(`${api_url}/${team_id}/quotes/random?api_token=${api_token}`, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
      body = JSON.parse(body);
      let formatted = `${body.quote} by ${body.by}`;
      var response = {
        statusCode: 200,
        body: formatted
      };
      console.log("response: " + response.body)
      callback(null, response);
    });
  });

  req.on('error', callback);
  req.end();

};
