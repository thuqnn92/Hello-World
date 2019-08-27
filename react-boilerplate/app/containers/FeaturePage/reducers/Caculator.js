import produce from 'immer';
import {OPERATOR,CALCULATOR,CLEAN,INPUT,BACK} from '../constants/constants';

export const initialState = {
  input: "",
  operator: "",
};

const reducerCalculator = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
    case INPUT:
      draft.input = draft.input + action.payload;
      break;
    case BACK:
        draft.input = back(draft.input);
      break;
      case CALCULATOR:
        draft.input = calc(draft.input);
        break;
      case OPERATOR:
       draft.input = setOper(draft.input, action.payload);
       break;
    case CLEAN:
          draft.input = '';
          break;
    }
  });
  function back(input){
    const sub = input.substr(0,input.length - 1);
    return sub;
  }
  function calc(input) {
    const regexLeft = /^(-)?\d+(\.\d+)?(\+|-|\*|\/)\d+(\.\d+)?$/;
    const regexRight = /\d+(\.\d+)?/g;
    const regexOp = /(\+|-|\*|\/)/g;
    const left = input.match(regexLeft);
    const operator = input.match(regexOp)[0];
    const right = input.match(regexRight);
    let num1 = parseFloat(left + right[0],10);
    let num2 = parseFloat(right[1],10);
    switch (operator) {
      case '+':
        return (num1 + num2);
      case '-':
        return (num1 - num2);
      case '*':
        return (num1 * num2);
      case '/':
        return (num1 / num2);
      default:
        break;
    }
    return input;
  }
  function setOper(input, opr) {
    const regex = /^(-)?\d+(\.\d+)?$/g;
    const regex2 = /^(-)?\d+(\.\d+)?(\+|-|\*|\/)$/g;
    console.log(opr);
    if (input.match(regex)) {
      return `${input}${opr}`;
    }
    if (input.match(regex2)) {
      return `${input.substr(0, input.length - 1)}${opr}`;
    }
    const regexOfCompletedForm = /^(-)?\d+(\.\d+)?(\+|-|\*|\/)\d+(\.\d+)?$/;
    if (input.match(regexOfCompletedForm)) {
      input = calc(input);
      return `${input}${opr}`;
    }
    return input;
  }

export default reducerCalculator;