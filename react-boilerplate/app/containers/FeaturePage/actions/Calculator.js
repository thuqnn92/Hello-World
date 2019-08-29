import {
  OPERATOR,
  CALCULATOR,
  CLEAN,
  INPUT,
  BACK,
  DOT,
} from '../constants/constants';
export function changeInput(input) {
  return {
    type: INPUT,
    payload: input,
  };
}
export function changeOperator(opr) {
  return {
    type: OPERATOR,
    payload: opr,
  };
}
export function changeCalculator() {
  return {
    type: CALCULATOR,
  };
}
export function changeClean() {
  return {
    type: CLEAN,
  };
}
export function changeBack() {
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
