var express = require('express');

// Constants
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/preprod1', function (req, res) {
  res.send('cloud run - Hello World  - preprod1 \n');
});

app.get('/preprod2', function (req, res) {
  res.send('cloud run - Hello World  - preprod2 \n');
});

app.get('/preprod3', function (req, res) {
  res.send('cloud run - Hello World  - preprod3 \n');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
