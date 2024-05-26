const axios = require('axios');

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

const fetchBookCovers = async (query) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query, per_page: 10 },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching book covers from Unsplash', error);
    throw error;
  }
};

module.exports = { fetchBookCovers };
