import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p> 0 items left</p>
        <div className="footer-button">
          <button type="button">All</button>
          <button type="button">Active</button>
          <button type="button">Complete</button>
        </div>
        <p>Clear completed</p>
      </div>
    );
  }
}
