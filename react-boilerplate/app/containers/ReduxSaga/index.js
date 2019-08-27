/**
 *
 * ReduxSaga
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
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import makeSelectReduxSaga from './selectors';
import reducer from './reducers/reducer';
import saga from './sagas/saga';
import messages from './messages';
import App from './components/App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export function ReduxSaga() {
  useInjectReducer({ key: 'reduxSaga', reducer });
  useInjectSaga({ key: 'reduxSaga', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Provider store={store}>
      <App />
    </Provider>
    </div>
  );
}

ReduxSaga.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  reduxSaga: makeSelectReduxSaga(),
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

export default compose(withConnect)(ReduxSaga);
