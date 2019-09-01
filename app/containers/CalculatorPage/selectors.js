import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the calculatorPage state domain
 */

const selectCalculatorPageDomain = state =>
  state.calculatorPage || initialState;
/**
 * Other specific selectors
 */

/**
 * Default selector used by CalculatorPage
 */

const makeSelectCalculatorPage = () =>
  createSelector(
    selectCalculatorPageDomain,
    substate => substate,
  );
const makeSelectInput = () =>
  createSelector(
    selectCalculatorPageDomain,
    inputs => inputs.input,
  );
export {
  selectCalculatorPageDomain,
  makeSelectCalculatorPage,
  makeSelectInput,
};
