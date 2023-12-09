// base of the server
const express = require("express");
const { getStockPrices, getHome, postTest, getParamsTest, middleWareInterceptor } = require("./routes");
const app = express();
const port = 5353;

const mustacheExpress = require('mustache-express');

app.engine('html', mustacheExpress());
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');


// MIDDLEWARE
app.use(express.json()); // allows us to retrieve json that may come in the form of a post request
app.use(require("cors")()); // allows cross origin requests
// to authenticate all of your routes, add:
// app.use(middleWareInterceptor) // and now every route would be forbidden, unless you give the password as a query param

// config the host
// https://dashboard.render.com/web/srv-clq1p9ggqk6s738nspf0/deploys/dep-clq30cie9h4c73ahl3u0


// ROUTES = api endpoints
// home route
app.get("/", getHome);

app.get("/api/stock", middleWareInterceptor, async (req, res) => {
    const prices = await getStockPrices(req, res);
    const {stock} = req.query;
    res.render('index', { prices, stock }); // inject/pass data to be used in the template
    // res.render('index', { title: 'Hey', message: 'Hello there!' })
}
);

// <% prices.forEach(price => { %>
//     <li class="mb-2">$<%= price.toFixed(2) %></li>
//     <% }); %>

app.get("/api/testParams/:apiKeyTest", getParamsTest)

app.post("/api/test", postTest);

// server will listen to incoming request at port
app.listen(port, () => console.log(`Startet server on port ${port}`));
