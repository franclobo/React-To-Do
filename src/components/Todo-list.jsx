import React, { useState } from 'react';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState(['React Todo!!!', 'Learn Typescript?']);
  // const [todo, setTodo] = useState('');

  return (
    <div>
      {/* <Todo /> */}
      <h1>To Do List</h1>
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} setTodos={setTodos} key={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
