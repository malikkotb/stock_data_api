const { fetchPrice } = require("../utils");

// Variables
const baseURL = (stock) =>
  `https://finance.yahoo.com/quote/${stock}/history?p=${stock}`;

// HANDLERS
async function getHome(req, res) {
  res.sendStatus(200).send({ message: "Thanks for trying our API!" });
}

async function getStockPrices(req, res) {
  const { stock } = req.query;
  console.log("Stock Ticker: " + stock);
  if (!stock) {
    return res.sendStatus(403);
  }

  // otherwise we have access to the stock and we can fetch it
  try {
    const stockDataUrl = baseURL(stock);
    const stockRes = await fetch(stockDataUrl);
    const data = await stockRes.text();
    const prices = fetchPrice(data); //data is the html
    console.log(prices);
    res.status(200).send({ prices });
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
  if (password !== '1234') {
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
