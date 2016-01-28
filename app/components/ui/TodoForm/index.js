// Third party.
import React, { Component, PropTypes } from 'react';
import { Row, Col, Input, Button }     from 'react-bootstrap';

export default class TodoItem extends Component {

  static propTypes = {
    onAddTodo : PropTypes.func,
  };

  constructor (props) {
    super(props);
    this.state = {
      newTodoText : '',
    };
  }

  render () {
    return (
      <form onSubmit={this._onSubmit}>
        <Row>
          <Col xs={12}>
            <Input
              className="new-todo-text"
              type="text"
              value={this.state.newTodoText}
              onChange={this._handleInputChange} />
          </Col>
          <Col xs={12}>
            <Button
              type="submit"
              className="new-todo-button"
              disabled={!this._getInputValue().length}>Add Todo</Button>
          </Col>
        </Row>
      </form>
    );
  }

  _getInputValue = () => {
    return this.state.newTodoText.trim();
  };

  _handleInputChange = (e) => {
    this.setState({ newTodoText : e.target.value });
  };

  _onSubmit = (e) => {
    e.preventDefault();
    const value = this._getInputValue();

    if (!value) {
      return false;
    }

    this.props.onAddTodo({ text : value });
    this.setState({ newTodoText : '' });
  };

}
