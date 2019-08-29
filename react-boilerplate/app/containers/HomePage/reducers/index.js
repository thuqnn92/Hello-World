import produce from 'immer';
export const initialState = {
  count: 0,
};

/* eslint-disable default-case, no-param-reassign */
const onClickReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'INCREMENT':
        draft.count += 1;
        break;
      case 'DECREMENT':
        draft.count -= 1;
        break;
    }
  });

export default onClickReducer;
