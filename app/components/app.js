import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import Header from './header';
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
      <Header />
      <VisibleTodoList />
    </Paper>
  </MuiThemeProvider>;

export default App;
