var express = require('express');

// Constants
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/test1', function (req, res) {
  res.send('cloud run - Hello World - test1 \n');
});

app.get('/test2', function (req, res) {
  res.send('cloud run - Hello World - test2 \n');
});

app.get('/test3', function (req, res) {
  res.send('cloud run - Hello World - test3 \n');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
