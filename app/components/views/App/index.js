// Third party.
import React, { Component, PropTypes } from 'react';
import { Link }                        from 'react-router';
import { Navbar, Grid, Row, Col }      from 'react-bootstrap';

// Assets.
import './style.scss';

export default class AppView extends Component {

  static propTypes = {
    children : PropTypes.element,
  };

  render () {
    const { Header, Brand, Toggle, Collapse, Text } = Navbar;

    return (
      <div className="app">
        <Navbar>
          <Header>
            <Brand>
              <Link to="/">Redux training</Link>
            </Brand>
            <Toggle />
          </Header>
          <Collapse>
            <Text><Link to="counter">Counter</Link></Text>
            <Text><Link to="todos">Todo List</Link></Text>
          </Collapse>
        </Navbar>
        <Grid>
          <Row>
            <Col xs={12}>{this.props.children}</Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} className="app__footer">
              Made by Kevin Wolf - Fork on <a href="//github.com/kevin-wolf/redux-training" target="_blank">github</a>.
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

}
