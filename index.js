var express = require('express');

// Constants
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/run1', function (req, res) {
  res.send('cloud run - Hello World - dev1 \n');
});

app.get('/run2', function (req, res) {
  res.send('cloud run - Hello World - dev2 \n');
});

app.get('/run3', function (req, res) {
  res.send('cloud run - Hello World - dev3 \n');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
