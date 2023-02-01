import React, { useState, useEffect } from 'react';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  



  return (
    <div>
      <Todo />
      <ul className="todo-list">
        <li>
          <input type="checkbox" className="todo-check" />
          <spam>First activity</spam>
          <button className="todo-button" type="button">Edit</button>
          <button className="todo-button" type="button">Delete</button>
        </li>
        <li>
          <input type="checkbox" className="todo-check" />
          <spam>Second activity</spam>
          <button className="todo-button" type="button">Edit</button>
          <button className="todo-button" type="button">Delete</button>
        </li>
        <li>
          <input type="checkbox" className="todo-check" />
          <spam>Third activity</spam>
          <button className="todo-button" type="button">Edit</button>
          <button className="todo-button" type="button">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
