import React from 'react'
import {useState} from 'react';
import TodoList from './TodoList';
import callChatGptAPI from './callChatGptAPI';

function TodoInput() {

    const [question, setQuestion] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleQuestionSubmit = async (event) => {
    event.preventDefault();

    // ChatGPT API 호출
    const response = await callChatGptAPI(question);

    // 응답을 Todo 리스트로 변환
    const newTodoList = response.answer.split(',');

    // Todo 리스트 업데이트
    setTodoList(newTodoList);

    // 입력값 초기화
    setQuestion('');
  };
  return (
    <div>
      <form onSubmit={handleQuestionSubmit}>
        <input type="text" value={question} onChange={handleQuestionChange} />
        <button type="submit">Submit</button>
      </form>
      <TodoList items={todoList} />
    </div>
  )
}

export default TodoInput