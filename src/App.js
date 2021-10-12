import React, { useState, useEffect } from 'react';
import axios from 'axios';

const todoDataUrl = 'http://localhost:3100/todos';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl);
      setTodoList(response.data);
    };
    fetchData();
  }, []);

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <>
      <h1>TODO List</h1>

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
