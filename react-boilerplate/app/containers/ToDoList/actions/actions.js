/*
 *
 * ToDoList actions
 *
 */
import {
  ADD_TODO,
  CLEAR_COMPLETED,
  COMPLETE_ALL,
  COMPLETE_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from '../constants/constants';
export const setAddTodoAction = text => ({
  type: ADD_TODO,
  text,
});
export const setClearAction = () => ({
  type: CLEAR_COMPLETED,
});
export const setCompleteAllAction = () => ({
  type: COMPLETE_ALL,
});
export const setCompleteTodoAction = id => ({
  type: COMPLETE_TODO,
  id,
});
export const setEditTodoAction = (text, id) => ({
  type: EDIT_TODO,
  text,
  id,
});
export const setDeleteTodoAction = id => ({
  type: DELETE_TODO,
  id,
});
