import React, { PropTypes } from 'react';
import { List } from 'material-ui/List';
import Todo from './todo';

const style = {
  width: '100%',
};

const TodoList = ({ todos, onTodoClick }) =>
  <List
    style={style}
  >
    { todos.map((todo) =>
      <Todo
        key={todo.id}
        onClick={() => onTodoClick(todo.id)}
        {...todo}
      />)}
  </List>;

const todos = PropTypes.shape({
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todos).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
