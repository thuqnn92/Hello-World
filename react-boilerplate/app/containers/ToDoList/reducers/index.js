import { combineReducers } from 'redux';
import todos from './reducer';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos,
  visibilityFilter,
});
