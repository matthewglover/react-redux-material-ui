// @flow
import uuid from 'uuid';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../action_types';


export const addTodo = (text: string): Object =>
  ({
    type: ADD_TODO,
    text,
    id: uuid.v1(),
  });

export const toggleTodo = (id: string): Object =>
  ({
    type: TOGGLE_TODO,
    id,
  });

export const setVisibilityFilter = (filter: string): Object =>
  ({
    type: SET_VISIBILITY_FILTER,
    filter,
  });
