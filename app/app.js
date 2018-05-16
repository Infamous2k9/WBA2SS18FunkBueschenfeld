var express = require('express');
var path = require('path');

var app = express();

app.get('/', (req, res) => {
  res.send("Hallo from Express!!!");
});


module.exports = app;
