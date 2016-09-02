import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const styles = completed =>
  ({ textDecoration: completed ? 'line-through' : 'none' });

const Todo = ({ onClick, text, completed }) =>
  <ListItem
    leftCheckbox={<Checkbox onClick={onClick} checked={completed} />}
    primaryText={text}
    style={styles(completed)}
  />;

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
