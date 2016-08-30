import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../action_types';

export const addTodo = text =>
  ({
    type: ADD_TODO,
    text,
  });

export const toggleTodo = index =>
  ({
    type: TOGGLE_TODO,
    index,
  });

export const setVisibilityFilter = filter =>
  ({
    type: SET_VISIBILITY_FILTER,
    filter,
  });
