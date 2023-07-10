<<<<<<< HEAD
import React from 'react'

async function callChatGptAPI(question) {

    // ChatGPT API 호출 함수
{
    // ChatGP API 호출 코드 작성
    // question을 API에 전달하여 응답을 받아옵니다.
  }
  
=======

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
        'Authorization': process.env.API_KEY// ChatGPT API 키를 입력하세요.
      }
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
    return '';
  }
>>>>>>> 3d2ab0aabe48adfff98aab327e786958ea06049a
}

export default callChatGptAPI