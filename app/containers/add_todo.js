import React from 'react';
import { connect } from 'react-redux';
// import TextField from 'material-ui/TextField';

import { addTodo } from '../action_creators';
import NewTodoForm from '../components/new_todo_form';

const connector = connect();

const AddTodo = connector(({ dispatch }) => {
  // let input;
  //
  // const onSubmit = e => {
  //   e.preventDefault();
  //   const value = input.trim();
  //   if (!value) return;
  //   dispatch(addTodo(value));
  //   input.value = '';
  // };

  // const inputRef = evt => {
  //   input = evt.target.value;
  // };
  //
  const onSubmit = value => dispatch(addTodo(value));

  return (
    <NewTodoForm
      onSubmit={onSubmit}
      value=""
    />
    // <div>
    //   <form onSubmit={onSubmit}>
    //     <TextField
    //       onChange={inputRef}
    //     />
    //   </form>
    // </div>
  );
});

module.exports = AddTodo;
