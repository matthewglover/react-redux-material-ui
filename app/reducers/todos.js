import { ADD_TODO, TOGGLE_TODO } from '../action_types';

// type Todo = { text: String, completed: Boolean, id: String }

// addTodo :: [Todo] -> {text: String, id: String} -> [Todo]
const addTodo = (state, { text, id }) =>
  [...state, { text, id, completed: false }];


// toggleTodo :: Todo -> Todo
const toggleTodo = todo =>
  Object.assign({}, todo, { completed: !todo.completed });

// toggleTodoInTodos :: [Todo] -> String -> [Todo]
const toggleTodoInTodos = (state, id) =>
  state.map(todo => (todo.id === id ? toggleTodo(todo) : todo));

const testTodos = [
  { text: 'apple', completed: false, id: '0' },
  { text: 'orange', completed: false, id: '1' },
  { text: 'banana', completed: false, id: '2' },
];

// todos :: [Todo] -> Action -> [Todo]
const todos = (state = testTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    case TOGGLE_TODO:
      return toggleTodoInTodos(state, action.id);
    default:
      return state;
  }
};

export default todos;
