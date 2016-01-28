// Third party.
import React, { Component, PropTypes }         from 'react';
import { Row, Col, Well, ButtonGroup, Button } from 'react-bootstrap';

export default class Counter extends Component {

  static propTypes = {
    value     : PropTypes.number,
    increment : PropTypes.func,
    reset     : PropTypes.func,
    decrement : PropTypes.func,
  };

  render () {
    const { value, increment, reset, decrement } = this.props;

    return (
      <Row>
        <Col xs={12}><Well>Counter: {value}</Well></Col>
        <Col xs={12}>
          <ButtonGroup>
            <Button onClick={decrement}>-</Button>
            <Button onClick={reset}>Reset</Button>
            <Button onClick={increment}>+</Button>
          </ButtonGroup>
        </Col>
      </Row>
    );
  }

}
