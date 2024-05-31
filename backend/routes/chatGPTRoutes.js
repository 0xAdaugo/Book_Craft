const express = require('express');
const router = express.Router();
const { getResponse } = require('../controllers/chatGPTController');

router.post('/chat', getResponse);

module.exports = router;
