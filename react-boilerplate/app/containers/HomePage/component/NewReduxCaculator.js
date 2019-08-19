/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from "react";
import { connect } from "react-redux";
const CaculatorRedux = props => { 
  function onNumberSS(e) {
    props.onNumber(e.target.attributes.getNamedItem('data-filter').value)
  }
  function onOperationSS(e) {
    props.onOperation(e.target.attributes.getNamedItem('data-filter').value)
  }
  

  function caculator() {
    const number = parseFloat(props.number);
    const number2 = parseFloat(props.number2);
    const {operator} = props;
    switch (operator) {
      case "-":
        return number2 - number;
      case "+":
        return  number2 + number;
      case "*":
        return  number2 * number;
      case "/":
        return  number2 / number;
      default:
        return 0;
    }
  }

  function getRSSS() {
    const rs = caculator()
    props.getResult(rs)
  }
  function cleanSSS() {
    props.clean();
  }
  function backSSS() {
    props.back();
  }
  return (
    <div>
      <h1>REDUX CACULATOR</h1>
       <br />
        <h1>{props.number ? props.number : '0'}</h1>
        <h1>{props.operator ? props.operator : '0'}</h1>
        <h1>{props.number2 ? props.number2 : '0'}</h1>
        <h1>ket qua : {props.equal ? props.equal : '0'}</h1>
        <br />
        <button type="button" onClick={getRSSS}>=</button>
        <button type="button" onClick={cleanSSS}>C</button>
        <button type="button" onClick={backSSS}>Back</button>
        <button data-filter="+" onClick={onOperationSS} type="button">+</button>
        <button data-filter="-" onClick={onOperationSS} type="button">-</button>
        <button data-filter="*" onClick={onOperationSS} type="button">x</button>
        <button data-filter="/" onClick={onOperationSS} type="button">/</button>
        <br />
        <button data-filter="." type="button" onClick={onNumberSS}>.</button>
        <button data-filter="0" type="button" onClick={onNumberSS}>0</button>
        <button data-filter="1" type="button" onClick={onNumberSS}>1</button>
        <button data-filter="2" type="button" onClick={onNumberSS}>2</button>
        <button data-filter="3" type="button" onClick={onNumberSS}>3</button>
        <button data-filter="4" type="button" onClick={onNumberSS}>4</button>
        <button data-filter="5" type="button" onClick={onNumberSS}>5</button>
        <button data-filter="6" type="button" onClick={onNumberSS}>6</button>
        <button data-filter="7" type="button" onClick={onNumberSS}>7</button>
        <button data-filter="8" type="button" onClick={onNumberSS}>8</button>
        <button data-filter="9" type="button" onClick={onNumberSS}>9</button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    number: state.number,
    number2: state.number2,
    operator: state.operator,
    equal: state.equal,
  };
};
function mapDispatchToProps(dispatch) {
  return { 
    onOperation: (operator) => dispatch({ type: 'OPERATOR',payload: operator }),
    onNumber: (number) => dispatch({ type: 'NUMBER', payload: number }),
    getResult: (rs) => dispatch({ type: 'RESULT', payload: rs }),
    clean: () => dispatch({ type: 'CLEAN' }),
    back: () => dispatch({type: 'BACK'})
   };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CaculatorRedux);