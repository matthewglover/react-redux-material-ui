import React, { PropTypes } from 'react';

const styles = completed =>
  ({ textDecoration: completed ? 'line-through' : 'none' });

const Todo = ({ onClick, completed, text }) =>
  (<li
    onClick={onClick}
    style={styles(completed)}
  >
    {text}
  </li>);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
