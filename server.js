// base of the server
const express = require("express");
const { getStockPrices, getHome, postTest, getParamsTest, middleWareInterceptor } = require("./routes");
const app = express();
const port = 5353;

// MIDDLEWARE
app.use(express.json()); // allows us to retrieve json that may come in the form of a post request
app.use(require("cors")()); // allows cross origin requests
// to authenticate all of your routes, add:
// app.use(middleWareInterceptor) // and now every route would be forbidden, unless you give the password as a query param

// ROUTES = api endpoints
// home route
app.get("/", getHome);

app.get("/api/stock", middleWareInterceptor, getStockPrices);

app.get("/api/testParams/:apiKeyTest", getParamsTest)

app.post("/api/test", postTest);

// server will listen to incoming request at port
app.listen(port, () => console.log(`Startet server on port ${port}`));
