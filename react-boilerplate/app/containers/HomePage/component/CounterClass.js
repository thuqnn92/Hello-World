/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/button-has-type */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  indecrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Class</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.indecrement}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}
