import { useState, useEffect } from 'react';
import { ulid } from 'ulid';
import * as todoData from '../api/todos';

export const useTodo = () => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    todoData.getAllTodos().then((todo) => {
      setTodoList([...todo].reverse())
    }, []);
  });

  const toggleItemStatus = (id, done) => {
    const todoItem = todoList.find((item) => item.id === id);
    const newTodoItem = { ...todoItem, done: !done };

    todoData.updateTodo(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) =>
        item.id !== updatedTodo.id ? item : updatedTodo
      );

      setTodoList(newTodoList);
    });
  };

  const addTodo = (todoContent) => {
    const newTodoListItem = {
      content: todoContent,
      is: ulid(),
      done: false
    };

    return todoData.addTodo(newTodoListItem).then((addTodo) => {
      setTodoList([addTodo, ...todoList]);
    });
  }

  const deleteTodo = (id) => {
    todoData.deleteTodo(id).then((deleteListItemId) => {
      const newTodoList = todoList.filter(
        (item) => item.id !== deleteListItemId
      );

      setTodoList(newTodoList);
    });
  }

  return {
    todoList,
    toggleItemStatus,
    addTodo,
    deleteTodo
  };
}
