// Third party.
import React, { Component, PropTypes } from 'react';
import { bindActionCreators }          from 'redux';
import { connect }                     from 'react-redux';

// Todos Actions.
import * as todosActions            from 'data/todos/actions';
import * as visibilityFilterActions from 'data/visibilityFilter/actions';

// Counter Component.
import TodosView from 'components/views/Todos';

@connect(state => ({ todos : state.todos, visibilityFilter : state.visibilityFilter }))
export default class TodosContainer extends Component {

  static propTypes = {
    todos            : PropTypes.array,
    visibilityFilter : PropTypes.string,
    dispatch         : PropTypes.func,
  };

  render () {
    const { todos, visibilityFilter, dispatch } = this.props;

    return (
      <TodosView
        todos={todos}
        visibilityFilter={visibilityFilter}
        {...bindActionCreators(todosActions, dispatch)}
        {...bindActionCreators(visibilityFilterActions, dispatch)}
      />
    );
  }

}
