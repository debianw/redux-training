// Third party.
import React, { Component, PropTypes } from 'react';
import { ListGroupItem, Label }        from 'react-bootstrap';

// Assets.
import './style.scss';

export default class TodoItem extends Component {

  static propTypes = {
    completed : PropTypes.bool,
    text      : PropTypes.string,
  };

  render () {
    const { completed, text } = this.props;

    return (
      <ListGroupItem
        {...this.props}
        className={completed && 'completed' || ''}>
          <Label
            bsStyle={completed && 'success' || 'info'}>{ completed ? 'Completed' : 'Pending' }</Label>
          {' '}
          <span className="todo-item__text">{text}</span>
      </ListGroupItem>
    );
  }

}
