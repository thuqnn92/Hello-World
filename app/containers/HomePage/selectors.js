/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;
const selectCounter = state => state.home || initialState; // key counterRedux phai giong nhau

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );
const makeSelectCount = () =>
  createSelector(
    selectCounter,
    counter => counter.count,
  );
export { selectHome, selectCounter, makeSelectCount, makeSelectUsername };
