import produce from 'immer';
import {NUMBER,OPERATOR,CALCULATOR,CLEAN,INPUT,BACK, DOT} from '../constants/constants';

const initialState = {
  input: "",
  operator: "",
};

function calc(input) {
  const regexLeft = /^(-)?\d+(\.\d+)?(\+|-|\*|\/)\d+(\.\d+)?$/;
  const regexRight = /\d+(\.\d+)?/g;
  const regexOp = /(\+|-|\*|\/)/g;
  const left = input.match(regexLeft);
  const operator = input.match(regexOp)[0];
  const right = input.match(regexRight);
  let num1 = parseInt(left + right[0],10);
  let num2 = parseInt(right[1],10);
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

function reducerCalculator(state = initialState, action) {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        input: state.input + action.payload,
      };
    case BACK:
      return{
        ...state,
        input: state.input.substr(0, state.input.length - 1)
      }
      case CALCULATOR:
          return { ...state, input: calc(state.input) };
      case OPERATOR:
        return{
          ...state,
          input: setOper(state.input, action.payload),
        }
    case DOT:
      return{
        ...state,
        input: state.dot + action.payload
      }
    case CLEAN:
          return initialState;
    default:
      return state;
  }
}
function setOper(input, opr) {
  const regex = /^(-)?\d+(\.\d+)?$/g;
  const regex2 = /^(-)?\d+(\.\d+)?(\+|-|\*|\/)$/g;
  console.log(opr);
  if (input.match(regex)) {
    return `${input}${opr}`;
  }
  if (input.match(regex2)) {
    return `${input.slice(0, input.length - 1)}${opr}`;
  }
  const regexOfCompletedForm = /^(-)?\d+(\.\d+)?(\+|-|\*|\/)\d+(\.\d+)?$/;
  if (input.match(regexOfCompletedForm)) {
    input = calc(input);
    return `${input}${opr}`;
  }
  return input;
}
export default reducerCalculator;