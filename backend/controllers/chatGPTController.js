const { getChatGPTResponse } = require('../services/chatGPTService');

const getResponse = async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await getChatGPTResponse(prompt);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get response from ChatGPT' });
  }
};

module.exports = { getResponse };
