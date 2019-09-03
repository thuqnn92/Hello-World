import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';
import CheckAll from '../img/CheckAll.svg';
// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      // eslint-disable-next-line react/no-unused-state
      currentFilter: 'all', // all,active,complete
      todoItems: [
        { title: 'Mua Bim Bim', isComplete: true },
        { title: 'Mua Banh', isComplete: false },
        { title: 'Mua Keo', isComplete: true },
      ],
    };
  }

  onItemClick(item) {
    return () => {
      const { isComplete } = item;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete,
          },
          ...todoItems.slice(index + 1),
        ],
      });
    };
  }

  onKeyUp = event => {
    if (event.keyCode === 13) {
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }
      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false },
          // eslint-disable-next-line react/no-access-state-in-setstate
          ...this.state.todoItems,
        ],
      });
    }
  };

  onChange = event => {
    this.setState({
      newItem: event.target.value,
    });
  };

  render() {
    const { todoItems, newItem } = this.state;
    return (
      <div className="TodoList">
        <h1>todos</h1>
        <div className="header">
          <img src={CheckAll} width={32} height={32} alt="input" />
          <input
            type="text"
            placeholder="What needs to be done?"
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
        {todoItems.length > 0 &&
          todoItems.map((item, index) => (
            <TodoItem
              item={item}
              key={index.toString()}
              onClick={this.onItemClick(item)}
            />
          ))}
        {todoItems.length === 0 && 'Nothing here'}
        <Footer />
      </div>
    );
  }
}
