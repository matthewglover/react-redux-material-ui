import test from 'ava';
import { addTodo, toggleTodo } from '../../app/action_creators';
import todos from '../../app/reducers/todos';

// Declare test data
const oneTodo = [{ text: 'first todo', completed: false }];

const twoTodos = [
  { text: 'first todo', completed: false },
  { text: 'second todo', completed: false },
];

// Freeze data to ensure that todos function doesn't mutate input data
Object.freeze(oneTodo);
Object.freeze(twoTodos);

// Prove mutating input data should throw errors
test('mutating frozen data throws error', t => {
  t.throws(() => oneTodo.push({}));
  t.throws(() => twoTodos.push({}));
});

test('addTodo action adds a new todo to list', t => {
  const actual = todos([], addTodo('first todo'));
  t.deepEqual(actual, oneTodo);
});

test('addTodo action adds a new todo to end of list', t => {
  const actual = todos(oneTodo, addTodo('second todo'));
  t.deepEqual(actual, twoTodos);
});

test('toggleTodo flips completed status of todo at given index', t => {
  const actual = todos(twoTodos, toggleTodo(0));
  const expected = [
    { text: 'first todo', completed: true },
    { text: 'second todo', completed: false },
  ];
  t.deepEqual(actual, expected);
});
