// Third party.
import React                         from 'react';
import { render }                    from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider }                  from 'react-redux';
import createBrowserHistory          from 'history/lib/createBrowserHistory';

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
    <Router history={createBrowserHistory()}>
      <Route path="/" component={AppView}>
        <Route path="counter" component={CounterContainer} />
        <Route path="todos" component={TodosContainer} />
        <IndexRoute component={CounterContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
