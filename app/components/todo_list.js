import React, { PropTypes } from 'react';
import Todo from './todo';

const TodoList = ({ todos, onTodoClick }) =>
  (<ul>
    { todos.map((todo, idx) =>
      <Todo
        key={idx}
        onClick={() => onTodoClick(idx)}
        {...todo}
      />)}
  </ul>);

const todos = PropTypes.shape({
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todos).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
