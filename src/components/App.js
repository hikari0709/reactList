import React, { useState, useEffect, useRef } from 'react';
import { useTodo } from '../hooks/useTodo';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

function App() {

  const {
    todoList,
    addTodo,
    toggleItemStatus,
    deleteTodo
  } = useTodo();

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

      <TodoAdd
        buttonText='TODOを追加する'
        inputElement={inputElement}
        handleAddListItem={handleAddTodoListItem}
      />

      <h2>未完了TODO</h2>
      <TodoList
        todoList={inCompletedList}
        toggleItemStatus={toggleItemStatus}
        deleteTodo={deleteTodo}
      />

      <h2>完了TODO</h2>
      <TodoList
        todoList={completedList}
        toggleItemStatus={toggleItemStatus}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
