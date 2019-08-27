/**
 *
 * ToDoList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { createStore } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectToDoList from './selectors';
import reducer from './reducers/reducer';
import saga from './sagas/saga';
import messages from './messages';
import Todolist from './components/Todolist';
const store = createStore(reducer);
export function ToDoList() {
  useInjectReducer({ key: 'toDoList', reducer });
  useInjectSaga({ key: 'toDoList', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Provider store={store}>
        <Todolist />
      </Provider>
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
