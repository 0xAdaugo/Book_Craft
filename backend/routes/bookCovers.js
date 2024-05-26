const express = require('express');
const router = express.Router();
const { fetchBookCovers } = require('../services/unsplashService');

router.get('/:query', async (req, res) => {
  const { query } = req.params;
  try {
    const covers = await fetchBookCovers(query);
    res.json(covers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book covers' });
  }
});

module.exports = router;
