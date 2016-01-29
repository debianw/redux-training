// Third party.
import React, { Component, PropTypes } from 'react';

export default class ChangeFilter extends Component {

  static propTypes = {
    activeFilter : PropTypes.string,
    children     : PropTypes.string,
    filter       : PropTypes.string,
    onSetFilter  : PropTypes.func,
  };

  render () {
    if (this.props.filter === this.props.activeFilter) {
      return (
        <span>{this.props.children}</span>
      );
    }

    return (
      <a
        href="#"
        onClick={this._setFilterHandler}>{this.props.children}</a>
    );
  }

  _setFilterHandler = (e) => {
    e.preventDefault();
    this.props.onSetFilter(this.props.filter);
  };

}
