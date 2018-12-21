//jshint esversion:6
const express = require('express')
const app = express();

app.get('/', (req, res) => {
  console.log(req)
  res.send("<h1> Hello there </h1>")
})


app.get('/contact', (req, res) => {
  res.send("Contact me at c1ph3r9@gmail.com")
})


app.get("/about", (req, res) => {
  res.send("Hi this is Rohan, I am from Houston,Texas")
})









app.listen(3000, function() {
  console.log('running on 3000')
})