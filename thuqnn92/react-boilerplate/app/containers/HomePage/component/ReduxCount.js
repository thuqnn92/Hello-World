import React, { Component } from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT } from '../actions/index';
class CountRedux extends Component {
  constructor(props) {
    super(props);
  }

  IncreaseHandler = () => {
    this.props.Increase();
  };

  DecreaseHandler = () => {
    this.props.Decrease();
  };

  render() {
    return (
      <div>
        <div className="box-heading">
          <h1>Count Redux</h1>
        </div>
        <div className="box">
          <div className="box-count">
            <h2>{this.props.count}</h2>
          </div>
          <div className="box-buttons">
            <button onClick={this.IncreaseHandler}>UP</button>
            <button onClick={this.DecreaseHandler}>DOWN</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
});
const mapDispatchToProps = (dispatch) => {
  return {
    Increase: () => dispatch({ type: 'INCREMENT' }),
    Decrease: () => dispatch({ type: 'DECREMENT' }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountRedux);
