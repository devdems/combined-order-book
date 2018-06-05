const router = require('express').Router();
const api = require('./api');

router.get('/', getSupportedExchanges);

function getSupportedExchanges(req, res) {
  const supportedExchanges = Object.keys(api);
  res.send(supportedExchanges);
}

module.exports = router;
