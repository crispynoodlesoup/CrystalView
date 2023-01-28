const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static("public"));    
app.listen(8000, function() {
  console.log("Server is running on port 3000");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {
    const url = "";
    https.get(url, function(response) {
        response.on("data", function(data) {

        })
    })
}) 