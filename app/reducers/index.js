import { combineReducers } from 'redux';
import visibilityFilter from './visibility_filter';
import todos from './todos';

// rootReducer :: State -> State
const rootReducer = combineReducers({
  visibilityFilter,
  todos,
});

export default rootReducer;
