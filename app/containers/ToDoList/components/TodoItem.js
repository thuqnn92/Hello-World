/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Todos.css';
import Check from '../img/Check.svg';
import unCheck from '../img/NotCheck.svg';
// eslint-disable-next-line react/prefer-stateless-function
export default class TodoItem extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { item, onClick } = this.props;
    let url = unCheck;
    if (item.isComplete) {
      url = Check;
    }
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        className={classNames('TodoItem', {
          'TodoItem-complete': item.isComplete,
        })}
      >
        <img onClick={onClick} src={url} width={32} alt="img" />
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}
TodoItem.propTypes = {
  item: PropTypes.shape({
    isComplete: PropTypes.bool,
    title: PropTypes.string,
  }),
  onClick: PropTypes.func,
};
