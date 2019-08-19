import React, { Component } from 'react';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Count: 0,
    };
  }

  increment = () => {
    this.setState({
      Count: this.state.Count + 1,
    });
  };

  decement = () => {
    this.setState({
      Count: this.state.Count - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Count Class Component</h1>
        <h1>{this.state.Count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decement}>-</button>
      </div>
    );
  }
}
