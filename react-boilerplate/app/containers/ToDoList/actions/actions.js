/*
 *
 * ToDoList actions
 *
 */

import {
  ADD_TODO,
  DELETE_TOTO,
  EDIT_TODO,
  CLEAN_TODO,
  COMPLETE_TODO,
  ALL_COMPLETE_TODO,
  FILTER_TODO,
  TOGGLE_TODO,
} from '../contants/constants';

let nextTodoId = 0;
export const addTodo = text => ({
  type: ADD_TODO,
  // eslint-disable-next-line no-plusplus
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = filter => ({
  type: FILTER_TODO,
  filter,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}