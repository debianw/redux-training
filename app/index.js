// Third party.
import React             from 'react';
import { render }        from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider }      from 'react-redux';

// Setup stores.
import setupStores from 'utils/setupStores';

// Views/Containers.
import AppView          from 'components/views/App';
import CounterContainer from 'components/containers/Counter';
import TodosContainer   from 'components/containers/Todos';

// Setup the stores and pass the initial state.
const store = setupStores({});

render((
  <Provider store={store}>
    <Router>
      <Route path="/" component={AppView}>
        <Route path="counter" component={CounterContainer} />
        <Route path="todos" component={TodosContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
