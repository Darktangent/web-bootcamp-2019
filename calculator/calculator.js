//jshint esversion:6
const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})
app.post("/", (req, res) => {
  let num1 = Number(req.body.num1)
  let num2 = Number(req.body.num2)
  let result = num1 + num2
  res.send("The total is " + result)
})
app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html")
})
app.post('/bmicalculator', (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight / (height * height)
  res.send("Your BMI is " + result.toFixed(2))
})


app.listen(3000, () => {
  console.log('running on 3000')
})