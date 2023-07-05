
import axios from 'axios';
async function callChatGptAPI(question) {

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: question,
      max_tokens: 50,
      temperature: 0.7,
      n: 1
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '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' // ChatGPT API 키를 입력하세요.
      }
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
    return '';
  }
}

export default callChatGptAPI