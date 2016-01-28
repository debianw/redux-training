// Third party.
import React, { Component, PropTypes } from 'react';
import { bindActionCreators }          from 'redux';
import { connect }                     from 'react-redux';

// Todos Actions.
import * as todosActions from 'data/todos/actions';

// Counter Component.
import TodosView from 'components/views/Todos';

@connect(state => ({ todos : state.todos }))
export default class TodosContainer extends Component {

  static propTypes = {
    todos    : PropTypes.array,
    dispatch : PropTypes.func,
  };

  render () {
    const { todos, dispatch } = this.props;

    return (
      <TodosView
        todos={todos}
        {...bindActionCreators(todosActions, dispatch)}
      />
    );
  }

}
