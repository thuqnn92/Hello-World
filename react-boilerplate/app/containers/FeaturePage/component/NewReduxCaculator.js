import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  setCleanAction,
  setInputAction,
  setDotAction,
  SetCalculatorAction,
  SetBackAction,
  SetOperatorAction,
  setMinusAction,
} from '../actions/Calculator';
const operators = ['-', '+', '*', '/'];
const numbers = [
  { number: '0', id: '0' },
  { number: '1', id: '1' },
  { number: '2', id: '2' },
  { number: '3', id: '3' },
  { number: '4', id: '4' },
  { number: '5', id: '5' },
  { number: '6', id: '6' },
  { number: '7', id: '7' },
  { number: '8', id: '8' },
  { number: '9', id: '9' },
];

class NewReduxCaculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setMinusOperator = operator => {
    const regex = /^(-)?$/;
    if (String(this.props.input).match(regex)) {
      this.props.setMinus();
    } else {
      this.props.setOperator(operator);
    }
  };

  render() {
    const {
      setOperator,
      setClean,
      setNumber,
      setResult,
      input,
      setBack,
      setDot,
    } = this.props;
    return (
      <div>
        <h1>Redux Calculator</h1>
        <input type="text" readOnly value={input} />
        <button
          type="button"
          onClick={() => this.setMinusOperator(operators[0])}
        >
          {operators[0]}
        </button>
        {operators.slice(1).map(opr => (
          <button type="button" key={opr.id} onClick={() => setOperator(opr)}>
            {opr}
          </button>
        ))}
        <br />
        <button type="button" onClick={setClean}>
          C
        </button>
        <button type="button" onClick={setDot}>
          .
        </button>
        <button type="button" onClick={setBack}>
          Back
        </button>
        <button type="button" onClick={setResult}>
          =
        </button>
        <br />
        {numbers.map(target => (
          <button
            type="button"
            key={target.id}
            onClick={() => setNumber(target.number)}
          >
            {target.number}
          </button>
        ))}
      </div>
    );
  }
}
NewReduxCaculator.propTypes = {
  setOperator: PropTypes.func,
  setClean: PropTypes.func,
  setNumber: PropTypes.func,
  setResult: PropTypes.func,
  input: PropTypes.any,
  setBack: PropTypes.func,
  setDot: PropTypes.func,
  setMinus: PropTypes.func,
};
const mapStateToProps = state => ({
  input: state.input,
  operator: state.operator,
});

function mapDispatchToProps(dispatch) {
  return {
    setNumber: input => dispatch(setInputAction(input)),
    setOperator: opr => dispatch(SetOperatorAction(opr)),
    setClean: () => dispatch(setCleanAction()),
    setBack: () => dispatch(SetBackAction()),
    setResult: () => dispatch(SetCalculatorAction()),
    setDot: input => dispatch(setDotAction(input)),
    setMinus: () => dispatch(setMinusAction()),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewReduxCaculator);
