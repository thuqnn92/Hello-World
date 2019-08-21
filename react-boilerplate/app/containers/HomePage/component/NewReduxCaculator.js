/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import { connect } from "react-redux";
import React, { Component } from 'react';
import {changeCalculator,changeClean,changeOperator,changeInput,changeBack} from '../actions/Calculator';
const operators = ["+", "-", "*", "/"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class NewReduxCaculator extends Component {
  render() {
    const {setOperator,setClean,setNumber,setResult,input,setBack} = this.props;
    return (
      <div>
        <h1>Redux Calculator</h1>
        <input type="text" readOnly value={input}></input>
        {operators.map((opr, index) => (
            <button type="button" key={index} onClick={() => setOperator(opr)}>
              {opr}
            </button>
          ))}
           <br/>
          <button type="button" onClick={setClean}>C</button>
          <button type="button" onClick={setBack}>Back</button>
          <button type="button" onClick={setResult}>=</button>
        <br/>
        {numbers.map((target,index) => (
          <button type="button" key={index} onClick={()=> setNumber(target)}>
            {target}
          </button>
        ))}
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  input: state.input,
  operator: state.operator,
});

function mapDispatchToProps(dispatch) {
  return { 
    setNumber: input => dispatch(changeInput(input)),
    setOperator: opr => dispatch(changeOperator(opr)),
    setClean: () => dispatch(changeClean()),
    setBack: () => dispatch(changeBack()),
    setResult: () => dispatch(changeCalculator()),
   };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewReduxCaculator);