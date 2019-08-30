/*
 *
 * ToDoList actions
 *
 */
// import {
//   ADD_TODO,
//   CLEAR_COMPLETED,
//   COMPLETE_ALL,
//   COMPLETE_TODO,
//   EDIT_TODO,
//   DELETE_TODO,
// } from '../constants/constants';
// export const setAddTodoAction = text => ({
//   type: ADD_TODO,
//   text,
// });
// export const setClearAction = () => ({
//   type: CLEAR_COMPLETED,
// });
// export const setCompleteAllAction = () => ({
//   type: COMPLETE_ALL,
// });
// export const setCompleteTodoAction = id => ({
//   type: COMPLETE_TODO,
//   id,
// });
// export const setEditTodoAction = (text, id) => ({
//   type: EDIT_TODO,
//   text,
//   id,
// });
// export const setDeleteTodoAction = id => ({
//   type: DELETE_TODO,
//   id,
// });
// import {
//   ADD_TODO,
//   TOGGLE_TODO,
//   SET_VISIBILITY_FILTER,
//   SHOW_ACTIVE,
//   SHOW_ALL,
//   SHOW_COMPLETED,
// } from '../constants/constants';
// let nextTodoId = 0;
// export const addTodo = text => ({
//   type: ADD_TODO,
//   // eslint-disable-next-line no-plusplus
//   id: nextTodoId++,
//   text,
// });

// export const setVisibilityFilter = filter => ({
//   type: SET_VISIBILITY_FILTER,
//   filter,
// });

// export const toggleTodo = id => ({
//   type: TOGGLE_TODO,
//   id,
// });

// export const VisibilityFilters = {
//   SHOW_ALL,
//   SHOW_COMPLETED,
//   SHOW_ACTIVE,
// };
let nextTodoId = 0;
export const addTodo = text => ({
  type: 'ADD_TODO',
  // eslint-disable-next-line no-plusplus
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
