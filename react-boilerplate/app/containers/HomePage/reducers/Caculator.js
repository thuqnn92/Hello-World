/* eslint-disable indent */
/* eslint-disable prettier/prettier */
const initialState = {
      number: '',
      number2: '',
      operator: '',
      equal: ''
}

const onClickReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NUMBER':
      return {
        ...state, number: state.number + action.payload
      }
    case 'OPERATOR':
      return {
        ...state, number2: state.number, number: '', operator: action.payload
      }
    case 'RESULT':
      return {
        ...state, equal: action.payload, number: ''
      }
    case 'CLEAN':
      return {
        ...state, number: '', number2: '', operator: '', equal: ''
      }
    case 'BACK':
      return {
        ...state, number: state.number.substr(0, state.number.length - 1)
      }
      default:
        return state;
  }
}
export default onClickReducer;