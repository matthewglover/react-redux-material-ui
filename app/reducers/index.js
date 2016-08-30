import { combineReducers } from 'redux';
import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from '../action_types';
import { VisibilityFilters } from '../constants';

const addTodo = (state, action) =>
  [...state, { text: action.text, completed: false }];

const toggleTodo = (state, action) =>
  state.map((todo, index) => {
    if (index !== action.index) return todo;
    return Object.assign({}, todo, { completed: !todo.completed });
  });

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    case TOGGLE_TODO:
      return toggleTodo(state, action);
    default:
      return state;
  }
};

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
