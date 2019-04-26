var request = require("request");
var cheerio = require("cheerio");
var axios = require("axios");

var scrape = function(cb) {
  axios.get("https://www.nytimes.com/section/world").then(function(response) {
    var $ = cheerio.load(response.data);
    var articles = [];

    $("div.story-body").each(function(i, element) {
      var head = $(this)
        .children("h2")
        .text();
      var sum = $(this)
        .children("p")
        .text();
   
    });
    cb(articles);
  });
};

module.exports = scrape;
