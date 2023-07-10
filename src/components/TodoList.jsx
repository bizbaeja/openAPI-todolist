import React from 'react'
import TodoItem from './TodoItem'

function TodoList({items}) {
  return (
    <ul>
    {items.map((item, index) => (
      <TodoItem key={index} item={item} />
    ))}
  </ul>
  )
}

export default TodoList