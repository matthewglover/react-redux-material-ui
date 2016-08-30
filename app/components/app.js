import React from 'react';
import Footer from './footer';
import AddTodo from '../containers/add_todo';
import VisibleTodoList from '../containers/visible_todo_list';

const App = () =>
  (<div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>);

export default App;
