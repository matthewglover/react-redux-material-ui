import test from 'ava';
import todoApp from '../../app/reducers';
import { setVisibilityFilter, addTodo, toggleTodo } from '../../app/action_creators';

const initialState = {
  todos: [{ text: 'first todo', completed: false }],
  visibilityFilter: 'SHOW_ALL',
};

Object.freeze(initialState);

// Prove mutating input data should throw errors
test('mutating frozen data throws error', t => {
  t.throws(() => { initialState.visibilityFilter = 'SHOW_COMPLETED'; });
});

test('updates filter when visibility action provided', t => {
  const actual = todoApp(initialState, setVisibilityFilter('SHOW_COMPLETED'));
  const expected = {
    todos: [{ text: 'first todo', completed: false }],
    visibilityFilter: 'SHOW_COMPLETED',
  };
  t.deepEqual(actual, expected);
});

test('adds todo when addTodo action provided', t => {
  const actual = todoApp(initialState, addTodo('second todo'));
  const expected = {
    todos: [
      { text: 'first todo', completed: false },
      { text: 'second todo', completed: false },
    ],
    visibilityFilter: 'SHOW_ALL',
  };
  t.deepEqual(actual, expected);
});

test('toggles todo when toggleTodo action provided', t => {
  const actual = todoApp(initialState, toggleTodo(0));
  const expected = {
    todos: [{ text: 'first todo', completed: true }],
    visibilityFilter: 'SHOW_ALL',
  };
  t.deepEqual(actual, expected);
});
