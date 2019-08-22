/*
 *
 * ReduxSaga actions
 *
 */

import { RECEIVE_API_DATA, REQUEST_API_DATA } from './constants';

export function requestApi() {
  return {
    type: REQUEST_API_DATA,
  };
}
export function receiveApi(data) {
  return {
    type: RECEIVE_API_DATA,
    data,
  };
}
