// Third party.
import { createStore, applyMiddleware, compose } from 'redux';
import { persistState }                          from 'redux-devtools';
import thunk                                     from 'redux-thunk';

// All reducers combined.
import rootReducer from 'data';

// Redux Devtools.
import DevTools from 'components/containers/DevTools';

let finalCreateStore;

if (process.env.NODE_ENV === 'production') {
  finalCreateStore = compose(
    applyMiddleware(thunk)
  )(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
    persistState(
      window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    )
  )(createStore);
}

export default function configureStore (initialState) {
  const store =  finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../data', () => {
      store.replaceReducer(require('../data').default);
    });
  }

  return store;
}
