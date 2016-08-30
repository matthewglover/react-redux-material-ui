import { ADD_TODO, TOGGLE_TODO } from '../action_types';

const addTodo = (state, action) =>
  [...state, { text: action.text, completed: false }];

const toggleTodo = (state, action) =>
  state.map((todo, index) => {
    if (index !== action.index) return todo;
    return Object.assign({}, todo, { completed: !todo.completed });
  });

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    case TOGGLE_TODO:
      return toggleTodo(state, action);
    default:
      return state;
  }
};

export default todos;
