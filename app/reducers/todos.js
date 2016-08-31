import { ADD_TODO, TOGGLE_TODO } from '../action_types';

// type Todo = { text: String, completed: Boolean }

// addTodo :: [Todo] -> String -> [Todo]
const addTodo = (state, text) =>
  [...state, { text, completed: false }];

// toggleTodo :: [Todo] -> Number -> [Todo]
const toggleTodo = (state, index) =>
  state.map((todo, i) => {
    if (index !== i) return todo;
    return Object.assign({}, todo, { completed: !todo.completed });
  });

// todos :: [Todo] -> Action -> [Todo]
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action.text);
    case TOGGLE_TODO:
      return toggleTodo(state, action.index);
    default:
      return state;
  }
};

export default todos;
