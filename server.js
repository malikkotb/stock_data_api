// base of the server

const express = require('express')
const cheerio = require('cheerio')
const app = express()
const port = 5353

// middleware
app.use(express.json()) // allows us to retrieve json that may come in the form of a post request
app.use(require('cors')) // allows cross origin requests

// routes = api endpoints
app.get('/', (req, res) => { // home routes
    // handler
    res.sendStatus(200).send({message: "Thanks for trying our API!"})
})

app.get('/api/stock', (req, res) => {
    const { stock } = req.query
    if (!stock) {
        return res.sendStatus(403)
    }

    // otherwise we have access to the stock and we can g fetch it
})

app.post('/test', (req, res) => {
    const { message } = req.body
    console.log("This is the message: ", message);
    res.sendStatus(200)
})


// server will listen to incoming request at port
app.listen(port, () => console.log(`Startet server on port ${port}`))