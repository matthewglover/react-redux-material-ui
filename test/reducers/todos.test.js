import test from 'ava';
import { addTodo, toggleTodo } from '../../app/action_creators';
import todos from '../../app/reducers/todos';

// Declare test data
const oneTodo = [{ text: 'first todo', id: 'uuid1', completed: false }];

const twoTodos = [
  { text: 'first todo', id: 'uuid1', completed: false },
  { text: 'second todo', id: 'uuid2', completed: false },
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
  const todoAction = addTodo('first todo');
  const actual = todos([], todoAction);
  t.deepEqual(actual, [{ text: todoAction.text, id: todoAction.id, completed: false }]);
});

test('addTodo action adds a new todo to end of list', t => {
  const todoAction = addTodo('second todo');
  const actual = todos(oneTodo, todoAction);
  t.deepEqual(actual, [...oneTodo, { text: todoAction.text, id: todoAction.id, completed: false }]);
});

test('toggleTodo action flips completed status of todo with given id', t => {
  const actual = todos(twoTodos, toggleTodo('uuid1'));
  const expected = [
    { text: 'first todo', id: 'uuid1', completed: true },
    { text: 'second todo', id: 'uuid2', completed: false },
  ];
  t.deepEqual(actual, expected);
});
