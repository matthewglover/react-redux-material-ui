import { connect } from 'react-redux';
import { VisibilityFilters } from '../constants';
import { toggleTodo } from '../action_creators';
import TodoList from '../components/todo_list';


// type State = { todos: [Todo], visibilityFilter: String }

// getVisibleTodos :: State -> [Todo]
const getVisibleTodos = ({ todos, visibilityFilter }) => {
  switch (visibilityFilter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      throw new TypeError(`Unhandled visibiltyFilter type ${visibilityFilter}`);
  }
};

// mapStateToProps :: State -> { todos: [Todo] }
const mapStateToProps = state =>
  ({ todos: getVisibleTodos(state) });

// mapDispatchToProps :: Function -> { onTodoClick: Function }
const mapDispatchToProps = dispatch =>
  ({ onTodoClick: id => dispatch(toggleTodo(id)) });

// connector :: Function
const connector =
  connect(mapStateToProps, mapDispatchToProps);

// VisibleTodoList :: React.Component
const VisibleTodoList =
  connector(TodoList);

export default VisibleTodoList;
