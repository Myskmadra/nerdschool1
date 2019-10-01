const express = require('express');
const app = express();
const port = 8080;

// Simple Hello World endpoint
app.get('/', (request, response) => response.send('Hello World'));
/*
app.get('/', function (request, response) {
  response.send('Hello World');
});
*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Note the `` backticks is NOT the same as single quotes ''
});
