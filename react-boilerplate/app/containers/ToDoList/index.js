/**
 *
 * ToDoList
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
import makeSelectToDoList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ToDoList() {
  useInjectReducer({ key: 'toDoList', reducer });
  useInjectSaga({ key: 'toDoList', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ToDoList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  toDoList: makeSelectToDoList(),
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

export default compose(withConnect)(ToDoList);
