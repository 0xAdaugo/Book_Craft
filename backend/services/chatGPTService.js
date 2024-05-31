const axios = require('axios');

const getChatGPTResponse = async (prompt) => {
  const apiKey = process.env.OPENAI_API_KEY;
  const response = await axios.post(
    'https://api.openai.com/v1/engines/davinci-codex/completions',
    {
      prompt: prompt,
      max_tokens: 150
    },
    {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    }
  );
  return response.data.choices[0].text.trim();
};

module.exports = { getChatGPTResponse };
