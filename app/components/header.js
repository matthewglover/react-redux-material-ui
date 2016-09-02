import React from 'react';
import AddTodo from '../containers/add_todo';
import FilterSelector from '../containers/filter_selector';

const style = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
};

const Header = () =>
  <div style={style}>
    <AddTodo />
    <FilterSelector />
  </div>;

export default Header;
