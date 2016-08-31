import { SET_VISIBILITY_FILTER } from '../action_types';
import { VisibilityFilters } from '../constants';

// visibilityFilter :: String -> Action -> String
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
