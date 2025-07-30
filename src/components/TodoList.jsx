
import TodoItem from './TodoItem';
import { TodoListContainer } from './StyledComponents';

function TodoList({ todos, onToggle, onUpdate }) {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </TodoListContainer>
  );
}

export default TodoList;
