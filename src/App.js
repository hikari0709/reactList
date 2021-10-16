import React, { useState, useEffect, useRef } from 'react';
import { useTodo } from './hooks/useTodo';

function App() {

  const { todoList, addTodo } = useTodo();

  const inputElement = useRef(null);

  const handleAddTodoListItem = () => {
    if (inputElement.current.value === '') return;
    addTodo(inputElement.current.value);
    inputElement.current.value = '';
  };

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <>
      <h1>TODO List</h1>

      <textarea ref={inputElement} />
      <button onClick={handleAddTodoListItem}>TODOを追加する</button>

      <h2>未完了TODO</h2>
      <ul>
        {inCompletedList.map((todo) => (
          <li key={todo.id}>
            {todo.content}({todo.done ? '完了' : '未完了'})
          </li>
        ))}
      </ul>

      <h2>完了TODO</h2>
      <ul>
        {completedList.map((todo) => (
          <li key={todo.id}>
            {todo.content}({todo.done ? '完了' : '未完了'})
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
