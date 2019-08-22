import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the toDoList state domain
 */

const selectToDoListDomain = state => state.toDoList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ToDoList
 */

const makeSelectToDoList = () =>
  createSelector(
    selectToDoListDomain,
    substate => substate,
  );

export default makeSelectToDoList;
export { selectToDoListDomain };
