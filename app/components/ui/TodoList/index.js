// Third party.
import React, { Component, PropTypes } from 'react';
import { ListGroup }                   from 'react-bootstrap';

// UI Components/
import TodoItem from 'components/ui/TodoItem';

export default class TodoList extends Component {

  static propTypes = {
    todos        : PropTypes.array,
    onToggleTodo : PropTypes.func,
  };

  render () {
    const todoItems = this.props.todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          {...todo}
          onClick={this._toggleTodoHandler.bind(null, todo.id)} />
      );
    });

    if (!todoItems.length) {
      return null;
    }

    return (
      <ListGroup>{todoItems}</ListGroup>
    );
  }

  _toggleTodoHandler = (id) => {
    this.props.onToggleTodo({ id });
  };

}
