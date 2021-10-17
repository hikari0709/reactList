import { TodoItem } from './TodoItem';

export const TodoList = ({ todoList, toggleItemStatus, deleteTodo }) => {
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
