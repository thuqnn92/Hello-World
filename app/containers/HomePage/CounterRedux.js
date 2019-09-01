import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { compose } from 'redux';
// import { useInjectReducer } from 'utils/injectReducer';
// import reducer from './reducer';
import { setDecrement, setIncrement } from './actions';
import { makeSelectCount } from './selectors';
export function CounterRedux({ onIncrement, onDecrement, count }) {
  // useInjectReducer({ key: 'counterRedux', reducer });
  return (
    <div>
      <h1>Redux Counter</h1>
      <button type="button" onClick={onIncrement}>
        Increment
      </button>
      <button type="button" onClick={onDecrement}>
        Decrement
      </button>
      <h1>{count}</h1>
    </div>
  );
}
CounterRedux.propTypes = {
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  count: PropTypes.number,
};
const mapStateToProps = createStructuredSelector({
  count: makeSelectCount(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(setIncrement()),
    onDecrement: () => dispatch(setDecrement()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(CounterRedux);
