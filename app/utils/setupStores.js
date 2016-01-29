// Third party.
import { createStore, applyMiddleware, compose } from 'redux';
import thunk                                     from 'redux-thunk';

// All reducers combined.
import rootReducer from 'data';

export default function configureStore (initialState) {
  const finalCreateStore = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store =  finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../data', () => {
      store.replaceReducer(require('../data').default);
    });
  }

  return store;
}
