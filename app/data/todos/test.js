// Todos reducer.
import todos from './';

// Todos constants.
import * as constants from 'utils/constants';

// Todos actions.
import * as todosActions from './actions';

describe('DATA: Todos', () => {
  describe('the addTodo action', () => {
    let action;

    it(`should send ${constants.TODOS_ADD} to the reducer`, () => {
      action = todosActions.addTodo({ text : 'Learn Redux' });
      expect(action).toEqual({
        type : constants.TODOS_ADD,
        text : 'Learn Redux',
      });
    });

    it('should return the added todo concatenated to the state', () => {
      const stateBefore = deepFreeze([]);
      const stateAfter = [{
        id        : 1,
        text      : 'Learn Redux',
        completed : false,
      }];

      expect(todos(stateBefore, action)).toEqual(stateAfter);
    });
  });

  describe('the toggleTodo action', () => {
    let action;

    it(`should send ${constants.TODOS_TOGGLE} to the reducer`, () => {
      action = todosActions.toggleTodo({ id : 2 });
      expect(action).toEqual({
        type : constants.TODOS_TOGGLE,
        id   : 2,
      });
    });

    it('should return the list of todos with the modified todo', () => {
      const stateBefore = deepFreeze([{
        id        : 1,
        text      : 'Learn Redux',
        completed : false,
      }, {
        id        : 2,
        text      : 'Go shopping',
        completed : false,
      }]);
      const stateAfter = [{
        id        : 1,
        text      : 'Learn Redux',
        completed : false,
      }, {
        id        : 2,
        text      : 'Go shopping',
        completed : true,
      }];

      expect(todos(stateBefore, action)).toEqual(stateAfter);
    });
  });
});
