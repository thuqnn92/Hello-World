/**
 *
 * ToDoList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, createStore } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectToDoList from './selectors';
import reducer from './reducers/reducer';
import saga from './saga';
import Todos from './components/todos';
const store = createStore(reducer);
export function ToDoList() {
  useInjectReducer({ key: 'toDoList', reducer });
  useInjectSaga({ key: 'toDoList', saga });

  return (
    <div>
      <Provider store={store}>
        <Todos />
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
