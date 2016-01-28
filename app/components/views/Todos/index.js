// Third party.
import React, { Component, PropTypes }    from 'react';
import { Row, Col, Input, Button, Alert, ListGroup, ListGroupItem } from 'react-bootstrap';

// Assets.
import './style.scss';

export default class Todos extends Component {

  static propTypes = {
    addTodo : PropTypes.func,
    todos   : PropTypes.array,
  };

  constructor (props) {
    super(props);
    this.state = {
      newTodoText : '',
    };
  }

  renderTodoItem (todo) {
    return (
      <ListGroupItem key={todo.id}>{todo.text}</ListGroupItem>
    );
  }

  renderTodoList (todos) {
    if (!todos.length) {
      return (
        <Alert>Have some fun! You have not todos.</Alert>
      );
    }

    return (
      <ListGroup>{todos.map(this.renderTodoItem)}</ListGroup>
    );
  }

  render () {
    const { todos } = this.props;

    return (
      <Row>
        <Col xs={12}><h2>Todos</h2></Col>
        <Col xs={12}>
          <Input
            className="new-todo-text"
            type="text"
            ref="newTodoText"
            value={this.state.newTodoText}
            onChange={this._handleInputChange}
            onKeyDown={this._handleKeyDown} />
        </Col>
        <Col xs={12}>
          <Button
            className="new-todo-button"
            onClick={this._onAddTodo}>Add Todo</Button>
        </Col>
        <Col xs={12} className="todo-list">{this.renderTodoList(todos)}</Col>
      </Row>
    );
  }

  _handleInputChange = () => {
    this.setState({
      newTodoText : this.refs.newTodoText.getValue(),
    });
  };

  _handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this._onAddTodo();
    }
  };

  _onAddTodo = () => {
    const value = this.refs.newTodoText.getValue().trim();

    if (value) {
      this.props.addTodo({ text : this.refs.newTodoText.getValue() });
      this.setState({ newTodoText : '' });
    }
  };

}
