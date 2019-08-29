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
        <button onClick={this.indecrement} type="button">
          increment
        </button>
        <button onClick={this.decrement} type="button">
          decrement
        </button>
      </div>
    );
  }
}
