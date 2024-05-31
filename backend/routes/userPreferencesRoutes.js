const express = require('express');
const router = express.Router();
const { updateUserPreferences } = require('../controllers/userPreferencesController');
const authenticateToken = require('../middleware/authMiddleware');

router.put('/preferences', authenticateToken, updateUserPreferences);

module.exports = router;
