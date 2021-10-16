import React, { useState, useEffect, useRef } from 'react';
import { useTodo } from './hooks/useTodo';

const TodoItem = ({ todo, toggleItemStatus, deleteTodo }) => {
  const handleToggleTodoStatus = () => {
    toggleItemStatus(todo.id, todo.done);
  };

  const handleDeleteTodo = () => deleteTodo(todo.id);

  return (
    <li>
      {todo.content}
      <button onClick={handleToggleTodoStatus}>
        { todo.done ? '完了': '未完了' }
      </button>
      <button onClick={handleDeleteTodo}>
        削除
      </button>
    </li>
  );
};

const TodoList = ({ todoList, toggleItemStatus, deleteTodo }) => {
    return (
      <ul>
        {todoList.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            toggleItemStatus={toggleItemStatus}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    );
  };

function App() {

  const { todoList, addTodo, toggleItemStatus, deleteTodo } = useTodo();

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
      <TodoList
        todoList={inCompletedList}
        toggleItemStatus={toggleItemStatus}
        deleteTodo={deleteTodo}
      />

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
