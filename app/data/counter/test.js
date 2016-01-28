// Counter reducer.
import counter from './';

// Counter constants.
import * as constants from 'utils/constants';

// Counter actions.
import * as counterActions from './actions';

describe('DATA: Counter', () => {
  describe('the increment action', () => {
    let action;

    it(`should send ${constants.COUNTER_INCREMENT} to the reducer`, () => {
      action = counterActions.increment();
      expect(action).toEqual({
        type : constants.COUNTER_INCREMENT,
      });
    });

    it('should return the incremented state', () => {
      expect(counter(0, action)).toBe(1);
      expect(counter(17, action)).toBe(18);
    });
  });

  describe('the decrement action', () => {
    let action;

    it(`should send ${constants.COUNTER_DECREMENT} to the reducer`, () => {
      action = counterActions.decrement();
      expect(action).toEqual({
        type : constants.COUNTER_DECREMENT,
      });
    });

    it('should return the decremented state', () => {
      expect(counter(1, action)).toBe(0);
      expect(counter(17, action)).toBe(16);
    });
  });

  describe('the reset action', () => {
    let action;

    it(`should send ${constants.COUNTER_RESET} to the reducer`, () => {
      action = counterActions.reset();
      expect(action).toEqual({
        type : constants.COUNTER_RESET,
      });
    });

    it('should return the reseted store', () => {
      expect(counter(1, action)).toBe(0);
      expect(counter(17, action)).toBe(0);
    });
  });
});
