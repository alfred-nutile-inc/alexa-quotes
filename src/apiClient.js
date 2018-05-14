const request = require('request');
const api_url = "https://teamdashboard.site/api/teams"
const team_id = 1
const api_token = process.env.API_TOKEN;

var getRandomQuote = () => {
  let results = request.get(`${api_url}/${team_id}/quotes/random?api_token=${api_token}`, (err, response, body) => {
    if (err) {
      console.log("ERROR", err);
      throw new Error("API Responeded with Error see logs");
    }
    //console.log(response);
    console.log("response here");
  });

  return results;
}

module.exports = {
  getRandomQuote
};
