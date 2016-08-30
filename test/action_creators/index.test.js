import test from 'ava';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../../app/action_types';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter } from '../../app/action_creators';

test('addTodo', t => {
  t.deepEqual(addTodo('test todo'), { type: ADD_TODO, text: 'test todo' });
});

test('toggleTodo', t => {
  t.deepEqual(toggleTodo(1), { type: TOGGLE_TODO, index: 1 });
});

test('setVisibilityFilter', t => {
  t.deepEqual(setVisibilityFilter('SHOW_ALL'), { type: SET_VISIBILITY_FILTER, filter: 'SHOW_ALL' });
});
