import React, { memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { increase, decrease } from '../actions/index';
import reducer from '../reducers/index';
export function AppRedux({ increasedispatch, decreasedispatch, count }) {
  useInjectReducer({ key: 'counter', reducer });
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
AppRedux.propTypes = {
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

export default compose(
  withConnect,
  memo,
)(AppRedux);
