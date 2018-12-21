//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const request = require("request")
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
  let amount = req.body.amount
  let crypto = req.body.crypto;
  let fiat = req.body.fiat;
  //let URL1 = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
  let baseURL = "https://apiv2.bitcoinaverage.com/convert/global"
  //finalUrl = baseURL + crypto + fiat;
  var options = {
    url: baseURL,
    method: "GET",
    qs: {
      from: crypto,
      to: fiat,
      amount: amount
    }
  }
  request(options, (error, response, body) => {
    var data = JSON.parse(body);
    var price = data.price;
    console.log(price);
    let currentDate = data.time;
    res.write("<p>The current date is " + currentDate + "</p>")
    res.write(`<h1>The price of ${amount} ${crypto} is ${price} ${fiat}.  </h1>`)
    res.send()
  })
  // console.log(req.body.crypto)
})



app.listen(3000, () => {
  console.log('Server is running on port 3000')
})