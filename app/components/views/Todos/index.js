// Third party.
import React, { Component, PropTypes } from 'react';
import { Row, Col, Alert }             from 'react-bootstrap';

// Assets.
import './style.scss';

// UI components.
import TodoForm from 'components/ui/TodoForm';
import ChangeFilter from 'components/ui/ChangeFilter';
import TodoList from 'components/ui/TodoList';

// Constants.
import * as constants from 'utils/constants';

export default class Todos extends Component {

  static propTypes = {
    addTodo          : PropTypes.func,
    setFilter        : PropTypes.func,
    todos            : PropTypes.array,
    toggleTodo       : PropTypes.func,
    visibilityFilter : PropTypes.string,
  };

  render () {
    const { todos, visibilityFilter } = this.props;
    let todoList;

    function getVisibleTodos () {
      switch (visibilityFilter) {
      case constants.VISIBILITY_FILTER_UNCOMPLETED :
        return todos.filter(t => !t.completed);
      case constants.VISIBILITY_FILTER_COMPLETED :
        return todos.filter(t => t.completed);
      default :
        return todos;
      }
    }

    if (!todos.length) {
      todoList = (
        <Alert>Have some fun! You have not todos.</Alert>
      );
    } else {
      todoList = (
        <Row>
          <Col xs={12}>
            Show:
            {' '}
            <ChangeFilter
              filter={constants.VISIBILITY_FILTER_ALL}
              activeFilter={visibilityFilter}
              onSetFilter={this.props.setFilter}>All</ChangeFilter>
            {' - '}
            <ChangeFilter
              filter={constants.VISIBILITY_FILTER_UNCOMPLETED}
              activeFilter={visibilityFilter}
              onSetFilter={this.props.setFilter}>Pending</ChangeFilter>
            {' - '}
            <ChangeFilter
              filter={constants.VISIBILITY_FILTER_COMPLETED}
              activeFilter={visibilityFilter}
              onSetFilter={this.props.setFilter}>Completed</ChangeFilter>
          </Col>
          <Col xs={12}><TodoList todos={getVisibleTodos()} onTodoClick={this.props.toggleTodo} /></Col>
        </Row>
      );
    }

    return (
      <Row>
        <Col xs={12}><h2>Todos</h2></Col>
        <Col xs={12}><TodoForm onAddTodo={this.props.addTodo} /></Col>
        <Col xs={12} className="todo-list">{todoList}</Col>
      </Row>
    );
  }

}
