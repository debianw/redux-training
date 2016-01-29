// Reducer.
import visibilityFilter from './';

// Constants.
import * as constants from 'utils/constants';

// Actions.
import * as visibilityFilterActions from './actions';

describe('DATA: Visibility Filter', () => {
  it(`should return ${constants.VISIBILITY_FILTER_ALL} as the default filter`, () => {
    expect(visibilityFilter(undefined, {})).toBe(constants.VISIBILITY_FILTER_ALL);
  });

  describe('the setFilter action', () => {
    let action;

    it(`should send ${constants.VISIBILITY_FILTER_SET} to the reducer`, () => {
      action = visibilityFilterActions.setFilter(constants.VISIBILITY_FILTER_COMPLETED);
      expect(action).toEqual({
        type   : constants.VISIBILITY_FILTER_SET,
        filter : constants.VISIBILITY_FILTER_COMPLETED,
      });
    });

    it('should return the changed filter on the state', () => {
      expect(visibilityFilter(undefined, action)).toBe(constants.VISIBILITY_FILTER_COMPLETED);
    });
  });
});
