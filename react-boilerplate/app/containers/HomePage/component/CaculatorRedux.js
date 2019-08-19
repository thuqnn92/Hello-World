/* eslint-disable prefer-destructuring */
/* eslint-disable radix */
/* eslint-disable object-shorthand */
/* eslint-disable indent */
/* eslint-disable consistent-return */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable lines-between-class-members */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class CaculatorClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      number2: '',
      operator: '',
      equal: ''
    }
  }
  onNumber = (e) => {
    this.setState({
      number: this.state.number + e.target.attributes.getNamedItem('data-filter').value,
    })
  }
  onOperation = (e) => {
    const operator = e.target.attributes.getNamedItem('data-filter').value;
    this.setState({
      number2: this.state.number,
      number: '',
      operator: operator
    });
  }
  getResult = () => {
    
    this.setState({
      equal: this.caculator(),
      number: ''
    })
  }
  caculator() {
    const number = parseFloat(this.state.number);
    const number2 = parseFloat(this.state.number2);
    const operator = this.state.operator;
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
  clean = () => {
    this.setState({
      number: '',
      number2: '',
      operator: '',
      equal: ''
    })
  }
  back = () => {
    const number = this.state.number;
    this.setState({
      number: number.substr(0, number.length - 1)
    })
  }
  render() {
    return (
      <div>
        <h1>Class Caculator</h1>
        <br />
        <h1>{this.state.number ? this.state.number : '0'}</h1>
        <h1>{this.state.operator ? this.state.operator : '0'}</h1>
        <h1>{this.state.number2 ? this.state.number2 : '0'}</h1>
        <h1>ket qua : {this.state.equal ? this.state.equal : '0'}</h1>
        <br />
        <button type="button" onClick={this.getResult}>=</button>
        <button type="button" onClick={this.clean}>C</button>
        <button type="button" onClick={this.back}>Back</button>
        <button data-filter="+" onClick={this.onOperation} type="button">+</button>
        <button data-filter="-" onClick={this.onOperation} type="button">-</button>
        <button data-filter="*" onClick={this.onOperation} type="button">x</button>
        <button data-filter="/" onClick={this.onOperation} type="button">/</button>
        <br />
        <button data-filter="." type="button" onClick={this.onNumber}>.</button>
        <button data-filter="0" type="button" onClick={this.onNumber}>0</button>
        <button data-filter="1" type="button" onClick={this.onNumber}>1</button>
        <button data-filter="2" type="button" onClick={this.onNumber}>2</button>
        <button data-filter="3" type="button" onClick={this.onNumber}>3</button>
        <button data-filter="4" type="button" onClick={this.onNumber}>4</button>
        <button data-filter="5" type="button" onClick={this.onNumber}>5</button>
        <button data-filter="6" type="button" onClick={this.onNumber}>6</button>
        <button data-filter="7" type="button" onClick={this.onNumber}>7</button>
        <button data-filter="8" type="button" onClick={this.onNumber}>8</button>
        <button data-filter="9" type="button" onClick={this.onNumber}>9</button>
      </div>
    )
  }
}
