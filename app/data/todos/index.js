// Todos constants.
import * as constants from 'utils/constants';

export default function todosReducer (state = [], action) {
  switch (action.type) {
  case constants.TODOS_ADD:
    return state.concat({
      id        : state.length + 1,
      text      : action.text,
      completed : false,
    });

  case constants.TODOS_TOGGLE:
    return state.map((todo) => {
      if (todo.id !== action.id) {
        return todo;
      }

      return Object.assign({}, todo, {
        completed : !todo.completed,
      });
    });

  default:
    return state;
  }
}
