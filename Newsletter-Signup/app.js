//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const request = require("request")
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"))
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html")
})

app.post("/", (req, res) => {
  let fname = req.body.fname;
  let email = req.body.email;
  let lname = req.body.lname;
  var data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: fname,
        LNAME: lname
      }
    }]
  }
  let jsonData = JSON.stringify(data)
  let options = {
    url: "https://us3.api.mailchimp.com/3.0/lists/ba22113574",
    method: "POST",
    headers: {
      "Authorization": "rohanganguly becf462a416fef021d01e688e66bb385-us3"
    },
    body: jsonData


  }
  request(options, (error, response, body) => {
    if (error) {
      // res.send("Something went wrong, Please try again");
      res.sendFile(__dirname + "/failure.html")
    } else {
      if (response.statusCode === 200) {
        // res.send("You are successfully signedup for the newsletter");
        res.sendFile(__dirname + "/success.html")
      } else {
        // res.send("Something went wrong, Please try again");
        res.sendFile(__dirname + "/failure.html")
      }

    }
  })
})
//API
// becf462a416fef021d01e688e66bb385-us3

// LIST
// ba22113574
app.post("/failure", (req, res) => {
  res.redirect("/")
})

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000');
})