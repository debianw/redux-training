// Third party.
import React, { Component, PropTypes } from 'react';
import { bindActionCreators }          from 'redux';
import { connect }                     from 'react-redux';

// Counter Actions.
import * as counterActions from 'data/counter/actions';

// Counter Component.
import CounterView from 'components/views/Counter';

@connect(state => ({ counter : state.counter }))
export default class CounterContainer extends Component {

  static propTypes = {
    counter  : PropTypes.number,
    dispatch : PropTypes.func,
  };

  render () {
    const { counter, dispatch } = this.props;

    return (
      <CounterView
        value={counter}
        {...bindActionCreators(counterActions, dispatch)}
      />
    );
  }

}
