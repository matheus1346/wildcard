const express = require("express");
const rp = require("request-promise");
const cheerio = require("cheerio");

const app = express();

const { Symbol } = require("./app/models");

app.use(
  express.urlencoded({
    extended: false
  })
);

async function main() {
  const symbols = await Symbol.findAll({ raw: true });
  
  const result = await Promise.all(
    symbols.map(async s => {
      const options = {
        uri: s.path,
        headers: {
          "User-Agent": "Request-Promise"
        },
        transform: function(body) {
          return cheerio.load(body);
        }
      };

      const $ = await rp(options);
      
      const symbolRes = new Object();
      symbolRes.symbol = s.symbol;
      symbolRes.last = $("#last_last").text();  
      symbolRes.change = $("span.arial_20.parentheses").text();      

      return symbolRes;
    })
  );

  //console.log("Result", JSON.stringify(result));
  return JSON.stringify(result);
}

app.get('/prices', (req, res) => {
  main().then((s) => {
      res.send(s);      
  });
});

app.listen(3000);