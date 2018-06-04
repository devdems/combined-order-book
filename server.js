const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

module.exports = () => {
  const app = express();

  app.use(logger('dev'))
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.use('/api', require('./routes'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });

  return app;
}
