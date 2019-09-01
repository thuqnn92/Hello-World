/*
 *
 * CalculatorPage actions
 *
 */

import {
  DEFAULT_ACTION,
  OPERATOR,
  CALCULATOR,
  CLEAN,
  INPUT,
  BACK,
  DOT,
  MINUS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setInputAction(input) {
  return {
    type: INPUT,
    payload: input,
  };
}
export function SetOperatorAction(opr) {
  return {
    type: OPERATOR,
    payload: opr,
  };
}
export function SetCalculatorAction() {
  return {
    type: CALCULATOR,
  };
}
export function setCleanAction() {
  return {
    type: CLEAN,
  };
}
export function SetBackAction() {
  return {
    type: BACK,
  };
}
export function setDotAction(input) {
  return {
    type: DOT,
    input,
  };
}
export function setMinusAction() {
  return {
    type: MINUS,
  };
}
