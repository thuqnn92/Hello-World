import { createSelector } from 'reselect';
import { initialState } from './reducers/reducer';

/**
 * Direct selector to the reduxSaga state domain
 */

const selectReduxSagaDomain = state => state.reduxSaga || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ReduxSaga
 */

const makeSelectReduxSaga = () =>
  createSelector(
    selectReduxSagaDomain,
    substate => substate,
  );

export default makeSelectReduxSaga;
export { selectReduxSagaDomain };
