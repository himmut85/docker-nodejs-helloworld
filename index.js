var express = require('express');

// Constants
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/master1', function (req, res) {
  res.send('cloud run - Hello World  - master1 \n');
});

app.get('/master2', function (req, res) {
  res.send('cloud run - Hello World  - master2 \n');
});

app.get('/master3', function (req, res) {
  res.send('cloud run - Hello World  - master3 \n');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
