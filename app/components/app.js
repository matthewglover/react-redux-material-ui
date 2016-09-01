import React from 'react';
import Paper from 'material-ui/Paper';
import Footer from './footer';
import AddTodo from '../containers/add_todo';
import VisibleTodoList from '../containers/visible_todo_list';

const style = {
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const App = () =>
  (<Paper
    style={style}
  >
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Paper>);

export default App;
