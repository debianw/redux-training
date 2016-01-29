// Todos constants.
import * as constants from 'utils/constants';

export function addTodo (text) {
  return {
    type : constants.TODOS_ADD,
    text,
  };
}

export function toggleTodo (id) {
  return {
    type : constants.TODOS_TOGGLE,
    id,
  };
}
