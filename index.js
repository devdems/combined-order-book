const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/api/hello', (req, res) => {
  res.send('hello');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on ${port}`);
