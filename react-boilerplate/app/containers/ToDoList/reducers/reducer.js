/*
 *
 * ToDoList reducer
 *
 */
import produce from 'immer';

// export const initialState = {
//   id: 0,
//   text: '',
//   complete: false,
// };

// /* eslint-disable default-case, no-param-reassign */
// const toDoListReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case ADD_TODO:
//         draft.id = draft.id;
//         draft.text = draft.text;
//         draft.complete = false;
//         break;
//     }
//   });

// export default toDoListReducer;
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );
    default:
      return state;
  }
};

export default todos;
