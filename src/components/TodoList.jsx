
import React from 'react';
import TodoItem from './TodoItem';
import { TodoListContainer } from './StyledComponents';

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </TodoListContainer>
  );
}

export default TodoList;
