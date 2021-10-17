export const TodoItem = ({ todo, toggleItemStatus, deleteTodo }) => {
  const handleToggleTodoStatus = () => {
    toggleItemStatus(todo.id, todo.done);
  };

  const handleDeleteTodo = () => deleteTodo(todo.id);

  return (
    <li>
      {todo.content}
      <button onClick={handleToggleTodoStatus}>
        { todo.done ? '未完了': '完了' }
      </button>
      <button onClick={handleDeleteTodo}>
        削除
      </button>
    </li>
  );
};
