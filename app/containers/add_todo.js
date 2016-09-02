import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../action_creators';
import NewTodoForm from '../components/new_todo_form';

const connector = connect();

const AddTodo = connector(({ dispatch }) => {
  const onSubmit = value => dispatch(addTodo(value));

  return (
    <NewTodoForm
      onSubmit={onSubmit}
      value=""
    />
  );
});

module.exports = AddTodo;
