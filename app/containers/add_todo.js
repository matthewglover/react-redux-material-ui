import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../action_creators';

const connector = connect();

const AddTodo = connector(({ dispatch }) => {
  let input;

  const onSubmit = e => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    dispatch(addTodo(value));
    input.value = '';
  };

  const inputRef = node => { input = node; };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
});

module.exports = AddTodo;
