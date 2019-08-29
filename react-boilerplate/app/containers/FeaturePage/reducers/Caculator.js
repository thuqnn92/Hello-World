/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  OPERATOR,
  CALCULATOR,
  CLEAN,
  INPUT,
  BACK,
  DOT,
  MINUS,
} from '../constants/constants';
export const initialState = {
  input: '',
  operator: '',
};

const reducerCalculator = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INPUT:
        draft.input += action.payload;
        break;
      case BACK:
        draft.input = back(draft.input);
        break;
      case CALCULATOR:
        draft.input = calc(draft.input);
        draft.operator = '';
        break;
      case OPERATOR:
        draft.input = setOper(draft.input, action.payload);
        break;
      case CLEAN:
        draft.input = '';
        break;
      case DOT:
        draft.input = setDot(draft.input);
        break;
      case MINUS:
        draft.input = setMinus(draft.input);
        break;
    }
  });
function setMinus(input) {
  const regexOfPositive = /^\d*(\.\d*)?$/g;
  const regexOfNegative = /^(-)\d*(\.\d*)?$/g;
  if (String(input).match(regexOfPositive)) {
    return `-${input}`;
  }
  if (String(input).match(regexOfNegative)) {
    return `${input.slice(1)}`;
  }
  return input;
}
function setDot(input) {
  const regex1 = /^(-)?\d+$/;
  const regex2 = /^(-)?$/;
  const regex3 = /^(-)?\d+(\.\d+)?(\+|-|\*|\/)\d+$/;
  const regex4 = /^(-)?\d+(\.\d+)?(\+|-|\*|\/)$/;
  if (String(input).match(regex1)) {
    return `${input}.`;
  }
  if (String(input).match(regex2)) {
    return `${input}.`;
  }

  if (String(input).match(regex3)) {
    return `${input}.`;
  }

  if (String(input).match(regex4)) {
    return `${input}0.`;
  }
  return input;
}

function back(input) {
  const sub = String(input).substr(0, input.length - 1);
  return sub;
}
function calc(input) {
  const regex1 = /^(-)?\d+(\.\d+)?(\+|-|\*|\/)\d+(\.\d+)?$/;
  const regexNumber = /\d+(\.\d+)?/g;
  const regexOp = /(\+|-|\*|\/)/g;
  if (String(input).match(regex1)) {
    let num1 = '';
    let num2 = '';
    if (input.charAt(0) === '-') {
      num1 += '-';
      input = input.slice(1);
    }
    const operator = String(input).match(regexOp)[0];
    const numbers = String(input).match(regexNumber);
    num1 = parseFloat(num1 + numbers[0]);
    num2 = parseFloat(numbers[1]);
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        break;
    }
  }

  return input;
}
function setOper(input, opr) {
  const regex = /^(-)?\d+(\.\d+)?$/g;
  const regex2 = /^(-)?\d+(\.\d+)?(\+|-|\*|\/)$/g;
  if (String(input).match(regex)) {
    return `${input}${opr}`;
  }
  if (String(input).match(regex2)) {
    return `${String(input).substr(0, input.length - 1)}${opr}`;
  }
  const regexOfCompletedForm = /^(-)?\d+(\.\d+)?(\+|-|\*|\/)\d+(\.\d+)?$/;
  if (String(input).match(regexOfCompletedForm)) {
    input = calc(input);
    return `${input}${opr}`;
  }
  return input;
}

export default reducerCalculator;
