import React from 'react';

function Todo() {
  return (
    <div>
      <h1>To-Do</h1>
      <form className="todo-form">
        <input type="text" className="todo-input" placeholder="Task" />
        <button className="todo-button" type="submit">Add</button>
      </form>
    </div>
  );
}

export default Todo;
