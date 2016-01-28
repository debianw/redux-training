// Third party.
import React, { Component, PropTypes } from 'react';
import { Link }                        from 'react-router';
import { Navbar, Grid }                from 'react-bootstrap';

// Redux DevTools.
import DevTools from 'components/containers/DevTools';

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
            <Brand>Redux training</Brand>
            <Toggle />
          </Header>
          <Collapse>
            <Text><Link to="counter">Counter</Link></Text>
            <Text><Link to="todos">Todo List</Link></Text>
          </Collapse>
        </Navbar>
        <Grid>{this.props.children}</Grid>
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </div>
    );
  }

}
