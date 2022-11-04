const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "/static")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = app.listen('8083', function () {
  console.log("server on! http://localhost:8083");
});

app.get('/', function(req, res) {
  res.send('index.html')
})

module.exports = app;