import test from 'ava';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../../app/action_types';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter } from '../../app/action_creators';

test('addTodo', t => {
  const todo = addTodo('test todo');
  t.plan(2);
  t.deepEqual(todo, { type: ADD_TODO, text: 'test todo', id: todo.id });
  t.is(typeof todo.id, 'string');
});

test('toggleTodo', t => {
  t.deepEqual(toggleTodo(1), { type: TOGGLE_TODO, id: 1 });
});

test('setVisibilityFilter', t => {
  t.deepEqual(setVisibilityFilter('SHOW_ALL'), { type: SET_VISIBILITY_FILTER, filter: 'SHOW_ALL' });
});
