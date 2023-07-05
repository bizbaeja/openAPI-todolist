import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';


function App() {
  return (
    <div className="App">
        <div>
      <h1>Todo List</h1>
      <TodoInput />
    </div>
    </div>
  );
}

export default App;
