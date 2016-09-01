import test from 'ava';
import todoApp from '../../app/reducers';
import { setVisibilityFilter, addTodo, toggleTodo } from '../../app/action_creators';

const initialState = {
  todos: [{ text: 'first todo', id: 'uuid1', completed: false }],
  visibilityFilter: 'SHOW_ALL',
};

Object.freeze(initialState);

// Prove mutating input data should throw errors
test('mutating frozen data throws error', t => {
  t.throws(() => { initialState.visibilityFilter = 'SHOW_COMPLETED'; });
});

test('visibilityAction updates filter', t => {
  const actual = todoApp(initialState, setVisibilityFilter('SHOW_COMPLETED'));
  const expected = {
    todos: initialState.todos,
    visibilityFilter: 'SHOW_COMPLETED',
  };
  t.deepEqual(actual, expected);
});

test('addTodo action adds todo', t => {
  const todoAction = addTodo('second todo');
  const actual = todoApp(initialState, todoAction);
  const expected = {
    todos: [
      { text: 'first todo', id: 'uuid1', completed: false },
      { text: 'second todo', id: todoAction.id, completed: false },
    ],
    visibilityFilter: 'SHOW_ALL',
  };
  t.deepEqual(actual, expected);
});

test('toggleTodo action toggles todo', t => {
  const actual = todoApp(initialState, toggleTodo('uuid1'));
  const expected = {
    todos: [{ text: 'first todo', id: 'uuid1', completed: true }],
    visibilityFilter: 'SHOW_ALL',
  };
  t.deepEqual(actual, expected);
});
