/*
 *
 * ToDoList reducer
 *
 */
import produce from 'immer';
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TOTO,
  CLEAN_TODO,
  COMPLETE_TODO,
  ALL_COMPLETE_TODO,
  FILTER_TODO,
} from '../contants/constants';

export const initialState = {
  text: '',
  complete: false,
  id: 0,
};

/* eslint-disable default-case, no-param-reassign */
const toDoListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_TODO:
        draft.id =
          draft.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
        draft.complete = false;
        draft.text = action.text;
        break;
      case DELETE_TOTO:
        draft.filter(todo => todo.id !== action.id);
        break;
      case CLEAN_TODO:
        draft.filter(todo => todo.completed === false);
        break;
    }
  });

export default toDoListReducer;
