// Third party.
import React, { Component, PropTypes } from 'react';
import { ListGroupItem, Label }        from 'react-bootstrap';

// Assets.
import './style.scss';

export default class TodoItem extends Component {

  static propTypes = {
    id        : PropTypes.number,
    completed : PropTypes.bool,
    text      : PropTypes.string,
  };

  render () {
    const { id, completed, text } = this.props;

    return (
      <ListGroupItem
        {...this.props}
        className={completed && 'completed' || ''}
        key={id}>
          <Label
            bsStyle={completed && 'success' || 'info'}>{ completed ? 'Completed' : 'Pending' }</Label>
          {' '}
          <span className="todo-item__text">{text}</span>
      </ListGroupItem>
    );
  }

}
