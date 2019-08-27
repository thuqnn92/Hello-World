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
} from '../contants/constants';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}
export function editTodo(id, text) {
  return {
    type: EDIT_TODO,
    id,
    text,
  };
}
export function deleteTodo(id) {
  return {
    type: DELETE_TOTO,
    id,
  };
}
export function cleanTodo() {
  return {
    type: CLEAN_TODO,
  };
}
export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    id,
  };
}
export function allCompleteTodo() {
  return {
    type: ALL_COMPLETE_TODO,
  };
}
export function filterTodo(filter) {
  return {
    type: FILTER_TODO,
    filter,
  };
}
