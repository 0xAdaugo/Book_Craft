// routes/logExampleRoute.js

const express = require('express');
const router = express.Router();
const logger = require('../utils/logger');

router.get('/log-example', (req, res) => {
  logger.info('This is an info log');
  logger.error('This is an error log');
  res.send('Logging example');
});

module.exports = router;
