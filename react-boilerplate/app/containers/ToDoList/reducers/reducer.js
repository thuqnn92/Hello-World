/*
 *
 * ToDoList reducer
 *
 */
import produce from 'immer';
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED,
  COMPLETE_ALL,
  COMPLETE_TODO,
} from '../constants/constants';

export const initialState = {
  id: 0,
  text: '',
  complete: false,
};

/* eslint-disable default-case, no-param-reassign */
const toDoListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_TODO:
        draft.id = draft.id;
        draft.text = draft.text;
        draft.complete = false;
        break;
    }
  });

export default toDoListReducer;
