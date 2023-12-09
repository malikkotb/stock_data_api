const { fetchPrice } = require("../utils");
const path = require("path");
// Variables
const baseURL = (stock) =>
  `https://finance.yahoo.com/quote/${stock}/history?p=${stock}`;

// HANDLERS
async function getHome(req, res) {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stock Data API</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #edfdf3;
      }

      h1 {
        color: #2f603e;
      }

      p {
        color: #333;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to the Stock Data API</h1>
    <p>This project is a Stock Data API that utilizes web scraping techniques with Node.js, Express.js, and Cheerio to fetch the last stock prices of a desired stock. It provides a simple and convenient way for users to retrieve stock information based on the 4-letter keyword associated with a stock.</p>

    <h2>Usage</h2>
    <p>To fetch the last stock prices of a desired stock, use the following API endpoint:</p>

    <a href="https://stock-api-k98u.onrender.com/api/stock?stock=[name_of_stock]&password=[password]" target="_blank">
    https://stock-api-k98u.onrender.com/api/stock?stock=[name_of_stock]&password=[password]
  </a>
    <p>Replace <code>[name_of_stock]</code> with the 4-letter keyword associated with the stock you want information about. The password is tricky, but count to 4.</p>
  </body>
  </html>
`;
  res.status(200).send(html);
}

async function getStockPrices(req, res) {
  const { stock } = req.query;
  console.log("Stock: " + stock);
  if (!stock) {
    return res.sendStatus(403);
  }

  // otherwise we have access to the stock and we can fetch it
  try {
    const stockDataUrl = baseURL(stock);
    const stockRes = await fetch(stockDataUrl);
    const data = await stockRes.text();
    const prices = fetchPrice(data); //data is the html
    // console.log(prices);
    return prices;
    // res.status(200).send({ prices });
  } catch (error) {
    console.log("There was an error", error);
    res.sendStatus(500);
  }
}

async function postTest(req, res) {
  const { message } = req.body;
  console.log("This is the message: ", message);
  res.sendStatus(200);
}

const getParamsTest = (req, res) => {
  const { apiKeyTest } = req.params;
  console.log("THE APIKEY IS: " + apiKeyTest);
  res.sendStatus(200);
};

function middleWareInterceptor(req, res, next) {
  // middleware is great for intercepting routes (rate limit our api; or we have an APIkey that people had to use,
  // we can protect certain routes by just passing in the middleWareInterceptor in between the path
  // and the handler)
  console.log("I am the middleware");
  const { password } = req.query;
  if (password !== "1234") {
    return res.sendStatus(403);
  }
  next();
}

module.exports = {
  getStockPrices,
  getHome,
  postTest,
  getParamsTest,
  middleWareInterceptor,
};
