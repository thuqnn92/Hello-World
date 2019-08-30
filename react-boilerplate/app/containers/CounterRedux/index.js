/**
 *
 * CounterRedux
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCounterRedux from './selectors';
import reducer from './reducer';
import saga from './saga';
import { increase,decrease} from './actions';
export function CounterRedux({ increasedispatch, decreasedispatch, count }) {
  useInjectReducer({ key: 'counterRedux', reducer });
  useInjectSaga({ key: 'counterRedux', saga });

  return (
    <div>
      <h1>Redux</h1>
      <h1>{count}</h1>
      <button type="button" onClick={increasedispatch}>
        Increment
      </button>
      <button type="button" onClick={decreasedispatch}>
        Decrement
      </button>
    </div>
  );
}

CounterRedux.propTypes = {
  count: PropTypes.number,
  increasedispatch: PropTypes.func,
  decreasedispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  count: state.count,
});

function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch(increase),
    decrease: () => dispatch(decrease),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CounterRedux);
