// entry point: https://api.teller.io/

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));



app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {

 
  const url = "https://api.teller.io/accounts/:id/transactions"

  https.get(url, function(response) {

    response.on("data", function(data) {
      console.log(data);
    })



  })


})