import React, { Component } from 'react';
import {
  setAddTodoAction,
  setClearAction,
  setCompleteAllAction,
  setDeleteTodoAction,
  setCompleteTodoAction,
  setEditTodoAction,
} from '../actions/actions';
export default class todos extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <form>
          <input type="text" placeholder="enter text" />
        </form>
      </div>
    );
  }
}
