import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the counterRedux state domain
 */

const selectCounterReduxDomain = state => state.counterRedux || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CounterRedux
 */

const makeSelectCounterRedux = () =>
  createSelector(
    selectCounterReduxDomain,
    substate => substate,
  );

export default makeSelectCounterRedux;
export { selectCounterReduxDomain };
