// Third party.
import React, { Component, PropTypes } from 'react';
import { Row, Col, Alert }             from 'react-bootstrap';

// Assets.
import './style.scss';

// UI components.
import TodoForm from 'components/ui/TodoForm';
import TodoList from 'components/ui/TodoList';

export default class Todos extends Component {

  static propTypes = {
    addTodo    : PropTypes.func,
    todos      : PropTypes.array,
    toggleTodo : PropTypes.func,
  };

  renderTodoList = (todos) => {
    if (!todos.length) {
      return (
        <Alert>Have some fun! You have not todos.</Alert>
      );
    }

    return (
      <TodoList todos={todos} onToggleTodo={this.props.toggleTodo} />
    );
  };

  render () {
    const { todos } = this.props;

    return (
      <Row>
        <Col xs={12}><h2>Todos</h2></Col>
        <Col xs={12}><TodoForm onAddTodo={this.props.addTodo} /></Col>
        <Col xs={12} className="todo-list">{this.renderTodoList(todos)}</Col>
      </Row>
    );
  }

}
