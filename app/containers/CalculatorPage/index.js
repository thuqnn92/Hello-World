/**
 *
 * CalculatorPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectCalculatorPage } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ReduxCalculator from './ReduxCalculator';
export function CalculatorPage() {
  useInjectReducer({ key: 'calculatorPage', reducer });
  useInjectSaga({ key: 'calculatorPage', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <ReduxCalculator />
    </div>
  );
}

CalculatorPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  calculatorPage: makeSelectCalculatorPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CalculatorPage);
