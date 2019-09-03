/*
 *
 * CalculatorPage reducer
 *
 */
import produce from 'immer';
import {
  OPERATOR,
  CALCULATOR,
  CLEAN,
  INPUT,
  BACK,
  DOT,
  MINUS,
} from './constants';
/* eslint-disable default-case, no-param-reassign */
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
        draft.input = backReducer(draft.input);
        break;
      case CALCULATOR:
        draft.input = calcReducer(draft.input);
        draft.operator = '';
        break;
      case OPERATOR:
        draft.input = setOperReducer(draft.input, action.payload);
        break;
      case CLEAN:
        draft.input = '';
        break;
      case DOT:
        draft.input = setDotReducer(draft.input);
        break;
      case MINUS:
        draft.input = setMinusReducer(draft.input);
        break;
    }
  });
function setMinusReducer(input) {
  const regexBefore = /^\d*(\.\d*)?$/g;
  const regexAfter = /^(-)\d*(\.\d*)?$/g;
  if (String(input).match(regexBefore)) {
    return `-${input}`;
  }
  if (String(input).match(regexAfter)) {
    return `${input.slice(1)}`;
  }
  return input;
}
function setDotReducer(input) {
  const regex1 = /^(-)?\d+$/;
  const regex2 = /^(-)?$/;
  const regex3 = /^(-)?\d+(\.\d+)?(\+|-|\*|\/)\d+$/;
  const regex4 = /^(-)?\d+(\.\d+)?(\+|-|\*|\/)$/;
  if (String(input).match(regex1)) {
    return `${input}.`;
  }
  if (String(input).match(regex2)) {
    return `${input}0.`;
  }

  if (String(input).match(regex3)) {
    return `${input}.`;
  }

  if (String(input).match(regex4)) {
    return `${input}0.`;
  }
  return input;
}

function backReducer(input) {
  const sub = String(input).substr(0, input.length - 1);
  return sub;
}
function calcReducer(input) {
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
        return (num1 + num2).toString();
      case '-':
        return (num1 - num2).toString();
      case '*':
        return (num1 * num2).toString();
      case '/':
        return (num1 / num2).toString();
      default:
        break;
    }
  }

  return input;
}
function setOperReducer(input, opr) {
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
    input = calcReducer(input);
    return `${input}${opr}`;
  }
  return input;
}

export default reducerCalculator;
