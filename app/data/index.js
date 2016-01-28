// Third party.
import { combineReducers } from 'redux';

// Reducers.
import counter from './counter';
import todos   from './todos';

export default combineReducers({
  counter,
  todos,
});
