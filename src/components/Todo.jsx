import React from 'react';
import PropTypes from 'prop-types';

function Todo(props) {
  const { todo } = props;
  return (
    <div>
      <form className="todo-form">
        <input type="text" className="todo-input" placeholder="Task" value={todo} />
        <button className="todo-button" type="submit">Add</button>
      </form>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.string,
};

export default Todo;
