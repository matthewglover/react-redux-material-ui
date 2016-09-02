import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
  <MuiThemeProvider>
    <Paper style={style}>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Paper>
  </MuiThemeProvider>;

export default App;
