/*
 *
 * ReduxSaga reducer
 *
 */
import produce from 'immer';
import { RECEIVE_API_DATA } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const reduxSagaReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case RECEIVE_API_DATA:
        break;
    }
  });

export default reduxSagaReducer;
