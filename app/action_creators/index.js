import uuid from 'uuid';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../action_types';


export const addTodo = text =>
  ({
    type: ADD_TODO,
    text,
    id: uuid.v1(),
  });

export const toggleTodo = id =>
  ({
    type: TOGGLE_TODO,
    id,
  });

export const setVisibilityFilter = filter =>
  ({
    type: SET_VISIBILITY_FILTER,
    filter,
  });
